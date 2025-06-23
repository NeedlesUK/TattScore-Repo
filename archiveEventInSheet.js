const { google } = require('googleapis');
const sheets = google.sheets('v4');

/**
 * Deletes a row in the Event Data sheet for the given eventKey.
 * @param {string} spreadsheetId
 * @param {string} eventKey
 * @param {string} sheetName
 * @param {object} auth
 * @returns {Promise<boolean>}
 */
async function deleteEventFromSheet(spreadsheetId, eventKey, sheetName, auth) {
  // Get all rows
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!A1:Z`,
    auth,
  });
  const rows = res.data.values;
  if (!rows || rows.length === 0) return false;

  // Find the eventKey column
  const header = rows[0];
  const eventKeyCol = header.indexOf('eventKey');
  if (eventKeyCol === -1) return false;

  // Find the row to delete
  let rowIndex = -1;
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][eventKeyCol] === eventKey) {
      rowIndex = i;
      break;
    }
  }
  if (rowIndex === -1) return false;

  // Delete the row (account for 0-indexed range vs. 1-indexed spreadsheet)
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    auth,
    requestBody: {
      requests: [
        {
          deleteDimension: {
            range: {
              sheetId: await getSheetId(spreadsheetId, sheetName, auth),
              dimension: 'ROWS',
              startIndex: rowIndex, // header is row 0
              endIndex: rowIndex + 1
            }
          }
        }
      ]
    }
  });

  return true;
}

// Helper: Get sheetId by name
async function getSheetId(spreadsheetId, sheetName, auth) {
  const res = await sheets.spreadsheets.get({ spreadsheetId, auth });
  const sheet = res.data.sheets.find(s => s.properties.title === sheetName);
  return sheet ? sheet.properties.sheetId : null;
}

module.exports = deleteEventFromSheet;