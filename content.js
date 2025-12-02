// Configuration: Keywords for each sport
const KEYWORDS = {
  f1: [
    "Formula 1", "F1", "Verstappen", "Lewis Hamilton", "Lando Norris", "Leclerc", 
    "Red Bull Racing", "Mercedes AMG", "Ferrari F1", "McLaren F1", "Grand Prix", 
    "Toto Wolff", "Christian Horner", "Drive to Survive"
  ],
  golf: [
    "PGA Tour", "LIV Golf", "Rory McIlroy", "Scottie Scheffler", "Bryson DeChambeau", 
    "Brooks Koepka", "Jon Rahm", "Full Swing", "Masters Tournament", "Ryder Cup"
  ],
  tennis: [
    "ATP", "WTA", "Djokovic", "Carlos Alcaraz", "Jannik Sinner", "Sabalenka", 
    "Iga Swiatek", "Wimbledon", "Roland Garros", "US Open Tennis", "Australian Open"
  ],
  cycling: [
    "Tour de France", "Jonas Vingegaard", "Tadej Pogacar", "Visma-Lease a Bike", 
    "UAE Team Emirates", "Maillot Jaune"
  ],
  rugby: [
    "Six Nations", "Ireland Rugby", "France Rugby", "England Rugby", "Wales Rugby", 
    "Johnny Sexton", "Finn Russell"
  ],
  nascar: [
    "NASCAR", "Daytona 500", "Cup Series", "Hendrick Motorsports", "Denny Hamlin", 
    "Joey Logano", "Ryan Blaney"
  ],
  sprint: [
    "Noah Lyles", "Sha'Carri Richardson", "Diamond League", "100m sprint", "200m sprint",
    "World Athletics"
  ],
  nfl: [
    "Patrick Mahomes", "Travis Kelce", "Kirk Cousins", "Super Bowl", "Kansas City Chiefs",
    "Justin Jefferson", "Davante Adams", "George Kittle"
  ],
  laliga: [
    "La Liga", "Real Madrid", "FC Barcelona", "Vinicius Jr", "Bellingham", "Lewandowski", 
    "El Clasico"
  ],
  nba: [
    "LeBron James", "Anthony Edwards", "Jayson Tatum", "Jimmy Butler", "Domantas Sabonis", 
    "NBA Finals", "Celtics"
  ]
};

let enabledSports = [];
let activeKeywords = [];

// Initialize
chrome.storage.sync.get(['blockedSports'], (result) => {
  updateConfiguration(result.blockedSports);
  // Start observing the page for changes (infinite scroll, etc)
  const observer = new MutationObserver(processPage);
  observer.observe(document.body, { childList: true, subtree: true });
});

// Listen for updates from the popup
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "UPDATE_SETTINGS") {
    chrome.storage.sync.get(['blockedSports'], (result) => {
      updateConfiguration(result.blockedSports);
      processPage(); // Re-run immediately
    });
  }
});

function updateConfiguration(blockedSports) {
  if (!blockedSports) return;
  
  enabledSports = Object.keys(blockedSports).filter(key => blockedSports[key]);
  
  // Flatten keywords into a single regex-friendly list
  activeKeywords = [];
  enabledSports.forEach(sport => {
    if (KEYWORDS[sport]) {
      activeKeywords.push(...KEYWORDS[sport]);
    }
  });
}

function processPage() {
  if (activeKeywords.length === 0) return;

  // We look for common container elements that hold articles or headlines
  // This list can be expanded based on specific sites (Twitter, Reddit, ESPN, etc.)
  const targetTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'li', 'article'];
  
  // Specific classes often used for content cards (heuristic approach)
  const elements = document.querySelectorAll(targetTags.join(','));

  elements.forEach(element => {
    // Skip if already processed or is a child of a processed element
    if (element.dataset.nsSpoilerChecked) return;
    
    // Check if this is a leaf node or close to it (text content)
    // We don't want to blur the whole <body> tag
    if (element.children.length > 5) return; 

    const text = element.textContent;
    if (!text) return;

    // Check if any keyword matches
    const hasSpoiler = activeKeywords.some(keyword => 
      text.toLowerCase().includes(keyword.toLowerCase())
    );

    if (hasSpoiler) {
      blurElement(element);
    }
    
    element.dataset.nsSpoilerChecked = "true";
  });
}

function blurElement(element) {
  // Check if we already blurred a parent; if so, no need to blur this child
  let parent = element.parentElement;
  while (parent) {
    if (parent.dataset.nsSpoilerBlur) return;
    parent = parent.parentElement;
  }

  // Apply visual blur
  element.style.filter = "blur(6px)";
  element.style.cursor = "pointer";
  element.style.transition = "filter 0.3s";
  element.dataset.nsSpoilerBlur = "true";
  
  // Add tooltip or indication
  element.title = "Spoiler blocked! Click to reveal.";

  // Add click to reveal listener
  element.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    element.style.filter = "none";
    element.dataset.nsSpoilerBlur = "false";
  }, { once: true });
}