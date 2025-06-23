// === CLIENT DATA MANAGEMENT FUNCTIONS (Node.js/Google Sheets API/Codespace version) ===

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

/**
 * Get client data count (API: action=getClientData)
 */
async function getClientData(auth, eventKey) {
  const { spreadsheetId, sheetName } = await getClientDataSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: sheetName
  }).catch(() => ({ data: { values: [] } }));

  const values = response.data.values || [];
  let count = 0;
  for (let i = 1; i < values.length; i++) {
    if (values[i][0] && values[i][0].toString().trim() !== "") count++;
  }
  return { count };
}

/**
 * Clear all client data except the header (API: action=clearClientData)
 */
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

/**
 * Delete a client by email (API: action=deleteClient)
 */
async function deleteClient(auth, eventKey, email) {
  if (!email) return { success: false, error: "Email is required" };
  const { spreadsheetId, sheetName } = await getClientDataSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const response = await sheets.spreadsheets.values.get({
    auth, spreadsheetId, range: sheetName
  }).catch(() => ({ data: { values: [] } }));

  const rows = response.data.values || [];
  for (let i = 1; i < rows.length; i++) {
    if ((rows[i][1] || '').toString().trim() === email) { // Email is column B (index 1)
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

/**
 * Export all client data as CSV (API: action=exportClientData)
 */
async function exportClientData(auth, eventKey) {
  const { spreadsheetId, sheetName } = await getClientDataSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: sheetName
  }).catch(() => ({ data: { values: [] } }));

  const values = response.data.values || [];
  // Convert array to CSV
  const csv = values.map(row => row.map(field => {
    let f = (field == null) ? '' : field.toString();
    if (f.includes('"')) f = f.replace(/"/g, '""');
    if (f.search(/("|,|\n)/g) >= 0) f = '"' + f + '"';
    return f;
  }).join(",")).join("\r\n");
  return { csv };
}

// Helper: Get sheetId for a tab by name
async function getSheetIdByName(auth, spreadsheetId, sheetName) {
  const sheetsApi = google.sheets('v4');
  const meta = await sheetsApi.spreadsheets.get({ auth, spreadsheetId });
  const sheet = (meta.data.sheets || []).find(s => s.properties.title === sheetName);
  if (!sheet) throw new Error(`Sheet/tab "${sheetName}" not found`);
  return sheet.properties.sheetId;
}

module.exports = {
  getClientData,
  clearClientData,
  deleteClient,
  exportClientData,
};