const sportsData = [
  { id: 'f1', name: 'Formula 1', series: 'Drive to Survive' },
  { id: 'golf', name: 'Golf (PGA/LIV)', series: 'Full Swing' },
  { id: 'tennis', name: 'Tennis', series: 'Break Point' },
  { id: 'cycling', name: 'Cycling', series: 'Tour de France: Unchained' },
  { id: 'rugby', name: 'Rugby', series: 'Six Nations: Full Contact' },
  { id: 'nascar', name: 'NASCAR', series: 'Full Speed' },
  { id: 'sprint', name: 'Sprinting', series: 'Sprint' },
  { id: 'nfl', name: 'NFL', series: 'Quarterback / Receiver' },
  { id: 'laliga', name: 'La Liga', series: 'La Liga: All Access' },
  { id: 'nba', name: 'NBA', series: 'Starting 5' }
];

const container = document.querySelector('.toggles');
const statusDiv = document.getElementById('status');

// 1. Build the UI dynamically
sportsData.forEach(sport => {
  const div = document.createElement('div');
  div.className = 'toggle-item';
  div.innerHTML = `
    <div class="label-group">
      <span class="sport-name">${sport.name}</span>
      <span class="series-name">${sport.series}</span>
    </div>
    <label class="switch">
      <input type="checkbox" id="${sport.id}">
      <span class="slider"></span>
    </label>
  `;
  container.appendChild(div);
});

// 2. Load saved settings
chrome.storage.sync.get(['blockedSports'], (result) => {
  const blocked = result.blockedSports || {};
  sportsData.forEach(sport => {
    const checkbox = document.getElementById(sport.id);
    if (checkbox) {
      checkbox.checked = blocked[sport.id] || false;
    }
  });
});

// 3. Save settings on change
container.addEventListener('change', (e) => {
  if (e.target.type === 'checkbox') {
    const sportId = e.target.id;
    const isChecked = e.target.checked;

    chrome.storage.sync.get(['blockedSports'], (result) => {
      const blocked = result.blockedSports || {};
      blocked[sportId] = isChecked;

      chrome.storage.sync.set({ blockedSports: blocked }, () => {
        // Show saved status
        statusDiv.textContent = "Settings saved! Reload page to apply.";
        setTimeout(() => statusDiv.textContent = "", 2000);
        
        // Optional: Send message to active tab to update immediately
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {type: "UPDATE_SETTINGS"});
        });
      });
    });
  }
});