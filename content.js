// Configuration: Keywords for each sport
const KEYWORDS = {
  f1: [
    // Series & General
    "Formula 1", "F1", "Drive to Survive", "Grand Prix", "Pole Position", "Podium", 
    "Chequered Flag", "Safety Car", "Paddock", "Grid penalty", "Constructors' Championship",
    "Drivers' Championship", "FIA", "Sprint Race", "Qualifying", "DRS",
    // Teams
    "Red Bull Racing", "Mercedes AMG", "Ferrari", "McLaren", "Aston Martin", 
    "Alpine", "Williams Racing", "Haas F1", "Kick Sauber", "Visa Cash App RB",
    // Drivers & Key Figures
    "Max Verstappen", "Lewis Hamilton", "Lando Norris", "Charles Leclerc", "Carlos Sainz",
    "George Russell", "Oscar Piastri", "Fernando Alonso", "Sergio Perez", "Lance Stroll",
    "Daniel Ricciardo", "Yuki Tsunoda", "Valtteri Bottas", "Zhou Guanyu", "Kevin Magnussen",
    "Nico Hulkenberg", "Alex Albon", "Logan Sargeant", "Esteban Ocon", "Pierre Gasly",
    "Toto Wolff", "Christian Horner", "Fred Vasseur", "Zak Brown", "Guenther Steiner",
    // Circuits (Popular spoilers)
    "Monaco GP", "Silverstone", "Monza", "Spa-Francorchamps", "Las Vegas GP", "Abu Dhabi GP"
  ],
  golf: [
    // Series & General
    "Full Swing", "PGA Tour", "LIV Golf", "DP World Tour", "FedEx Cup", "Green Jacket",
    "Claret Jug", "Wanamaker Trophy", "Ryder Cup", "Presidents Cup", "Majors", 
    "Cut line", "Leaderboard", "Playoff", "Hole-in-one", "Birdie", "Eagle", "Bogey",
    // Tournaments
    "The Masters", "Augusta National", "US Open Golf", "The Open Championship", "PGA Championship",
    "The Players Championship", "Tour Championship", "Waste Management Phoenix Open",
    // Players
    "Rory McIlroy", "Scottie Scheffler", "Jon Rahm", "Brooks Koepka", "Bryson DeChambeau",
    "Viktor Hovland", "Xander Schauffele", "Patrick Cantlay", "Wyndham Clark", "Brian Harman",
    "Matt Fitzpatrick", "Tommy Fleetwood", "Jordan Spieth", "Justin Thomas", "Rickie Fowler",
    "Collin Morikawa", "Hideki Matsuyama", "Ludvig Aberg", "Max Homa", "Cameron Smith",
    "Dustin Johnson", "Phil Mickelson", "Tiger Woods", "Tyrrell Hatton", "Talor Gooch"
  ],
  tennis: [
    // Series & General
    "Break Point", "ATP Tour", "WTA Tour", "Grand Slam", "Centre Court", "Tie-break",
    "Match point", "Set point", "Ace", "Deuce", "Wildcard", "Seeded", "Finals",
    // Tournaments
    "Wimbledon", "Roland Garros", "French Open", "US Open", "Australian Open", 
    "Indian Wells", "Miami Open", "Madrid Open", "Italian Open", "ATP Finals", "Davis Cup",
    // Players (Men)
    "Novak Djokovic", "Carlos Alcaraz", "Jannik Sinner", "Daniil Medvedev", "Andrey Rublev",
    "Alexander Zverev", "Holger Rune", "Hubert Hurkacz", "Stefanos Tsitsipas", "Alex de Minaur",
    "Taylor Fritz", "Casper Ruud", "Grigor Dimitrov", "Ben Shelton", "Frances Tiafoe",
    "Nick Kyrgios", "Rafael Nadal", "Andy Murray",
    // Players (Women)
    "Iga Swiatek", "Aryna Sabalenka", "Coco Gauff", "Elena Rybakina", "Jessica Pegula",
    "Ons Jabeur", "Marketa Vondrousova", "Karolina Muchova", "Maria Sakkari", "Naomi Osaka"
  ],
  cycling: [
    // Series & General
    "Tour de France", "Unchained", "Giro d'Italia", "Vuelta a Espana", "Maillot Jaune",
    "Yellow Jersey", "Green Jersey", "Polka Dot Jersey", "White Jersey", "Peloton",
    "Breakaway", "Sprint finish", "GC Contender", "King of the Mountains", "Time Trial",
    "Grand Tour", "Monument", "Cobbles", "Echelon", "Gruppetto",
    // Teams
    "Visma-Lease a Bike", "UAE Team Emirates", "INEOS Grenadiers", "Soudal Quick-Step",
    "Bora-Hansgrohe", "Lidl-Trek", "EF Education-EasyPost", "Movistar", "Alpecin-Deceuninck",
    // Riders
    "Jonas Vingegaard", "Tadej Pogacar", "Remco Evenepoel", "Primoz Roglic", "Mark Cavendish",
    "Jasper Philipsen", "Wout van Aert", "Mathieu van der Poel", "Egan Bernal", "Sepp Kuss",
    "Tom Pidcock", "Geraint Thomas", "Julian Alaphilippe", "David Gaudu", "Thibaut Pinot",
    "Adam Yates", "Simon Yates", "Jai Hindley", "Carlos Rodriguez", "Biniam Girmay"
  ],
  rugby: [
    // Series & General
    "Six Nations", "Full Contact", "Rugby World Cup", "Grand Slam", "Triple Crown",
    "Calcutta Cup", "Centenary Quaich", "Try scorer", "Conversion", "Penalty kick",
    "Scrum", "Lineout", "Ruck", "Maul", "Sin bin", "Red card", "Bonus point",
    // Teams
    "Ireland Rugby", "France Rugby", "England Rugby", "Scotland Rugby", "Wales Rugby", 
    "Italy Rugby", "Springboks", "All Blacks", "Wallabies", "Shamrock", "Les Bleus",
    // Players
    "Johnny Sexton", "Antoine Dupont", "Owen Farrell", "Finn Russell", "Dan Biggar",
    "Josh van der Flier", "Caelan Doris", "Dan Sheehan", "Tadhg Furlong", "James Lowe",
    "Thomas Ramos", "Damian Penaud", "Gregory Alldritt", "Charles Ollivon", "Romain Ntamack",
    "Maro Itoje", "Ellis Genge", "Marcus Smith", "Ollie Lawrence", "Jamie George",
    "Duhan van der Merwe", "Darcy Graham", "Sione Tuipulotu", "Ange Capuozzo", "Louis Rees-Zammit"
  ],
  nascar: [
    // Series & General
    "NASCAR", "Full Speed", "Cup Series", "Playoffs", "Round of 12", "Round of 8",
    "Championship 4", "Stage Win", "Pole Winner", "Drafting", "Pit Stop", "Overtime",
    "Checkered Flag", "Victory Lane", "Manufacturer's Championship", "Next Gen Car",
    // Races & Tracks
    "Daytona 500", "Coca-Cola 600", "Southern 500", "Talladega", "Bristol Motor Speedway",
    "Martinsville", "Darlington", "Charlotte Roval", "Phoenix Raceway",
    // Teams
    "Hendrick Motorsports", "Joe Gibbs Racing", "Team Penske", "Trackhouse Racing",
    "23XI Racing", "RFK Racing", "Stewart-Haas Racing", "Richard Childress Racing",
    // Drivers
    "Denny Hamlin", "Joey Logano", "Ryan Blaney", "Kyle Larson", "Chase Elliott",
    "William Byron", "Christopher Bell", "Tyler Reddick", "Ross Chastain", "Chris Buescher",
    "Brad Keselowski", "Bubba Wallace", "Kyle Busch", "Martin Truex Jr", "Ty Gibbs",
    "Alex Bowman", "Daniel Suarez", "Austin Cindric", "Chase Briscoe", "Ryan Preece"
  ],
  sprint: [
    // Series & General
    "Sprint", "World Athletics", "Diamond League", "Olympics", "Paris 2024", 
    "100m final", "200m final", "4x100m relay", "Photo finish", "False start", 
    "World Record", "Season Best", "Personal Best", "Starting blocks", "Track and Field",
    // Athletes (Men)
    "Noah Lyles", "Christian Coleman", "Fred Kerley", "Kenny Bednarek", "Erriyon Knighton",
    "Letsile Tebogo", "Oblique Seville", "Ferdinand Omanyala", "Zharnel Hughes", "Yohan Blake",
    "Marcell Jacobs", "Andre De Grasse", "Akani Simbine",
    // Athletes (Women)
    "Sha'Carri Richardson", "Shericka Jackson", "Shelly-Ann Fraser-Pryce", "Elaine Thompson-Herah",
    "Marie-Josee Ta Lou", "Julien Alfred", "Dina Asher-Smith", "Daryll Neita", "Gabby Thomas",
    "Femke Bol", "Sydney McLaughlin-Levrone" // Often mentioned in context
  ],
  nfl: [
    // Series & General
    "Quarterback", "Receiver", "NFL", "Super Bowl", "AFC Championship", "NFC Championship",
    "Playoffs", "Wild Card", "Touchdown", "Interception", "Sacked", "Field Goal",
    "Hail Mary", "Pick-6", "MVP", "Pro Bowl", "Draft Pick", "Lombardi Trophy",
    // Teams
    "Kansas City Chiefs", "San Francisco 49ers", "Philadelphia Eagles", "Baltimore Ravens",
    "Detroit Lions", "Buffalo Bills", "Dallas Cowboys", "Miami Dolphins", "Cincinnati Bengals",
    "Minnesota Vikings", "Las Vegas Raiders",
    // Players
    "Patrick Mahomes", "Travis Kelce", "Kirk Cousins", "Marcus Mariota", "Peyton Manning",
    "Justin Jefferson", "Davante Adams", "George Kittle", "Deebo Samuel", "Amon-Ra St. Brown",
    "Joe Burrow", "Ja'Marr Chase", "Josh Allen", "Stefon Diggs", "Lamar Jackson",
    "Jalen Hurts", "AJ Brown", "Dak Prescott", "CeeDee Lamb", "Brock Purdy",
    "Christian McCaffrey", "Tyreek Hill", "Tua Tagovailoa", "Aaron Rodgers", "Myles Garrett"
  ],
  laliga: [
    // Series & General
    "La Liga", "All Access", "El Clasico", "Derbi Madrileno", "Copa del Rey", "Supercopa",
    "Champions League", "Relegation battle", "Pichichi", "Golden Boot", "Clean sheet",
    "Hat-trick", "VAR decision", "Red card", "Penalty shootout",
    // Teams
    "Real Madrid", "FC Barcelona", "Atletico Madrid", "Girona FC", "Real Sociedad",
    "Athletic Club Bilbao", "Real Betis", "Sevilla FC", "Valencia CF", "Villarreal",
    // Players & Managers
    "Vinicius Jr", "Jude Bellingham", "Rodrygo", "Kylian Mbappe", "Robert Lewandowski",
    "Lamine Yamal", "Pedri", "Gavi", "Ronald Araujo", "Frenkie de Jong",
    "Antoine Griezmann", "Alvaro Morata", "Jan Oblak", "Koke", "Rodrigo De Paul",
    "Takefusa Kubo", "Nico Williams", "Inaki Williams", "Fede Valverde", "Eduardo Camavinga",
    "Aurelien Tchouameni", "Luka Modric", "Toni Kroos", "Ilkay Gundogan", "Marc-Andre ter Stegen",
    "Carlo Ancelotti", "Xavi Hernandez", "Diego Simeone"
  ],
  nba: [
    // Series & General
    "Starting 5", "NBA", "NBA Finals", "Playoffs", "Play-in Tournament", "All-Star Game",
    "MVP", "Rookie of the Year", "Triple-double", "Buzzer beater", "Dunk", "Three-pointer",
    "Eastern Conference", "Western Conference", "Larry O'Brien Trophy", "Free agency",
    // Teams
    "Boston Celtics", "Denver Nuggets", "Los Angeles Lakers", "Golden State Warriors",
    "Miami Heat", "Milwaukee Bucks", "Phoenix Suns", "Dallas Mavericks", "Minnesota Timberwolves",
    "Oklahoma City Thunder", "New York Knicks", "Philadelphia 76ers", "LA Clippers",
    // Players
    "LeBron James", "Anthony Edwards", "Jayson Tatum", "Jimmy Butler", "Domantas Sabonis",
    "Nikola Jokic", "Luka Doncic", "Giannis Antetokounmpo", "Stephen Curry", "Kevin Durant",
    "Joel Embiid", "Shai Gilgeous-Alexander", "Anthony Davis", "Tyrese Haliburton",
    "Jalen Brunson", "Devin Booker", "Donovan Mitchell", "Bam Adebayo", "Damian Lillard",
    "Kyrie Irving", "Victor Wembanyama", "Chet Holmgren", "Jaylen Brown", "Jamal Murray"
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