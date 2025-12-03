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
let debounceTimer = null;

// Initialize
chrome.storage.sync.get(['blockedSports'], (result) => {
  updateConfiguration(result.blockedSports);
  
  // Initial run
  processPage();

  // Watch for changes, but debounced to prevent performance issues
  const observer = new MutationObserver(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(processPage, 500);
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "UPDATE_SETTINGS") {
    chrome.storage.sync.get(['blockedSports'], (result) => {
      updateConfiguration(result.blockedSports);
      processPage();
    });
  }
});

function updateConfiguration(blockedSports) {
  if (!blockedSports) return;
  enabledSports = Object.keys(blockedSports).filter(key => blockedSports[key]);
  
  activeKeywords = [];
  enabledSports.forEach(sport => {
    if (KEYWORDS[sport]) {
      activeKeywords.push(...KEYWORDS[sport]);
    }
  });
}

function processPage() {
  if (activeKeywords.length === 0) return;

  // TreeWalker is efficient at finding text nodes specifically
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let node;
  const nodesToBlur = [];

  while (node = walker.nextNode()) {
    // 1. Skip if already processed
    if (node.parentElement && node.parentElement.dataset.nsSpoilerBlur) continue;

    // 2. Skip tiny text (whitespace)
    if (node.textContent.trim().length < 3) continue;

    // 3. Skip inputs and scripts
    const tag = node.parentElement ? node.parentElement.tagName : '';
    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA' || tag === 'INPUT') continue;

    // 4. Check for keywords
    const text = node.textContent;
    const hasSpoiler = activeKeywords.some(keyword => 
      text.toLowerCase().includes(keyword.toLowerCase())
    );

    if (hasSpoiler) {
      // Find the best parent to blur. 
      // Usually the immediate parent, but sometimes we want to go up one level 
      // if the text is inside a <b> or <a> tag within a larger sentence.
      let target = node.parentElement;
      
      // Heuristic: If the parent is an inline element like <b>, <i>, <a>, 
      // we might want to blur the container (like <p>) so the context is hidden too.
      // But for strict granular blocking, we stick to the closest block-level or significant element.
      nodesToBlur.push(target);
    }
  }

  // Apply the blur
  nodesToBlur.forEach(blurElement);
}

function blurElement(element) {
  // Check if a parent is already blurred to avoid double-blurring
  let parent = element.parentElement;
  while (parent) {
    if (parent.dataset.nsSpoilerBlur === "true") return;
    parent = parent.parentElement;
  }

  element.style.filter = "blur(6px)";
  element.style.userSelect = "none"; // Prevent highlighting to read
  element.style.cursor = "pointer";
  element.style.transition = "all 0.3s ease";
  
  // Mark as processed
  element.dataset.nsSpoilerBlur = "true";
  element.title = "Spoiler blocked! Click to reveal.";

  // Click to reveal logic
  element.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    element.style.filter = "none";
    element.style.userSelect = "auto";
    element.style.cursor = "auto";
    element.dataset.nsSpoilerBlur = "revealed"; // Mark as revealed so we don't re-blur it
  }, { once: true });
}