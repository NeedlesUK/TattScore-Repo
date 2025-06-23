// === ENTRY MANAGEMENT FUNCTIONS (Node.js, Google Sheets API, Codespace version) ===

const { google } = require('googleapis');
const { getEventConfig } = require('./api-getters'); // Assumes api-getters.js is as previously provided
require('dotenv').config();

// Helper to get sheet object for "Entries" tab of the event
async function getEntriesSheet(auth, eventKey) {
  const eventConfig = await getEventConfig(auth, eventKey);
  const sheetId = eventConfig.sheetId || eventConfig.SHEET_ID;
  if (!sheetId) throw new Error('sheetId missing for event');
  return { spreadsheetId: sheetId, sheetName: 'Entries' };
}

// Get all entries for an event
async function getEntries(auth, eventKey) {
  const { spreadsheetId, sheetName } = await getEntriesSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: sheetName,
  });
  const rows = response.data.values || [];
  const all = [];
  for (let i = 1; i < rows.length; i++) {
    all.push({
      timestamp: rows[i][0] || "",
      artist: rows[i][1] || "",
      booth: rows[i][2] || "",
      category: rows[i][3] || "",
      entryNumber: rows[i][4] || "",
      cardIssued: rows[i][5] || "",
      email: rows[i][6] || ""
    });
  }
  return all;
}

// Add a new entry
async function addEntry(auth, params) {
  const { artist, booth = '', category, email = '', eventKey, eventName } = params;
  if (!artist || !category) {
    return { success: false, error: "Artist name and category are required" };
  }

  const { spreadsheetId, sheetName } = await getEntriesSheet(auth, eventKey);
  const sheets = google.sheets('v4');

  // Get all entries to determine the next entry number
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: sheetName,
  });
  const rows = response.data.values || [];
  let nextEntryNumber = 1;
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][4]) {
      const entryNum = parseInt(rows[i][4]);
      if (entryNum >= nextEntryNumber) {
        nextEntryNumber = entryNum + 1;
      }
    }
  }

  const timestamp = new Date().toISOString();
  const appendRes = await sheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: sheetName,
    valueInputOption: 'USER_ENTERED',
    resource: { values: [[timestamp, artist, booth, category, nextEntryNumber, '', email]] }
  });

  // Optionally send confirmation email here, if you have such a function
  // const emailSent = await sendEntryConfirmationEmail({ artist, booth, category, email }, eventKey, eventName, nextEntryNumber);

  return {
    success: true,
    message: "Entry added successfully",
    entryNumber: nextEntryNumber,
    // emailSent
  };
}

// Update a field in an entry
async function updateEntry(auth, eventKey, entryNumber, field, value) {
  if (!entryNumber || !field) {
    return { success: false, error: "Entry number and field are required" };
  }
  const { spreadsheetId, sheetName } = await getEntriesSheet(auth, eventKey);
  const sheets = google.sheets('v4');

  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: sheetName,
  });
  const rows = response.data.values || [];

  // Find the entry by entry number
  let columnIndex = null;
  switch (field) {
    case 'artist': columnIndex = 1; break; // Column B
    case 'booth': columnIndex = 2; break; // Column C
    case 'category': columnIndex = 3; break; // Column D
    case 'cardIssued': columnIndex = 5; break; // Column F
    case 'email': columnIndex = 6; break; // Column G
    default:
      return { success: false, error: "Invalid field: " + field };
  }

  for (let i = 1; i < rows.length; i++) {
    if (rows[i][4] && rows[i][4].toString() === entryNumber.toString()) {
      // update cell
      const cell = String.fromCharCode(65 + columnIndex) + (i + 1);
      await sheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: `${sheetName}!${cell}`,
        valueInputOption: 'USER_ENTERED',
        resource: { values: [[value]] }
      });
      return { success: true, message: "Entry updated successfully" };
    }
  }
  return { success: false, error: "Entry not found" };
}

// Delete an entry
async function deleteEntry(auth, eventKey, entryNumber) {
  if (!entryNumber) {
    return { success: false, error: "Entry number is required" };
  }
  const { spreadsheetId, sheetName } = await getEntriesSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: sheetName,
  });
  const rows = response.data.values || [];

  for (let i = 1; i < rows.length; i++) {
    if (rows[i][4] && rows[i][4].toString() === entryNumber.toString()) {
      // Delete row using batchUpdate
      await sheets.spreadsheets.batchUpdate({
        auth,
        spreadsheetId,
        resource: {
          requests: [
            {
              deleteDimension: {
                range: {
                  sheetId: await getSheetIdByName(auth, spreadsheetId, sheetName),
                  dimension: "ROWS",
                  startIndex: i,
                  endIndex: i + 1
                }
              }
            }
          ]
        }
      });
      return { success: true, message: "Entry deleted successfully" };
    }
  }
  return { success: false, error: "Entry not found" };
}

// Helper to get the sheetId (not spreadsheetId) by tab name
async function getSheetIdByName(auth, spreadsheetId, sheetName) {
  const sheetsApi = google.sheets('v4');
  const meta = await sheetsApi.spreadsheets.get({
    auth,
    spreadsheetId,
  });
  const sheet = meta.data.sheets.find(s => s.properties.title === sheetName);
  if (!sheet) throw new Error(`Sheet/tab "${sheetName}" not found`);
  return sheet.properties.sheetId;
}

module.exports = {
  getEntries,
  addEntry,
  updateEntry,
  deleteEntry,
};