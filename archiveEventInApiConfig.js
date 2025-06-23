const { google } = require('googleapis');
const sheets = google.sheets('v4');

/**
 * Archives an event in the Api Config sheet by eventKey.
 * @param {string} spreadsheetId - The Google Sheet ID.
 * @param {string} eventKey - The key of the event to archive.
 * @param {string} sheetName - The sheet/tab name ("Api Config").
 * @param {object} auth - The Google API auth object.
 * @returns {Promise<boolean>} - True if row was found and updated.
 */
async function archiveEventInApiConfig(spreadsheetId, eventKey, sheetName, auth) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!A1:Z`,
    auth,
  });
  const rows = res.data.values;
  if (!rows || rows.length === 0) return false;

  const header = rows[0];
  const eventKeyCol = header.indexOf('eventKey');
  const archivedCol = header.indexOf('archived');
  if (eventKeyCol === -1 || archivedCol === -1) return false;

  let rowIndex = -1;
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][eventKeyCol] === eventKey) {
      rowIndex = i;
      break;
    }
  }
  if (rowIndex === -1) return false;

  const cell = String.fromCharCode(65 + archivedCol) + (rowIndex + 1);
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `${sheetName}!${cell}`,
    valueInputOption: 'RAW',
    auth,
    requestBody: { values: [['TRUE']] },
  });
  return true;
}

module.exports = archiveEventInApiConfig;