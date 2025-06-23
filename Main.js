// === MAIN ENTRY POINTS & ROUTING (FIXED VERSION WITH JSON VARIANTS) ===

function doGet(e) {
  return handleRequest_(e, "GET");
}

function doPost(e) {
  return handleRequest_(e, "POST");
}

function handleRequest_(e, method) {
  try {
    var action = (e.parameter && e.parameter.action) ||
                 (e.postData && e.postData.contents && JSON.parse(e.postData.contents).action);

    if (method === "OPTIONS") return doOptions(e);

    var routes = {
      // --- ENTRIES ---
      "addEntry": addEntry,
      "updateEntry": updateEntry,
      "deleteEntry": deleteEntry,
      "getEntries": getEntries,

      // --- ARTISTS ---
      "addArtist": addArtist,
      "deleteArtist": deleteArtist,
      "uploadArtistList": uploadArtistList,
      "clearArtistList": clearArtistList,
      "getArtistList": getArtistList,

      // --- JUDGES ---
      "addJudge": addJudgeJSON,
      "addJudgeJSON": addJudgeJSON,
      "deleteJudge": deleteJudgeJSON,
      "deleteJudgeJSON": deleteJudgeJSON,
      "getJudges": getJudges,
      "getJudgeToken": getJudgeTokenJSON,
      "generateToken": generateTokenJSON,
      "getJudgeTokenJSON": getJudgeTokenJSON,
      "generateTokenJSON": generateTokenJSON,
      "sendJudgeLinkEmail": sendJudgeLinkEmail,

      // --- CATEGORIES ---
      "addCategory": addCategoryJSON,
      "addCategoryJSON": addCategoryJSON,        // Added: support for JSON variant
      "deleteCategory": deleteCategoryJSON,
      "deleteCategoryJSON": deleteCategoryJSON,  // Added: support for JSON variant
      "getCategories": getCategories,

      // --- CONSENT & CLIENT DATA ---
      "submitConsent": submitConsent,
      "deleteClient": deleteClient,
      "clearClientData": clearClientData,
      "importConsentClients": importConsentClients,
      "getClientData": getClientData,
      "exportClientData": exportClientData,
      
       // --- JUDGING/SCORES for FEEDBACK MODULE ---
      "getRawScores": getRawScores, // <--- Just add this!
      "sendFeedbackReport": sendFeedbackReport,
      "getEventData": getEventData,
      // --- LEADERBOARD & SPECIAL ---
      "getLeaderboard": getLeaderboard
    };

    if (action && routes[action]) {
      return routes[action](e);
    }

    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: "Unknown or missing action parameter"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log("Error in handleRequest_: " + err);
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: "API error: " + err
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}