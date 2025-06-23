// ============================
// EMAIL UTILITY FUNCTIONS (Node.js/Nodemailer/Fetch version)
// ============================

const fetch = require('node-fetch');

/**
 * Retrieve banner HTML from remote API for given eventKey and context.
 * Requires process.env.MASTER_API_URL to be set (in .env).
 */
async function getBannerHtml(eventKey, context, eventName) {
  try {
    const apiUrl = process.env.MASTER_API_URL;
    const resp = await fetch(
      `${apiUrl}?action=getBanner&event=${encodeURIComponent(eventKey)}&context=${encodeURIComponent(context)}`
    );
    const data = await resp.json();
    if (data.success && data.url) {
      let imgTag = `<img src="${data.url}" alt="${eventName || eventKey}" style="max-width:100%;height:auto;">`;
      if (data.link) {
        imgTag = `<a href="${data.link}" target="_blank">${imgTag}</a>`;
      }
      return `<div style="text-align:center;padding:10px 0;background:#f8f8f8;">${imgTag}</div>`;
    }
  } catch (e) {
    console.error("Error fetching banner for", context, e);
  }
  return "";
}

// ============================
// EMAIL SENDING FUNCTIONS
// ============================

/**
 * Send entry confirmation email to artist.
 * @param {object} mailer - nodemailer transporter
 * @param {object} entryData
 * @param {string} eventKey
 * @param {string} eventName
 * @param {number|string} entryNumber
 */
async function sendEntryConfirmationEmail(mailer, entryData, eventKey, eventName, entryNumber) {
  try {
    const subject = `${eventName} - Entry #${entryNumber} Confirmation`;
    const artistName = entryData.artist || entryData.artistName || 'Artist';
    const artistEmail = entryData.email || '';
    const category = entryData.category || 'General';
    const booth = entryData.booth || entryData.boothLocation || '';

    if (!artistEmail) {
      console.log("No artist email provided, skipping confirmation email");
      return false;
    }

    const topBanner = await getBannerHtml(eventKey, "ENTRY_CONFIRMATION_EMAIL_BANNER_TOP", eventName);
    const bottomBanner = await getBannerHtml(eventKey, "ENTRY_CONFIRMATION_EMAIL_BANNER_BOTTOM", eventName);

    let htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    `;
    htmlBody += topBanner;
    htmlBody += `
        <div style="padding: 20px; font-size:1.05em; color:#222;">
          <h1 style="color: #333; margin-top: 0; text-align: center;">Entry Confirmation</h1>
          <p>Dear ${artistName},</p>
          <p>Thank you for submitting your entry for <strong>${eventName}</strong>.</p>
          <p>Your entry number is: <strong>${entryNumber}</strong>. Please collect your Entry Card at the Artist Support location. You or your helper will need your name and booth number to collect the card.</p>
          <div style="background: #f0f0f0; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #555; font-size: 1.2em; margin-top: 0;">Entry Details</h2>
            <p><strong>Category:</strong> ${category}</p>
            ${booth ? `<p><strong>Booth:</strong> ${booth}</p>` : ''}
          </div>
          <p style="text-align: center; margin-top: 30px; color: #666;">
            Good luck!
          </p>
          <p>Best regards,<br>${eventName} Team</p>
        </div>
    `;
    htmlBody += bottomBanner;
    htmlBody += `</div>`;

    await mailer.sendMail({
      to: artistEmail,
      subject,
      html: htmlBody
    });

    return true;
  } catch (err) {
    console.error("Error sending client confirmation email:", err);
    return false;
  }
}

// --- Client Consent Confirmation Email ---
async function sendClientConfirmationEmail_(mailer, params, eventKey, eventName) {
  try {
    const subject = `${eventName} - Your Consent Form Submission Details`;
    const clientName = params.clientName;
    const clientEmail = params.clientEmail;
    const artistName = params.artistName;

    const topBanner = await getBannerHtml(eventKey, "CLIENT_EMAIL_BANNER_TOP", eventName);
    const bottomBanner = await getBannerHtml(eventKey, "CLIENT_EMAIL_BANNER_BOTTOM", eventName);

    let htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    `;
    htmlBody += topBanner;
    htmlBody += `
        <div style="padding: 20px;">
          <h1 style="color: #333; margin-top: 0; text-align: center;">Thank You for Your Submission!</h1>
          <p>Dear ${clientName},</p>
          <p>Thank you for submitting your consent form for your appointment with <strong>${artistName}</strong> at ${eventName}.</p>
          <p>Here are the details you submitted:</p>
          <div style="background: #f0f0f0; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #555; font-size: 1.2em; margin-top: 0;">Your Details</h2>
            <p><strong>Name:</strong> ${params.clientName}</p>
            <p><strong>Date of Birth:</strong> ${params.DOB}</p>
            <p><strong>Phone:</strong> ${params.Phone}</p>
            <p><strong>Email:</strong> ${params.clientEmail}</p>
            <p><strong>Address:</strong> ${(params.FullAddress || '').replace(/\n/g, '<br>')}</p>
            <p><strong>Artist:</strong> ${params.artistName}</p>
          </div>
          <div style="background: #f0f0f0; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #555; font-size: 1.2em; margin-top: 0;">Consent & Medical Information</h2>
            <p><strong>Age Confirmation (18+):</strong> ${params.ageConfirm === 'true' ? 'Yes' : 'No'}</p>
            <p><strong>Risk Acknowledged:</strong> ${params.riskConfirm === 'true' ? 'Yes' : 'No'}</p>
            <p><strong>Liability Acknowledged:</strong> ${params.liabilityConfirm === 'true' ? 'Yes' : 'No'}</p>
            <p><strong>Media Release:</strong> ${params.mediaRelease}</p>
            <p><strong>ID Photo:</strong> ${params.idPhotoUrl ? `<a href="${params.idPhotoUrl}">View Photo</a>` : 'No photo uploaded'}</p>
            <p><strong>Medical Issues:</strong> ${params.noIssues === 'true' ? 'None' : params.medicalIssues}</p>
            ${params.medicalDetails ? `<p><strong>Medical Details:</strong> ${params.medicalDetails}</p>` : ''}
          </div>
          <div style="background: #f0f0f0; padding: 15px; border-radius: 5px;">
            <h2 style="color: #555; font-size: 1.2em; margin-top: 0;">On The Day Confirmations</h2>
            <p><strong>Aftercare Advice Understood:</strong> ${params.aftercareAdvice === 'true' ? 'Yes' : 'No'}</p>
            <p><strong>Eaten Before Appointment:</strong> ${params.eatBefore === 'true' ? 'Yes' : 'No'}</p>
            <p><strong>Not Unwell:</strong> ${params.unwell === 'true' ? 'Yes' : 'No'}</p>
            <p><strong>No Alcohol/Drugs:</strong> ${params.noAlcohol === 'true' ? 'Yes' : 'No'}</p>
            <p><strong>Marketing Consent:</strong> ${params.marketingConsent}</p>
          </div>
          <p style="text-align: center; margin-top: 30px; color: #666;">
            If you have any questions, please contact your artist or the event organizer.
          </p>
        </div>
    `;
    htmlBody += bottomBanner;
    htmlBody += `</div>`;

    await mailer.sendMail({
      to: clientEmail,
      subject,
      html: htmlBody
    });

    return true;
  } catch (err) {
    console.error("Error sending client confirmation email:", err);
    return false;
  }
}

// --- Aftercare Email (to client) ---
async function sendClientAftercareEmail_(mailer, params, eventKey, eventName) {
  try {
    const subject = `${eventName} - Your Tattoo Aftercare Advice`;
    const clientEmail = params.clientEmail;
    const artistName = params.artistName;
    const artistEmail = params.artistEmail || 'N/A';

    const topBanner = await getBannerHtml(eventKey, "AFTERCARE_EMAIL_BANNER_TOP", eventName);
    const bottomBanner = await getBannerHtml(eventKey, "AFTERCARE_EMAIL_BANNER_BOTTOM", eventName);

    let htmlBodyAftercare = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    `;
    htmlBodyAftercare += topBanner;
    htmlBodyAftercare += `
        <div style="padding: 20px;">
          <h1 style="color: #333; margin-top: 0; text-align: center;">Your Tattoo Aftercare Guide</h1>
          <p>Thank you for your trust in getting tattooed by <strong>${artistName}</strong> at our event. Here's everything you need to know to keep your tattoo healing beautifully:</p>
          <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">1. How Long To Leave Wrapped?</h2>
          <p>There are numerous different coverings in use in the tattoo industry. Your artist will give you specific instructions.</p>
          <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">2. Cleaning Your Tattoo</h2>
          <p>Clean your tattoo every day with a clean hand, warm water, and a fragrance-free soap. Let it air dry or gently pat it dry with a clean towel. Showers are great but no sitting water.</p>
          <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">3. Aftercare Products</h2>
          <p>Apply a thin layer of recommended aftercare cream using a clean hand 3-4 times a day.</p>
          <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">4. When To Cover Tattoo</h2>
          <p>Cover your new tattoo when in a dirty environment to help avoid infection. Allow skin to breathe as much as possible.</p>
          <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">5. Clean Clothes And Bedding</h2>
          <p>Always use a clean towel whilst your tattoo is healing and allow it to air dry when possible. Keep clothes and bedding clean and fresh!</p>
          <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">6. Avoid Standing Water</h2>
          <p>Avoid soaking your tattoo for at least a week i.e. baths, swimming, dishwater. Running water such as showers are perfect.</p>
          <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">7. Avoid UV Rays</h2>
          <p>Avoid direct sunlight & sun beds for at least 2 weeks. Always use a strong sunblock to keep your tattoo at its best.</p>
          <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">8. Do Not Pick Or Scratch</h2>
          <p>Please do not pick or scratch your tattoo whilst it is healing. This can cause trauma to the skin and lead to scarring and infection.</p>
          <h2 style="color: #333; font-size: 1.2em; margin-top: 20px;">9. Concerns or questions?</h2>
          <p>The artist that applied your tattoo is responsible for any touch-ups, concerns, or ongoing advice.</p>
          <p>Your artist for this tattoo was <strong>${artistName}</strong><br>
          Contact: ${artistEmail}</p>
          <p>If you have any further questions or concerns, feel free to reply to this email or reach out directly to your artist.</p>
          <p style="font-weight: bold; margin-top: 20px;">Happy healing!</p>
        </div>
    `;
    htmlBodyAftercare += bottomBanner;
    htmlBodyAftercare += `</div>`;

    await mailer.sendMail({
      to: clientEmail,
      subject,
      html: htmlBodyAftercare
    });

    return true;
  } catch (err) {
    console.error("Error sending client aftercare email:", err);
    return false;
  }
}

// --- Artist Consent Email (with full consent form details and banners) ---
async function sendArtistConsentDetailsEmail(mailer, params, eventKey, eventName) {
  try {
    const subject = `${eventName} - Client Consent Details for ${params.clientName}`;
    const artistEmail = params.artistEmail;

    if (!artistEmail) {
      console.log("Artist email not provided, skipping artist consent details email.");
      return false;
    }

    const topBanner = await getBannerHtml(eventKey, "ARTIST_CONSENT_DETAILS_EMAIL_BANNER_TOP", eventName);
    const bottomBanner = await getBannerHtml(eventKey, "ARTIST_CONSENT_DETAILS_EMAIL_BANNER_BOTTOM", eventName);

    let htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    `;
    htmlBody += topBanner;
    htmlBody += `
        <h1 style="color: #333; margin-top: 0; text-align: center;">Client Consent Details</h1>
        <p>Hello ${params.artistName},</p>
        <p>Your client has submitted a new consent form at ${eventName}.</p>
        <h2 style="color: #555; font-size: 1.2em; margin-top: 20px;">Client Details</h2>
        <p><strong>Name:</strong> ${params.clientName}</p>
        <p><strong>Email:</strong> ${params.clientEmail}</p>
        <p><strong>Phone:</strong> ${params.Phone}</p>
        <p><strong>Date of Birth:</strong> ${params.DOB}</p>
        <p><strong>Address:</strong> ${(params.FullAddress || '').replace(/\n/g, '<br>')}</p>
        ${params.idPhotoUrl ? `<p><strong>ID Photo:</strong> <a href="${params.idPhotoUrl}">View Photo</a></p>` : ''}
        <h2 style="color: #555; font-size: 1.2em; margin-top: 20px;">Consent & Medical Information</h2>
        <p><strong>Age Confirmation (18+):</strong> ${params.ageConfirm === 'true' ? 'Yes' : 'No'}</p>
        <p><strong>Risk Acknowledged:</strong> ${params.riskConfirm === 'true' ? 'Yes' : 'No'}</p>
        <p><strong>Liability Acknowledged:</strong> ${params.liabilityConfirm === 'true' ? 'Yes' : 'No'}</p>
        <p><strong>Media Release:</strong> ${params.mediaRelease}</p>
        <p><strong>Medical Issues:</strong> ${params.noIssues === 'true' ? 'None' : params.medicalIssues}</p>
        ${params.medicalDetails ? `<p><strong>Medical Details:</strong> ${params.medicalDetails}</p>` : ''}
        <h2 style="color: #555; font-size: 1.2em; margin-top: 20px;">On The Day Confirmations</h2>
        <p><strong>Aftercare Advice Understood:</strong> ${params.aftercareAdvice === 'true' ? 'Yes' : 'No'}</p>
        <p><strong>Eaten Before Appointment:</strong> ${params.eatBefore === 'true' ? 'Yes' : 'No'}</p>
        <p><strong>Not Unwell:</strong> ${params.unwell === 'true' ? 'Yes' : 'No'}</p>
        <p><strong>No Alcohol/Drugs:</strong> ${params.noAlcohol === 'true' ? 'Yes' : 'No'}</p>
        <p><strong>Marketing Consent:</strong> ${params.marketingConsent}</p>
        <p style="margin-top: 30px;">Thank you,<br>${eventName} Team</p>
    `;
    htmlBody += bottomBanner;
    htmlBody += `</div>`;

    await mailer.sendMail({
      to: artistEmail,
      subject,
      html: htmlBody
    });

    return true;
  } catch (err) {
    console.error("Error sending artist consent details email:", err);
    return false;
  }
}

module.exports = {
  getBannerHtml,
  sendEntryConfirmationEmail,
  sendClientConfirmationEmail_,
  sendClientAftercareEmail_,
  sendArtistConsentDetailsEmail,
};