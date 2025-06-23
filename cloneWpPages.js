const fetch = require('node-fetch');

/**
 * Clone demo event pages for a new event in WordPress.
 *
 * @param {Object} opts
 * @param {string} opts.wpBaseUrl - The root URL of your WordPress site (e.g. https://tattscore.com)
 * @param {string} opts.wpUser - WordPress username (e.g. "gary")
 * @param {string} opts.wpAppPassword - Application password (e.g. "457B TJsT VXoR Io5x hEBb 8pDx")
 * @param {string} opts.eventKey - The event key (e.g. "mynewevent")
 * @param {string} opts.eventName - The event name (e.g. "My New Event")
 * @param {string} [opts.managementPassword] - Password for the event-management page
 * @returns {Promise<Object>} - Info about created pages
 */
async function cloneEventPages({
  wpBaseUrl,
  wpUser,
  wpAppPassword,
  eventKey,
  eventName,
  managementPassword = 'EventMgmt2024'
}) {
  // HARDCODED PAGE IDS from your previous message:
  const networkPageId = 395;
  const demoParentId = 113;
  const demoPageIds = {
    consent: 144,
    entry: 1092,
    'event-management': 656,
    judge: 693
  };

  const auth = Buffer.from(`${wpUser}:${wpAppPassword.replace(/\s+/g, '')}`).toString('base64');

  // 1. Create the /network/{eventKey} parent page
  // (Check if it already exists to avoid duplicates)
  const parentPage = await ensureChildPage({
    wpBaseUrl,
    auth,
    title: `${eventName} (${eventKey})`,
    slug: eventKey,
    parent: networkPageId,
    checkExisting: true
  });
  const eventParentId = parentPage.id;

  // 2. For each subpage, fetch the demo content and create a new child
  const results = {};
  for (const [slug, demoId] of Object.entries(demoPageIds)) {
    // Get demo page content
    const demoContent = await getPageContentById(wpBaseUrl, auth, demoId);
    // Prepare for event-management password
    const password = slug === 'event-management' ? managementPassword : undefined;
    // Create the child page
    results[slug] = await createChildPage({
      wpBaseUrl,
      auth,
      title: `${capitalize(slug)} for ${eventName}`,
      slug,
      content: demoContent,
      parent: eventParentId,
      password
    });
  }

  return {
    parent: parentPage,
    pages: results
  };
}

// --- Helper functions below ---

async function getPageContentById(wpBaseUrl, auth, pageId) {
  const url = `${wpBaseUrl}/wp-json/wp/v2/pages/${pageId}`;
  const res = await fetch(url, { headers: { 'Authorization': `Basic ${auth}` } });
  if (!res.ok) throw new Error(`Failed to fetch demo page ${pageId}: ${res.statusText}`);
  const data = await res.json();
  return data.content.rendered;
}

async function ensureChildPage({ wpBaseUrl, auth, title, slug, parent, checkExisting }) {
  // Check if child with this slug already exists under parent
  if (checkExisting) {
    const url = `${wpBaseUrl}/wp-json/wp/v2/pages?slug=${slug}&parent=${parent}`;
    const res = await fetch(url, { headers: { 'Authorization': `Basic ${auth}` } });
    if (!res.ok) throw new Error(`Failed to check for existing page: ${res.statusText}`);
    const existing = await res.json();
    if (existing.length > 0) return existing[0];
  }
  // Otherwise, create new
  return await createChildPage({ wpBaseUrl, auth, title, slug, content: `<h1>${title}</h1>`, parent });
}

async function createChildPage({ wpBaseUrl, auth, title, slug, content, parent, password }) {
  const url = `${wpBaseUrl}/wp-json/wp/v2/pages`;
  const body = {
    title,
    slug,
    content,
    parent,
    status: 'publish'
  };
  if (password) body.password = password;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Failed to create page "${title}": ${JSON.stringify(data)}`);
  return data;
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

module.exports = { cloneEventPages };