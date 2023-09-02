const searchInput = document.getElementById('default-search');

const teamNames = [
  ['Arsenal', 'Arsenal FC'],
  ['Aston Villa', 'Aston Villa FC'],
  ['Chelsea', 'Chelsea FC'],
  ['Everton', 'Everton FC'],
  ['Fulham', 'Fulham FC'],
  ['Liverpool', 'Liverpool FC'],
  ['Man City', 'Manchester City FC'],
  ['Man United', 'Manchester United FC'],
  ['Newcastle', 'Newcastle United FC'],
  ['Tottenham', 'Tottenham Hotspur FC'],
  ['Wolverhampton', 'Wolverhampton Wanderers FC'],
  ['Burnley', 'Burnley FC'],
  ['Nottingham', 'Nottingham Forest FC'],
  ['Crystal Palace', 'Crystal Palace FC'],
  ['Sheffield Utd', 'Sheffield United FC'],
  ['Luton Town', 'Luton Town FC'],
  ['Brighton Hove', 'Brighton & Hove Albion FC'],
  ['Brentford', 'Brentford FC'],
  ['West Ham', 'West Ham United FC'],
  ['Bournemouth', 'AFC Bournemouth'],
  ['1. FC Köln', '1. FC Köln'],
  ['Hoffenheim', 'TSG 1899 Hoffenheim'],
  ['Leverkusen', 'Bayer 04 Leverkusen'],
  ['Dortmund', 'Borussia Dortmund'],
  ['Bayern', 'FC Bayern München'],
  ['Stuttgart', 'VfB Stuttgart'],
  ['Wolfsburg', 'VfL Wolfsburg'],
  ['Bremen', 'SV Werder Bremen'],
  ['Mainz', '1. FSV Mainz 05'],
  ['Augsburg', 'FC Augsburg'],
  ['Freiburg', 'SC Freiburg'],
  ["M'gladbach", 'Borussia Mönchengladbach'],
  ['Frankfurt', 'Eintracht Frankfurt'],
  ['Union Berlin', '1. FC Union Berlin'],
  ['Bochum', 'VfL Bochum 1848'],
  ['Heidenheim', '1. FC Heidenheim 1846'],
  ['Darmstadt', 'SV Darmstadt 98'],
  ['RB Leipzig', 'RB Leipzig'],
  ['Toulouse', 'Toulouse FC'],
  ['Brest', 'Stade Brestois 29'],
  ['Marseille', 'Olympique de Marseille'],
  ['Montpellier', 'Montpellier HSC'],
  ['Lille', 'Lille OSC'],
  ['Nice', 'OGC Nice'],
  ['Olympique Lyon', 'Olympique Lyonnais'],
  ['PSG', 'Paris Saint-Germain FC'],
  ['Lorient', 'FC Lorient'],
  ['Stade Rennais', 'Stade Rennais FC 1901'],
  ['Le Havre', 'Le Havre AC'],
  ['Clermont Foot', 'Clermont Foot 63'],
  ['Nantes', 'FC Nantes'],
  ['FC Metz', 'FC Metz'],
  ['RC Lens', 'Racing Club de Lens'],
  ['Stade de Reims', 'Stade de Reims'],
  ['Monaco', 'AS Monaco FC'],
  ['Strasbourg', 'RC Strasbourg Alsace'],
  ['Milan', 'AC Milan'],
  ['Fiorentina', 'ACF Fiorentina'],
  ['Roma', 'AS Roma'],
  ['Atalanta', 'Atalanta BC'],
  ['Bologna', 'Bologna FC 1909'],
  ['Cagliari', 'Cagliari Calcio'],
  ['Genoa', 'Genoa CFC'],
  ['Inter', 'FC Internazionale Milano'],
  ['Juventus', 'Juventus FC'],
  ['Lazio', 'SS Lazio'],
  ['Napoli', 'SSC Napoli'],
  ['Udinese', 'Udinese Calcio'],
  ['Empoli', 'Empoli FC'],
  ['Verona', 'Hellas Verona FC'],
  ['Salernitana', 'US Salernitana 1919'],
  ['Frosinone', 'Frosinone Calcio'],
  ['Sassuolo', 'US Sassuolo Calcio'],
  ['Torino', 'Torino FC'],
  ['Lecce', 'US Lecce'],
  ['Monza', 'AC Monza'],
  ['Athletic', 'Athletic Club'],
  ['Atleti', 'Club Atlético de Madrid'],
  ['Osasuna', 'CA Osasuna'],
  ['Barça', 'FC Barcelona'],
  ['Getafe', 'Getafe CF'],
  ['Granada', 'Granada CF'],
  ['Real Madrid', 'Real Madrid CF'],
  ['Rayo Vallecano', 'Rayo Vallecano de Madrid'],
  ['Mallorca', 'RCD Mallorca'],
  ['Real Betis', 'Real Betis Balompié'],
  ['Real Sociedad', 'Real Sociedad de Fútbol'],
  ['Villarreal', 'Villarreal CF'],
  ['Valencia', 'Valencia CF'],
  ['Alavés', 'Deportivo Alavés'],
  ['Cádiz CF', 'Cádiz CF'],
  ['Almería', 'UD Almería'],
  ['Las Palmas', 'UD Las Palmas'],
  ['Girona', 'Girona FC'],
  ['Celta', 'RC Celta de Vigo'],
  ['Sevilla FC', 'Sevilla FC'],
];
const teamShort = [
  'Toulouse',
  'Brest',
  'Marseille',
  'Montpellier',
  'Lille',
  'Nice',
  'Olympique Lyon',
  'PSG',
  'Lorient',
  'Stade Rennais',
  'Le Havre',
  'Clermont Foot',
  'Nantes',
  'FC Metz',
  'RC Lens',
  'Stade de Reims',
  'Monaco',
  'Strasbourg',
  'Arsenal',
  'Aston Villa',
  'Chelsea',
  'Everton',
  'Fulham',
  'Liverpool',
  'Man City',
  'Man United',
  'Newcastle',
  'Tottenham',
  'Wolverhampton',
  'Burnley',
  'Nottingham',
  'Crystal Palace',
  'Sheffield Utd',
  'Luton Town',
  'Brighton Hove',
  'Brentford',
  'West Ham',
  'Bournemouth',
  'Athletic',
  'Atleti',
  'Osasuna',
  'Barça',
  'Getafe',
  'Granada',
  'Real Madrid',
  'Rayo Vallecano',
  'Mallorca',
  'Real Betis',
  'Real Sociedad',
  'Villarreal',
  'Valencia',
  'Alavés',
  'Cádiz CF',
  'Almería',
  'Las Palmas',
  'Girona',
  'Celta',
  'Sevilla FC',
  '1. FC Köln',
  'Hoffenheim',
  'Leverkusen',
  'Dortmund',
  'Bayern',
  'Stuttgart',
  'Wolfsburg',
  'Bremen',
  'Mainz',
  'Augsburg',
  'Freiburg',
  "M'gladbach",
  'Frankfurt',
  'Union Berlin',
  'Bochum',
  'Heidenheim',
  'Darmstadt',
  'RB Leipzig',
  'Milan',
  'Fiorentina',
  'Roma',
  'Atalanta',
  'Bologna',
  'Cagliari',
  'Genoa',
  'Inter',
  'Juventus',
  'Lazio',
  'Napoli',
  'Udinese',
  'Empoli',
  'Verona',
  'Salernitana',
  'Frosinone',
  'Sassuolo',
  'Torino',
  'Lecce',
  'Monza',
];

var distance = function (a, b) {
  var _a;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  if (a.length > b.length) (_a = [b, a]), (a = _a[0]), (b = _a[1]);
  var row = [];
  for (var i = 0; i <= a.length; i++) row[i] = i;
  for (var i = 1; i <= b.length; i++) {
    var prev = i;
    for (var j = 1; j <= a.length; j++) {
      var val = void 0;
      if (b.charAt(i - 1) === a.charAt(j - 1)) val = row[j - 1];
      else val = Math.min(row[j - 1] + 1, prev + 1, row[j] + 1);
      row[j - 1] = prev;
      prev = val;
    }
    row[a.length] = prev;
  }
  return row[a.length];
};
var closestMatch = function (target, array, showOccurrences) {
  if (showOccurrences === void 0) {
    showOccurrences = false;
  }
  if (array.length === 0) return null;
  var vals = [];
  var found = [];
  for (var i = 0; i < array.length; i++)
    vals.push((0, distance)(target, array[i]));
  var min = Math.min.apply(Math, vals);
  for (var i = 0; i < vals.length; i++) {
    if (vals[i] === min) found.push(array[i]);
  }
  return showOccurrences ? found : found[0];
};

// Had function ghi dial Comparaison USELESS MSeee7hom mni tsali
function getMatch(str) {
  const matches = [];
  const closeMatches = [];

  teamNames.forEach((team) => {
    let bigname = team[1].toLowerCase();
    let smallname = team[0].toLowerCase();
    let lowerStr = str.toLowerCase();
    if (bigname.includes(lowerStr)) {
      matches.push(team[0]);
    } else if (smallname.includes(lowerStr)) {
      matches.push(team[0]);
    } else if (matches.length >= 1) {
      const split = team[0].split(' ');
      split.forEach((token) => {
        const splitmatch = distance(str, token);
        if (splitmatch <= 3 && !matches.includes(team[0])) {
          closeMatches.push(team[0]);
        }
      });
    }
  });

  const othermatches = closestMatch(str, teamShort, true);
  othermatches.forEach((match) => {
    if (!matches.includes(match)) {
      matches.push(match);
    }
  });
  closeMatches.forEach((match) => {
    if (!matches.includes(match)) {
      matches.push(match);
    }
  });
  return matches.splice(0, 8);
}

//HTA HADI // Had function ghi dial Comparaison USELESS MSeee7hom mni tsali
function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

searchInput.addEventListener('input', function () {
  let suggestions = document.getElementById('suggestion');

  // Teams for Test

  if (searchInput.value != '' || searchInput.value == null) {
    // filter bash nreturn tems dial recherche
    let results = getMatch(searchInput.value);

    suggestions.innerHTML = '';

    results.forEach((res) => {
      let newElemnt = document.createElement('div');
      newElemnt.innerHTML = `
            <div class="cursor-pointer py-2 px-3 hover:bg-slate-100">
                <a href="./matcheDetails/index.html?team=${res}">
                <p class="text-sm font-medium text-gray-600">${res}</p>
                </a>
            </div>
            `;
      suggestions.appendChild(newElemnt);
    });

    suggestions.classList.remove('hidden');
  } else {
    suggestions.classList.add('hidden');
  }
});
