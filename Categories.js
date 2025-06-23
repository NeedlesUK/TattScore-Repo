// === CATEGORY MANAGEMENT FUNCTIONS (Node.js/Google Sheets API/Codespace version) ===

const { google } = require('googleapis');
const { getEventConfig } = require('./api-getters');
require('dotenv').config();

// Helper: Get Categories sheet info for a given event
async function getCategoriesSheet(auth, eventKey) {
  const eventConfig = await getEventConfig(auth, eventKey);
  const spreadsheetId = eventConfig.sheetId || eventConfig.SHEET_ID;
  if (!spreadsheetId) throw new Error('sheetId missing for event');
  const sheetName = 'Categories';
  return { spreadsheetId, sheetName };
}

// Get all categories for an event
async function getCategories(auth, eventKey) {
  const { spreadsheetId, sheetName } = await getCategoriesSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: sheetName,
  }).catch(() => ({ data: { values: [] } }));
  const rows = response.data.values || [];
  const cats = [];
  for (let i = 1; i < rows.length; i++) {
    cats.push({
      name: rows[i][0] ? String(rows[i][0]) : "",
      description: rows[i][1] ? String(rows[i][1]) : ""
    });
  }
  return cats;
}

// Add a new category
async function addCategory(auth, { eventKey, categoryName }) {
  if (!categoryName) {
    return { success: false, error: "Category name is required" };
  }
  const { spreadsheetId, sheetName } = await getCategoriesSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: sheetName,
  }).catch(() => ({ data: { values: [] } }));
  const rows = response.data.values || [];

  // Check if category already exists
  for (let i = 1; i < rows.length; i++) {
    if ((rows[i][0] || '').toString().trim().toLowerCase() === categoryName.toLowerCase()) {
      return { success: false, error: "Category already exists" };
    }
  }

  // Add new category (Name, Description)
  await sheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: sheetName,
    valueInputOption: 'USER_ENTERED',
    resource: { values: [[categoryName, '']] }
  });

  return { success: true, message: "Category added successfully" };
}

// Delete a category
async function deleteCategory(auth, { eventKey, categoryName }) {
  if (!categoryName) {
    return { success: false, error: "Category name is required" };
  }
  const { spreadsheetId, sheetName } = await getCategoriesSheet(auth, eventKey);
  const sheets = google.sheets('v4');
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: sheetName,
  }).catch(() => ({ data: { values: [] } }));
  const rows = response.data.values || [];

  for (let i = 1; i < rows.length; i++) {
    if ((rows[i][0] || '').toString().trim() === categoryName) {
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
      return { success: true, message: "Category deleted successfully" };
    }
  }
  return { success: false, error: "Category not found" };
}

// Helper: get the sheetId for a tab by name
async function getSheetIdByName(auth, spreadsheetId, sheetName) {
  const sheetsApi = google.sheets('v4');
  const meta = await sheetsApi.spreadsheets.get({ auth, spreadsheetId });
  const sheet = (meta.data.sheets || []).find(s => s.properties.title === sheetName);
  if (!sheet) throw new Error(`Sheet/tab "${sheetName}" not found`);
  return sheet.properties.sheetId;
}

module.exports = {
  getCategories,
  addCategory,
  deleteCategory,
};