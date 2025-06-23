const express = require("express");
const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const { cloneEventPages } = require("./cloneWpPages");
const archiveEventInSheet = require("./utils/archiveEventInSheet");
const archiveEventInApiConfig = require("./utils/archiveEventInApiConfig");
const { deleteEventPages } = require("./utils/deleteEventPages");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// --- CONFIGURATION (from .env preferred) ---
const MASTER_SHEET_ID = process.env.MASTER_SHEET_ID || "15pcfmID3Te0n8dN_T0TqmrKiPSLganxQZsDmctodjWM";
const TEMPLATE_SHEET_ID = process.env.TEMPLATE_SHEET_ID || "11hfw6GufzHpGAMDw8OqpZwuQ-Sb4GNJTacLJSUc9Osc";
const UNIVERSAL_API_URL = process.env.UNIVERSAL_API_URL || "https://legendary-goldfish-q7x9vjrrjvrjc66r4-3000.app.github.dev/create-event";

// WordPress config
const WP_BASE_URL = process.env.WP_BASE_URL || "https://tattscore.com";
const WP_USER = process.env.WP_USER || "gary";
const WP_APP_PASSWORD = process.env.WP_APP_PASSWORD || "457BTJsTVXoRIo5xhEBb8pDx";

// Tab names
const EVENT_DATA_TAB = process.env.EVENT_DATA_TAB || "Event Data";
const API_CONFIG_TAB = process.env.API_CONFIG_TAB || "Api Config";

// --- GOOGLE AUTH SETUP ---
const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, process.env.GOOGLE_KEYFILE || "credentials.json"),
  scopes: [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/spreadsheets"
  ]
});

app.use(bodyParser.json());

async function appendToSheet(sheetId, tabName, row) {
  const authClient = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: authClient });

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${tabName}`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] }
  });
}

async function duplicateTemplateSheet(eventName) {
  const authClient = await auth.getClient();
  const drive = google.drive({ version: "v3", auth: authClient });

  const copy = await drive.files.copy({
    fileId: TEMPLATE_SHEET_ID,
    requestBody: { name: eventName }
  });
  return {
    id: copy.data.id,
    url: `https://docs.google.com/spreadsheets/d/${copy.data.id}`
  };
}

app.post("/create-event", async (req, res) => {
  try {
    const { eventKey, eventName, eventEmail, eventLogo, managementPassword } = req.body;
    if (!eventKey || !eventName || !eventEmail || !eventLogo) {
      return res.status(400).json({ success: false, error: "Missing required fields." });
    }

    // 1. Append to Event Data
    await appendToSheet(MASTER_SHEET_ID, EVENT_DATA_TAB, [
      eventKey, eventName, eventEmail, eventLogo
    ]);

    // 2. Duplicate template sheet
    const { id: sheetId, url: sheetUrl } = await duplicateTemplateSheet(eventName);

    // 3. Append to Api Config (eventKey, universal API URL, sheetId)
    await appendToSheet(MASTER_SHEET_ID, API_CONFIG_TAB, [
      eventKey, UNIVERSAL_API_URL, sheetId
    ]);

    // 4. Clone WP pages for the event
    let wpResult = null;
    try {
      wpResult = await cloneEventPages({
        wpBaseUrl: WP_BASE_URL,
        wpUser: WP_USER,
        wpAppPassword: WP_APP_PASSWORD,
        eventKey,
        eventName,
        managementPassword: managementPassword || "EventMgmt2024"
      });
    } catch (wpErr) {
      // Log but don't fail event creation if WordPress failed
      console.error("Error cloning WordPress pages:", wpErr);
      wpResult = { error: wpErr.message };
    }

    // 5. Respond with info
    res.json({
      success: true,
      message: "Event created successfully.",
      event: {
        eventKey, eventName, eventEmail, eventLogo,
        sheetId, sheetUrl,
        apiUrl: UNIVERSAL_API_URL,
        wp: wpResult
      }
    });
  } catch (err) {
    console.error("Error in /create-event:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ARCHIVE EVENT ROUTE
app.post("/archive-event", async (req, res) => {
  const { eventKey } = req.body;
  if (!eventKey) {
    return res.status(400).json({ success: false, error: "Missing eventKey." });
  }

  try {
    const authClient = await auth.getClient();
    // Archive in Event Data
    const archivedEvent = await archiveEventInSheet(
      MASTER_SHEET_ID,
      eventKey,
      EVENT_DATA_TAB,
      authClient
    );
    // Archive in Api Config
    const archivedApiConfig = await archiveEventInApiConfig(
      MASTER_SHEET_ID,
      eventKey,
      API_CONFIG_TAB,
      authClient
    );

    // Delete WP pages
    let wpDeleteResult = {};
    try {
      wpDeleteResult = await deleteEventPages({
        wpBaseUrl: WP_BASE_URL,
        wpUser: WP_USER,
        wpAppPassword: WP_APP_PASSWORD,
        eventKey
      });
    } catch (wpErr) {
      wpDeleteResult = { error: wpErr.message };
    }

    if (!archivedEvent && !archivedApiConfig) {
      return res.status(404).json({ success: false, error: "Event not found in any tab." });
    }
    res.json({
      success: true,
      message: "Event archived in Event Data and Api Config. WP pages deleted.",
      archivedEvent,
      archivedApiConfig,
      wpDeleteResult
    });
  } catch (err) {
    console.error("Error archiving event:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Event automation API running on port ${PORT}`);
});