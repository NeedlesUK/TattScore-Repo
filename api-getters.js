// api-getters.js -- Universal API getter logic for Codespace
const { google } = require('googleapis');
const { SCORING_AREAS } = require('./config');
require('dotenv').config();

const sheets = google.sheets('v4');

/**
 * Helper: Get event config from master admin sheet using eventKey.
 * Returns config object with event-specific sheetId, etc.
 */
async function getEventConfig(auth, eventKey) {
  const masterSheetId = process.env.MASTER_ADMIN_SHEET_ID;
  const sheetName = 'Event Data';
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId: masterSheetId,
    range: sheetName,
  });
  const [headers, ...rows] = response.data.values;
  const idx = headers.indexOf('eventKey');
  if (idx === -1) throw new Error('eventKey column missing in admin sheet');
  const found = rows.find(row => (row[idx] || '').trim() === eventKey.trim());
  if (!found) throw new Error(`No event config for eventKey: ${eventKey}`);
  const config = {};
  headers.forEach((header, i) => config[header] = found[i]);
  // Normalize common fields
  config.eventName = config.eventName || config.name || config.Name || '';
  config.eventEmail = config.eventEmail || config.email || config.Email || process.env.FROM_EMAIL;
  config.eventLogo = config.eventLogo || config.logo || config.Logo || '';
  return config;
}

/**
 * Get list of artists for an event (from "Main Artist List" tab).
 */
async function getArtistList(auth, eventKey) {
  const eventConfig = await getEventConfig(auth, eventKey);
  const sheetId = eventConfig.sheetId || eventConfig.SHEET_ID;
  if (!sheetId) throw new Error('sheetId missing for event');
  const sheetName = 'Main Artist List';
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId: sheetId,
    range: sheetName,
  });
  const rows = response.data.values || [];
  const artists = [];
  for (let i = 1; i < rows.length; i++) {
    artists.push({
      name: rows[i][0] || '',
      email: rows[i][1] || '',
      booth: rows[i][2] || '',
    });
  }
  return artists;
}

/**
 * Get event data (name, logo, email) for a given eventKey.
 */
async function getEventData(auth, eventKey) {
  const config = await getEventConfig(auth, eventKey);
  return {
    eventKey,
    name: config.eventName || '',
    logo: config.eventLogo || '',
    email: config.eventEmail || '',
  };
}

/**
 * Get raw scores (as array of objects) for an event.
 */
async function getRawScores(auth, eventKey) {
  const eventConfig = await getEventConfig(auth, eventKey);
  const sheetId = eventConfig.sheetId || eventConfig.SHEET_ID;
  if (!sheetId) throw new Error('sheetId missing for event');
  const sheetName = 'Raw Scores';
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId: sheetId,
    range: sheetName,
  });
  const rows = response.data.values || [];
  const results = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    results.push({
      judgeName: row[0],
      entryNo: row[1],
      placement: row[2],
      technique: row[3],
      qualityScore: row[4],
      blackworkOrColour: row[5],
      readability: row[6],
      creativity: row[7],
      difficulty: row[8],
      styleAccuracy: row[9],
      judgesScore: row[10],
      feedback: row[11],
      timestamp: row[12],
    });
  }
  return results;
}

/**
 * Get leaderboard for an event, calculated from Raw Scores and Entries.
 */
async function getLeaderboard(auth, eventKey) {
  const eventConfig = await getEventConfig(auth, eventKey);
  const sheetId = eventConfig.sheetId || eventConfig.SHEET_ID;
  if (!sheetId) throw new Error('sheetId missing for event');

  // Get both sheets in parallel
  const [rawScoresRes, entriesRes] = await Promise.all([
    sheets.spreadsheets.values.get({
      auth,
      spreadsheetId: sheetId,
      range: 'Raw Scores',
    }),
    sheets.spreadsheets.values.get({
      auth,
      spreadsheetId: sheetId,
      range: 'Entries',
    }),
  ]);
  const rawScoresData = rawScoresRes.data.values || [];
  const entriesData = entriesRes.data.values || [];

  if (rawScoresData.length < 2) return [];

  // Build entry details map from Entries
  const entryDetailsMap = {};
  for (let i = 1; i < entriesData.length; i++) {
    const entryRow = entriesData[i];
    const entryNumber = entryRow[4]; // Entry Number (Column E)
    if (entryNumber) {
      entryDetailsMap[entryNumber.toString()] = {
        artist: entryRow[1] || '',    // Artist (Column B)
        booth: entryRow[2] || '',     // Booth (Column C)
        category: entryRow[3] || '',  // Category (Column D)
      };
    }
  }

  // Calculate total scores per entry from Raw Scores
  const entryScores = {};
  for (let i = 1; i < rawScoresData.length; i++) {
    const scoreRow = rawScoresData[i];
    const entryNum = scoreRow[1]; // ENTRY NO (Column B)
    if (!entryNum) continue;

    // Sum scores from columns 2 to 10 (Placement to Judges Score)
    let judgeCalculatedScore = 0;
    for (let j = 2; j <= 10; j++) {
      const score = parseFloat(scoreRow[j] || 0);
      judgeCalculatedScore += score;
    }
    if (!entryScores[entryNum.toString()]) {
      entryScores[entryNum.toString()] = { totalCalculatedScoreSum: 0 };
    }
    entryScores[entryNum.toString()].totalCalculatedScoreSum += judgeCalculatedScore;
  }

  // Build the leaderboard array
  const leaderboard = [];
  for (const entryNumStr in entryScores) {
    const scoreData = entryScores[entryNumStr];
    const details = entryDetailsMap[entryNumStr];
    if (details) {
      leaderboard.push({
        category: details.category,
        name: details.artist,
        score: Math.round(scoreData.totalCalculatedScoreSum),
        entryNo: entryNumStr,
        location: details.booth,
      });
    }
  }
  leaderboard.sort((a, b) => b.score - a.score);
  return leaderboard;
}

module.exports = {
  getEventConfig,
  getArtistList,
  getEventData,
  getRawScores,
  getLeaderboard,
};