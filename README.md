Netflix Sports Spoiler Blocker

A Chromium-based browser extension (Chrome, Edge, Brave) that prevents spoilers for sports covered by popular Netflix documentary series.

If you are waiting to watch Drive to Survive, Full Swing, or Break Point and don't want the actual season results ruined while browsing the web, this extension will blur out names, teams, and events related to those sports. Inspired by my own frustration and experiences, mostly around "Drive to Survive" and "Six Nations: Full Contact".

🚀 Features

Granular Blocking: Uses advanced text-node targeting to blur only the specific keywords (e.g., "Verstappen", "Wimbledon") without breaking the layout or hiding the rest of the article.

Click-to-Reveal: Accidentally blurred something you wanted to see? Just click the blurred text to reveal it.

Toggle Control: distinct toggles for each sport. Only block what you watch.

Lightweight: Runs only on text content; negligible performance impact.

🏆 Supported Sports & Series

Currently supports blocking spoilers for:

Formula 1 (Drive to Survive)

Golf (Full Swing)

Tennis (Break Point)

Cycling (Tour de France: Unchained)

Rugby (Six Nations: Full Contact)

NASCAR (Full Speed)

Sprinting / Track & Field (Sprint)

NFL (Quarterback / Receiver)

La Liga (La Liga: All Access)

NBA (Starting 5)

📦 Installation

Since this is a developer project, you will need to load it into Chrome manually (unless you pack it).

Clone or Download this repository to a folder on your computer.

Open Google Chrome and navigate to chrome://extensions.

Enable Developer mode by clicking the toggle switch in the top right corner.

Click the Load unpacked button that appears on the top left.

Select the folder where you saved these files.

The extension is now installed! Pin it to your toolbar for easy access.

🛠️ Usage

Click the extension icon in your browser toolbar.

Toggle the switches ON for the sports you want to avoid spoilers for.

Refresh any open tabs for the changes to take effect.

Browse the web safely! Any text matching key terms (players, events, results) will be blurred.

📂 Project Structure

manifest.json: The extension configuration (Manifest V3).

popup.html: The user interface for the settings menu.

popup.js: Logic for saving user preferences to Chrome Storage.

popup.css: Styling for the extension menu.

content.js: The core logic. It scans webpages for text nodes, matches them against the keyword list, and applies the blur effect.

🔧 Configuration

To add new sports or keywords, edit content.js. The KEYWORDS object at the top of the file contains arrays of strings for each category.

const KEYWORDS = {
  f1: ["Verstappen", "Lewis Hamilton", ...],
  new_sport: ["Keyword 1", "Keyword 2"]
};

