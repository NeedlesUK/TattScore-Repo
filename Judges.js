// === JUDGE MANAGEMENT FUNCTIONS (Node.js/Google Sheets API/Codespace version) ===

const { google } = require('googleapis');
const { getEventConfig } = require('./api-getters');
const { v4: uuidv4 } = require('uuid'); // for generating tokens
require('dotenv').config();

// Helper to get Judges sheet info for a given event
async function getJudgesSheet(auth, eventKey) {
  const eventConfig = await getEventConfig(auth, eventKey);
  const spreadsheetId = eventConfig.sheetId || eventConfig.SHEET_ID;
  if (!spreadsheetId) throw new Error('sheetId missing for event');
  const sheetName = 'Judges';
  return { spreadsheetId, sheetName };
}

// Get all judges for an event
async function getJudges(auth, eventKey) {
  const { spreadsheetId, sheetName } = await getJudgesSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const response = await sheets.spreadsheets.values.get({
    auth, spreadsheetId, range: sheetName
  }).catch(() => ({ data: { values: [] } }));
  const rows = response.data.values || [];
  const judges = [];
  for (let i = 1; i < rows.length; i++) {
    judges.push({
      name: rows[i][0] || "",
      token: rows[i][1] || "",
      email: rows[i][2] || "",
      created: rows[i][3] || ""
    });
  }
  return judges;
}

// Add a judge; optionally send email if sendEmail === true
async function addJudge(auth, { judgeName, judgeEmail = '', eventKey, sendEmail }) {
  if (!judgeName) return { success: false, error: "Judge name is required" };
  const { spreadsheetId, sheetName } = await getJudgesSheet(auth, eventKey);
  const sheets = google.sheets('v4');

  const response = await sheets.spreadsheets.values.get({
    auth, spreadsheetId, range: sheetName
  }).catch(() => ({ data: { values: [] } }));
  const rows = response.data.values || [];

  // Check if judge exists
  for (let i = 1; i < rows.length; i++) {
    if ((rows[i][0] || '').trim().toLowerCase() === judgeName.toLowerCase()) {
      return { success: false, error: "Judge already exists" };
    }
  }

  // Add new judge ([Name, Token, Email, Created])
  await sheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: sheetName,
    valueInputOption: 'USER_ENTERED',
    resource: { values: [[judgeName, '', judgeEmail, new Date().toISOString()]] }
  });

  let resp = { success: true, message: "Judge added successfully" };
  if (sendEmail && judgeEmail && eventKey) {
    // Implement your nodemailer logic here if needed
    // const mailResult = await sendJudgeLinkEmail({ judgeName, judgeEmail, eventKey }, auth);
    // if (mailResult.success) resp.emailSent = true;
    // else { resp.emailSent = false; resp.emailError = mailResult.error; }
  }
  return resp;
}

// Delete a judge by name
async function deleteJudge(auth, { judgeName, eventKey }) {
  if (!judgeName) return { success: false, error: "Judge name is required" };
  const { spreadsheetId, sheetName } = await getJudgesSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const response = await sheets.spreadsheets.values.get({
    auth, spreadsheetId, range: sheetName
  }).catch(() => ({ data: { values: [] } }));
  const rows = response.data.values || [];

  for (let i = 1; i < rows.length; i++) {
    if ((rows[i][0] || '').trim().toLowerCase() === judgeName.toLowerCase()) {
      const sheetId = await getSheetIdByName(auth, spreadsheetId, sheetName);
      await sheets.spreadsheets.batchUpdate({
        auth,
        spreadsheetId,
        resource: {
          requests: [{
            deleteDimension: {
              range: {
                sheetId,
                dimension: "ROWS",
                startIndex: i,
                endIndex: i + 1
              }
            }
          }]
        }
      });
      return { success: true, message: "Judge deleted successfully" };
    }
  }
  return { success: false, error: "Judge not found" };
}

// Get a judge's token by name
async function getJudgeToken(auth, { judgeName, eventKey }) {
  if (!judgeName) return { success: false, error: "Judge name is required" };
  const { spreadsheetId, sheetName } = await getJudgesSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const response = await sheets.spreadsheets.values.get({
    auth, spreadsheetId, range: sheetName
  }).catch(() => ({ data: { values: [] } }));
  const rows = response.data.values || [];

  for (let i = 1; i < rows.length; i++) {
    if ((rows[i][0] || '').trim().toLowerCase() === judgeName.toLowerCase()) {
      return { success: true, token: rows[i][1] || null };
    }
  }
  return { success: false, error: "Judge not found" };
}

// Generate a new token for a judge, optionally send by email
async function generateJudgeToken(auth, { judgeName, judgeEmail, eventKey, sendEmail }) {
  if (!judgeName) return { success: false, error: "Judge name is required" };
  const { spreadsheetId, sheetName } = await getJudgesSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const response = await sheets.spreadsheets.values.get({
    auth, spreadsheetId, range: sheetName
  }).catch(() => ({ data: { values: [] } }));
  const rows = response.data.values || [];
  const newToken = uuidv4();

  for (let i = 1; i < rows.length; i++) {
    if ((rows[i][0] || '').trim().toLowerCase() === judgeName.toLowerCase()) {
      // Update token in the cell
      const cell = `B${i + 1}`;
      await sheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: `${sheetName}!${cell}`,
        valueInputOption: 'USER_ENTERED',
        resource: { values: [[newToken]] }
      });

      let resp = { success: true, token: newToken };
      if (sendEmail && judgeEmail && eventKey) {
        // Implement your nodemailer logic here if needed
        // const mailResult = await sendJudgeLinkEmail({ judgeName, judgeEmail, eventKey }, auth);
        // if (mailResult.success) resp.emailSent = true;
        // else { resp.emailSent = false; resp.emailError = mailResult.error; }
      }
      return resp;
    }
  }
  return { success: false, error: "Judge not found" };
}

// Helper: get the Google Sheets "sheetId" for a tab by name
async function getSheetIdByName(auth, spreadsheetId, sheetName) {
  const sheetsApi = google.sheets('v4');
  const meta = await sheetsApi.spreadsheets.get({ auth, spreadsheetId });
  const sheet = (meta.data.sheets || []).find(s => s.properties.title === sheetName);
  if (!sheet) throw new Error(`Sheet/tab "${sheetName}" not found`);
  return sheet.properties.sheetId;
}

module.exports = {
  getJudges,
  addJudge,
  deleteJudge,
  getJudgeToken,
  generateJudgeToken,
  // sendJudgeLinkEmail, // To be implemented with your email logic
};