// === CONSENT FORM & CLIENT DATA MANAGEMENT FUNCTIONS (Node.js/Google Sheets API/Codespace version) ===

const { google } = require('googleapis');
const { getEventConfig } = require('./api-getters');
require('dotenv').config();

// Helper: Get Client Data sheet info for a given event
async function getClientDataSheet(auth, eventKey) {
  const eventConfig = await getEventConfig(auth, eventKey);
  const spreadsheetId = eventConfig.sheetId || eventConfig.SHEET_ID;
  if (!spreadsheetId) throw new Error('sheetId missing for event');
  const sheetName = "Client Data";
  return { spreadsheetId, sheetName };
}

// Helper: Get Med History & Consent sheet info for a given event
async function getMedHistoryConsentSheet(auth, eventKey) {
  const eventConfig = await getEventConfig(auth, eventKey);
  const spreadsheetId = eventConfig.sheetId || eventConfig.SHEET_ID;
  if (!spreadsheetId) throw new Error('sheetId missing for event');
  const sheetName = "Med History & Consent";
  return { spreadsheetId, sheetName };
}

// Get all client data
async function getClientData(auth, eventKey) {
  const { spreadsheetId, sheetName } = await getClientDataSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: sheetName,
  }).catch(() => ({ data: { values: [] } }));
  const rows = response.data.values || [];
  const clients = [];
  for (let i = 1; i < rows.length; i++) {
    clients.push({
      name: rows[i][0] || "",
      email: rows[i][1] || "",
      phone: rows[i][2] || "",
      notes: rows[i][3] || "",
      dateAdded: rows[i][4] || "",
    });
  }
  return clients;
}

// Add client to Client Data sheet
async function addToClientData(auth, eventKey, name, email, phone, notes) {
  const { spreadsheetId, sheetName } = await getClientDataSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const timestamp = new Date().toISOString();
  await sheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: sheetName,
    valueInputOption: 'USER_ENTERED',
    resource: { values: [[name, email, phone, notes, timestamp]] }
  });
  return true;
}

// Clear all client data except header
async function clearClientData(auth, eventKey) {
  const { spreadsheetId, sheetName } = await getClientDataSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const response = await sheets.spreadsheets.values.get({
    auth, spreadsheetId, range: sheetName
  }).catch(() => ({ data: { values: [] } }));
  const rows = response.data.values || [];
  if (rows.length > 1) {
    const sheetId = await getSheetIdByName(auth, spreadsheetId, sheetName);
    await sheets.spreadsheets.batchUpdate({
      auth,
      spreadsheetId,
      resource: {
        requests: [
          {
            deleteDimension: {
              range: {
                sheetId,
                dimension: "ROWS",
                startIndex: 1,
                endIndex: rows.length
              }
            }
          }
        ]
      }
    });
  }
  return { success: true, message: "Client data cleared successfully" };
}

// Delete a client by email
async function deleteClient(auth, eventKey, email) {
  if (!email) return { success: false, error: "Email is required" };
  const { spreadsheetId, sheetName } = await getClientDataSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const response = await sheets.spreadsheets.values.get({
    auth, spreadsheetId, range: sheetName
  }).catch(() => ({ data: { values: [] } }));
  const rows = response.data.values || [];
  for (let i = 1; i < rows.length; i++) {
    if ((rows[i][1] || '').toString().trim() === email) {
      const sheetId = await getSheetIdByName(auth, spreadsheetId, sheetName);
      await sheets.spreadsheets.batchUpdate({
        auth,
        spreadsheetId,
        resource: {
          requests: [
            {
              deleteDimension: {
                range: {
                  sheetId,
                  dimension: "ROWS",
                  startIndex: i,
                  endIndex: i + 1
                }
              }
            }
          ]
        }
      });
      return { success: true, message: "Client deleted successfully" };
    }
  }
  return { success: false, error: "Client not found" };
}

// Import clients from Consent sheet if consent given
async function importConsentClients(auth, eventKey) {
  const { spreadsheetId } = await getClientDataSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const consentRange = "Med History & Consent";
  const clientRange = "Client Data";
  const [consentResponse, clientResponse] = await Promise.all([
    sheets.spreadsheets.values.get({
      auth, spreadsheetId, range: consentRange
    }).catch(() => ({ data: { values: [] } })),
    sheets.spreadsheets.values.get({
      auth, spreadsheetId, range: clientRange
    }).catch(() => ({ data: { values: [] } })),
  ]);
  const consentData = consentResponse.data.values || [];
  const clientData = clientResponse.data.values || [];
  const existing = {};
  for (let i = 1; i < clientData.length; i++) {
    const email = (clientData[i][1] || '').toString().trim().toLowerCase();
    if (email) existing[email] = true;
  }

  const headers = consentData[0] ? consentData[0].map(String) : [];
  const nameCol = headers.findIndex(h => /name/i.test(h));
  const emailCol = headers.findIndex(h => /email/i.test(h));
  let shareCol = headers.findIndex(h => /consent|share/i.test(h));
  if (shareCol === -1) shareCol = 19; // fallback

  let added = 0;
  for (let i = 1; i < consentData.length; i++) {
    const share = (consentData[i][shareCol] || consentData[i][19] || '').toString().trim().toLowerCase();
    if (share === "yes" || share === "y" || share === "true" || share === "agreed") {
      const name = (consentData[i][nameCol] || '').toString().trim();
      const email = (consentData[i][emailCol] || '').toString().trim().toLowerCase();
      if (email && !existing[email]) {
        await sheets.spreadsheets.values.append({
          auth, spreadsheetId, range: clientRange, valueInputOption: 'USER_ENTERED',
          resource: { values: [[name, email, '', '', new Date().toISOString()]] }
        });
        existing[email] = true;
        added++;
      }
    }
  }
  return { success: true, count: added, message: "Imported " + added + " new clients from consent sheet." };
}

// Consent form submission handler
async function submitConsent(auth, params) {
  const {
    eventKey, eventName = eventKey,
    clientName, clientEmail, artistName, artistEmail = '',
    DOB: dob, Phone: phone, FullAddress: address,
    ageConfirm, riskConfirm, liabilityConfirm, mediaRelease,
    noIssues, medicalIssues, medicalDetails, aftercareAdvice,
    eatBefore, unwell, noAlcohol, marketingConsent,
    idPhotoUrl = ''
  } = params;

  if (
    !eventKey || !clientName || !clientEmail ||
    !artistName || !dob || !phone || !address
  ) {
    return { success: false, error: "Missing required fields" };
  }

  // Save to Med History & Consent
  const { spreadsheetId, sheetName } = await getMedHistoryConsentSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const timestamp = new Date().toISOString();
  await sheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: sheetName,
    valueInputOption: 'USER_ENTERED',
    resource: { values: [[
      timestamp, clientName, clientEmail, artistName, artistEmail,
      dob, phone, address,
      yesNo(ageConfirm),
      yesNo(riskConfirm),
      yesNo(liabilityConfirm),
      mediaRelease,
      yesNo(noIssues),
      medicalIssues,
      medicalDetails,
      yesNo(aftercareAdvice),
      yesNo(eatBefore),
      yesNo(unwell),
      yesNo(noAlcohol),
      marketingConsent,
      idPhotoUrl,
      idPhotoUrl ? 'ID Photo' : '',
      idPhotoUrl ? 'Uploadcare' : ''
    ]] }
  });

  // Add to Client Data
  await addToClientData(auth, eventKey, clientName, clientEmail, phone, "Consent form submitted");

  // Email logic would be implemented here with nodemailer if needed

  return {
    success: true,
    message: "Consent form submitted successfully",
    emailsSent: {
      client: false,
      aftercare: false,
      artist: false
    }
  };
}

// Helper: Get sheetId for a tab by name
async function getSheetIdByName(auth, spreadsheetId, sheetName) {
  const sheetsApi = google.sheets('v4');
  const meta = await sheetsApi.spreadsheets.get({ auth, spreadsheetId });
  const sheet = (meta.data.sheets || []).find(s => s.properties.title === sheetName);
  if (!sheet) throw new Error(`Sheet/tab "${sheetName}" not found`);
  return sheet.properties.sheetId;
}

function yesNo(v) {
  return (v === true || v === "true" || v === "Yes" || v === "yes") ? "Yes" : "No";
}

module.exports = {
  getClientData,
  addToClientData,
  clearClientData,
  deleteClient,
  importConsentClients,
  submitConsent,
};