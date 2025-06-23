// config.js -- Node.js universal config for Codespace backend

// Scoring areas used in the app, ported from original config.gs
const SCORING_AREAS = [
  {
    key: 'placement',
    label: 'Placement / Flow',
    range: [-20, 15],
    description: 'Scoring Guide: -20 = Extremely poor, 0 = Slightly off, 15 = Excellent.'
  },
  {
    key: 'technique',
    label: 'Technical Application',
    range: [-20, 15],
    description: 'Scoring Guide: -20 = Major issues, 0 = Noticeable flaws, 5 = Inconsistent, 10 = Mostly clean; minor flaws, 15 = Lawless.'
  },
  {
    key: 'qualityScore',
    label: 'Realism / Design Quality',
    range: [0, 30],
    description: 'Realism: 0 = Unrecognisable, 5 = Some clarity, but flat, inconsistent, unrealistic, 15 = Clear subject good depth, minor flaws, 30 = Flawless realism with lifelike shading and depth. Design: creativity & originality - 0 = Poor design, no structure or clarity, 5 = Uninspired, lacks originality, 15 = Solid concept, needs refinement, 30 = Exceptional, artistic and imaginative.'
  },
  {
    key: 'blackworkOrColour',
    label: 'Blackwork / Colour & Contrast',
    range: [0, 30],
    description: 'Colour: colour use & / or contrast -  0 = No understanding, muddy / flat, 5 = Weak contrast or very poor use of tone and colour, 15 = Moderate contrast or palette use, 30 = Perfect colour use and / or contrast; Blackwork: linework & consistency;  -  0 = Uneven, distorted, lacks intent or structure, 5 = Inconsistent linework or patchy fill, 15 = Clean overall, with minor breaks or alignment issues, 30 = Precise, balanced, and extremely well saturated. Flawless.'
  },
  {
    key: 'readability',
    label: 'Readability',
    range: [-10, 30],
    description: '-10 = unreadable, 5 = difficult to read, 15 = mostly readable, 30 = perfect clarity.'
  },
  {
    key: 'creativity',
    label: 'Creativity',
    range: [0, 30],
    description: '0 = generic, 5 = minimal variation, 15 = some creativity, 30 = exceptional & unique.'
  },
  {
    key: 'difficulty',
    label: 'Technical Difficulty',
    range: [0, 30],
    description: '0 = basic, 5 = mild challenge, 15 = above average, 30 = very difficult.'
  },
  {
    key: 'styleAccuracy',
    label: 'Style / Category Accuracy',
    range: [-50, 0],
    description: '0 = perfect representation, -50 = does not represent style or category.'
  },
  {
    key: 'judgesScore',
    label: "Judge's Overall Opinion",
    range: [0, 100],
    description: '0 = awful, 60+ = potential winner, 100 = WOW!'
  }
];

// Allowed origins for CORS (expand as needed)
const ALLOWED_ORIGINS = [
  'https://tattscore.com'
];

// Export the config objects for use in your Node.js app
module.exports = {
  SCORING_AREAS,
  ALLOWED_ORIGINS
};