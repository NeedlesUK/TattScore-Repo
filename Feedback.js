// === SCORING AREA DEFINITIONS (Node.js version, use config.js for the canonical version) ===
const { SCORING_AREAS } = require('./config');
// For sending emails, use a mailer like nodemailer
// const nodemailer = require('nodemailer');
const { getEventConfig } = require('./api-getters');
const { google } = require('googleapis');
require('dotenv').config();

// === Helper: Generates the feedback email HTML body from raw scores ===
function generateFeedbackEmailBodyFromRawScores(
  feedback, entryNumber, artistName, eventName, topBanner, bottomBanner, category
) {
  const judgeLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let totalScore = 0;
  const judgeBlocks = feedback.map((item, idx) => {
    let judgeTotal = 0;
    const areaLines = SCORING_AREAS.map(area => {
      const val = parseFloat(item[area.key]) || 0;
      judgeTotal += val;
      return (
        `<div style="margin-bottom:5px;">
          <strong>${area.label} (${area.range[0]} to ${area.range[1]}):</strong> 
          <span>${val}</span>
          <div style="font-size:0.95em;color:#888;">${area.description}</div>
        </div>`
      );
    }).join('');
    totalScore += judgeTotal;
    return (
      `<div style="background: #fff; padding: 15px; margin-bottom: 15px; border-radius: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.06);">
        <div style="font-weight: bold; color: #2c3e50;">Judge ${judgeLetters[idx]}
        <span style="color:#27ae60;">— Judge's Overall Opinion: ${
        (item.judgesScore && !isNaN(item.judgesScore) ? item.judgesScore : judgeTotal)
      }/100</span></div>
        ${areaLines}
        ${item.comments
          ? `<div style="margin-top: 10px;"><div style="font-weight: bold; margin-bottom: 5px;">Comments:</div>
              <div style="background: #f9f9f9; padding: 10px; border-radius: 5px;">
                ${item.comments}
              </div></div>`
          : ''}
      </div>`
    );
  }).join('');
  const maxTotal = feedback.length * 280; // adjust if your max score is different

  return (
    `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      ${topBanner || ''}
      <div style="background: #23232b; color: white; padding: 20px; text-align: center; border-radius: 0;">
        <h1 style="margin: 0;">Your Feedback Report</h1>
        <p style="margin: 10px 0 0;">Entry #${entryNumber}</p>
      </div>
      <div style="background: #f5f5f5; padding: 20px;">
        <h2 style="color: #23232b; margin-top: 0;">Artist: ${artistName}</h2>
        <p><strong>Category:</strong> ${category}</p>
        <p>Total score: <strong>${totalScore}</strong> out of <strong>${maxTotal}</strong></p>
        <h3 style="color: #23232b; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Judge Feedback</h3>
        ${judgeBlocks}
        <div style="margin-top: 30px; text-align: center; color: #777; font-size: 0.9em;">
          <p>This feedback is provided to help you grow as an artist.</p>
          <p>Thank you for participating in ${eventName || 'the event'}!</p>
        </div>
      </div>
      ${bottomBanner || ''}
    </div>`
  );
}

// === MAIN FUNCTION: Send Feedback Report Email ===
async function sendFeedbackReport({
  auth,
  entryNumber,
  email,
  artistName = 'Artist',
  eventKey = '',
  eventName,
  category = '',
  getBannerHtml, // function(eventKey, context, eventName)
  mailer // nodemailer transporter or compatible sendMail({to, subject, html})
}) {
  if (!entryNumber || !email) {
    return { success: false, error: "Entry number and email are required" };
  }

  // Get raw scores for the event
  const eventConfig = await getEventConfig(auth, eventKey);
  const spreadsheetId = eventConfig.sheetId || eventConfig.SHEET_ID;
  const sheets = google.sheets('v4');
  const scoresRes = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Raw Scores"
  });
  const data = scoresRes.data.values || [];
  const feedback = [];
  for (let i = 1; i < data.length; i++) {
    if (
      data[i][1] &&
      data[i][1].toString().replace(/^0+/, '') === entryNumber.toString().replace(/^0+/, '')
    ) {
      feedback.push({
        judgeName: data[i][0] || '',
        placement: data[i][2] || '',
        technique: data[i][3] || '',
        qualityScore: data[i][4] || '',
        blackworkOrColour: data[i][5] || '',
        readability: data[i][6] || '',
        creativity: data[i][7] || '',
        difficulty: data[i][8] || '',
        styleAccuracy: data[i][9] || '',
        judgesScore: data[i][10] || '',
        comments: data[i][11] || '',
      });
    }
  }

  if (feedback.length === 0) {
    return { success: false, error: "No feedback found for this entry" };
  }

  // Optionally fetch banners
  const topBanner = getBannerHtml ? await getBannerHtml(eventKey, "ARTIST_FEEDBACK_EMAIL_BANNER_TOP", eventName) : '';
  const bottomBanner = getBannerHtml ? await getBannerHtml(eventKey, "ARTIST_FEEDBACK_EMAIL_BANNER_BOTTOM", eventName) : '';

  const subject = `Feedback for your entry no ${entryNumber} at ${eventName || eventKey}`;
  const htmlBody = generateFeedbackEmailBodyFromRawScores(
    feedback, entryNumber, artistName, eventName, topBanner, bottomBanner, category
  );

  // Send email (use provided mailer or throw if missing)
  if (!mailer) {
    // You must provide a mailer such as nodemailer transport with sendMail({to, subject, html})
    // or implement this method to fit your backend's email system.
    throw new Error("Mailer not provided to sendFeedbackReport");
  }

  await mailer.sendMail({
    to: email,
    subject,
    html: htmlBody
  });

  return { success: true, message: "Feedback email sent successfully" };
}

module.exports = {
  generateFeedbackEmailBodyFromRawScores,
  sendFeedbackReport,
};