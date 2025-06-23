// === EVENT-SPECIFIC ARTIST LIST MANAGEMENT FUNCTIONS (Node.js/Google Sheets API version) ===

const { google } = require('googleapis');
const { getEventConfig } = require('./api-getters');
require('dotenv').config();

// Helper to get sheet/tab for an event's artist list
async function getArtistListSheetObj(auth, eventKey) {
  if (!eventKey) throw new Error("eventKey is required for per-event artist lists.");
  const eventConfig = await getEventConfig(auth, eventKey);
  const spreadsheetId = eventConfig.sheetId || eventConfig.SHEET_ID;
  if (!spreadsheetId) throw new Error('sheetId missing for event');
  const sheetName = `Artists_${eventKey}`;
  return { spreadsheetId, sheetName };
}

// Add or update an artist for an event
async function addArtist(auth, { eventKey, name, email = '', booth = '' }) {
  if (!eventKey || !name) {
    return { success: false, error: "eventKey and artist name are required" };
  }
  const { spreadsheetId, sheetName } = await getArtistListSheetObj(auth, eventKey);
  const sheets = google.sheets('v4');

  // Fetch existing data
  const response = await sheets.spreadsheets.values.get({
    auth, spreadsheetId, range: sheetName
  }).catch(() => ({ data: { values: [] } }));
  const rows = response.data.values || [];

  // Check if artist already exists (case-insensitive)
  for (let i = 1; i < rows.length; i++) {
    if ((rows[i][0] || '').toLowerCase().trim() === name.toLowerCase()) {
      // Update email and booth if different
      let updated = false;
      if (email && rows[i][1] !== email) {
        const cell = `B${i + 1}`;
        await sheets.spreadsheets.values.update({
          auth,
          spreadsheetId,
          range: `${sheetName}!${cell}`,
          valueInputOption: 'USER_ENTERED',
          resource: { values: [[email]] }
        });
        updated = true;
      }
      if (booth && rows[i][2] !== booth) {
        const cell = `C${i + 1}`;
        await sheets.spreadsheets.values.update({
          auth,
          spreadsheetId,
          range: `${sheetName}!${cell}`,
          valueInputOption: 'USER_ENTERED',
          resource: { values: [[booth]] }
        });
        updated = true;
      }
      return updated
        ? { success: true, message: "Artist information updated" }
        : { success: true, message: "Artist already exists" };
    }
  }

  // Add new artist row
  await sheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: sheetName,
    valueInputOption: 'USER_ENTERED',
    resource: { values: [[name, email, booth]] }
  });

  return { success: true, message: "Artist added successfully" };
}

// Delete an artist by name (and optional email)
async function deleteArtist(auth, { eventKey, name, email = '' }) {
  if (!eventKey || !name) {
    return { success: false, error: "eventKey and artist name are required" };
  }
  const { spreadsheetId, sheetName } = await getArtistListSheetObj(auth, eventKey);
  const sheetsApi = google.sheets('v4');
  const response = await sheetsApi.spreadsheets.values.get({
    auth, spreadsheetId, range: sheetName
  }).catch(() => ({ data: { values: [] } }));
  const rows = response.data.values || [];

  for (let i = 1; i < rows.length; i++) {
    if ((rows[i][0] || '').toLowerCase() === name.toLowerCase() &&
        (email === '' || rows[i][1] === email)) {
      // Delete row using batchUpdate
      const sheetId = await getSheetIdByName(auth, spreadsheetId, sheetName);
      await sheetsApi.spreadsheets.batchUpdate({
        auth,
        spreadsheetId,
        resource: {
          requests: [
            {
              deleteDimension: {
                range: {
                  sheetId: sheetId,
                  dimension: "ROWS",
                  startIndex: i,
                  endIndex: i + 1
                }
              }
            }
          ]
        }
      });
      return { success: true, message: "Artist deleted successfully" };
    }
  }
  return { success: false, error: "Artist not found" };
}

// Clear the artist list for an event (keep header)
async function clearArtistList(auth, eventKey) {
  if (!eventKey) {
    return { success: false, error: "eventKey is required" };
  }
  const { spreadsheetId, sheetName } = await getArtistListSheetObj(auth, eventKey);
  const sheetsApi = google.sheets('v4');
  const response = await sheetsApi.spreadsheets.values.get({
    auth, spreadsheetId, range: sheetName
  }).catch(() => ({ data: { values: [] } }));
  const rows = response.data.values || [];
  if (rows.length > 1) {
    const sheetId = await getSheetIdByName(auth, spreadsheetId, sheetName);
    await sheetsApi.spreadsheets.batchUpdate({
      auth,
      spreadsheetId,
      resource: {
        requests: [
          {
            deleteDimension: {
              range: {
                sheetId: sheetId,
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
  return { success: true, message: "Artist list cleared successfully" };
}

// Upload a list of artists (CSV or JSON format)
async function uploadArtistList(auth, { eventKey, data, format = 'csv' }) {
  if (!eventKey) {
    return { success: false, error: "eventKey is required" };
  }
  if (!data) {
    return { success: false, error: "No data provided" };
  }
  const { spreadsheetId, sheetName } = await getArtistListSheetObj(auth, eventKey);
  const sheetsApi = google.sheets('v4');

  // Parse incoming data
  let artists = [];
  if (format === 'csv') {
    const rows = data.split('\n');
    for (const row of rows) {
      const trimmed = row.trim();
      if (!trimmed) continue;
      const parts = trimmed.split(/[,\t;]/);
      if (parts.length >= 1) {
        const name = parts[0].trim();
        const email = parts.length > 1 ? parts[1].trim() : '';
        const booth = parts.length > 2 ? parts[2].trim() : '';
        if (name) artists.push({ name, email, booth });
      }
    }
  } else if (format === 'json') {
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        artists = parsed.filter(a => a && a.name);
      }
    } catch (e) {
      return { success: false, error: "Invalid JSON data" };
    }
  }
  if (artists.length === 0) {
    return { success: false, error: "No valid artists found in data" };
  }

  // Fetch existing artist names
  const response = await sheetsApi.spreadsheets.values.get({
    auth, spreadsheetId, range: sheetName
  }).catch(() => ({ data: { values: [] } }));
  const existingData = response.data.values || [];
  const existingArtists = new Set();
  for (let i = 1; i < existingData.length; i++) {
    if (existingData[i][0]) {
      existingArtists.add(existingData[i][0].toLowerCase().trim());
    }
  }

  let added = 0;
  for (const artist of artists) {
    const name = artist.name.trim();
    const email = artist.email || '';
    const booth = artist.booth || '';
    if (!existingArtists.has(name.toLowerCase())) {
      await sheetsApi.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: sheetName,
        valueInputOption: 'USER_ENTERED',
        resource: { values: [[name, email, booth]] }
      });
      existingArtists.add(name.toLowerCase());
      added++;
    }
  }

  return {
    success: true,
    message: `Added ${added} new artists, skipped ${artists.length - added} duplicates`
  };
}

// Helper: get the Google Sheets "sheetId" for a tab by name
async function getSheetIdByName(auth, spreadsheetId, sheetName) {
  const sheetsApi = google.sheets('v4');
  const meta = await sheetsApi.spreadsheets.get({
    auth, spreadsheetId
  });
  const sheet = (meta.data.sheets || []).find(s => s.properties.title === sheetName);
  if (!sheet) throw new Error(`Sheet/tab "${sheetName}" not found`);
  return sheet.properties.sheetId;
}

module.exports = {
  addArtist,
  deleteArtist,
  clearArtistList,
  uploadArtistList,
};