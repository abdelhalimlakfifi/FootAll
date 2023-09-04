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

const teamLong = [
  'Arsenal FC',
  'Aston Villa FC',
  'Chelsea FC',
  'Everton FC',
  'Fulham FC',
  'Liverpool FC',
  'Manchester City FC',
  'Manchester United FC',
  'Newcastle United FC',
  'Tottenham Hotspur FC',
  'Wolverhampton Wanderers FC',
  'Burnley FC',
  'Nottingham Forest FC',
  'Crystal Palace FC',
  'Sheffield United FC',
  'Luton Town FC',
  'Brighton & Hove Albion FC',
  'Brentford FC',
  'West Ham United FC',
  'AFC Bournemouth',
  '1. FC Köln',
  'TSG 1899 Hoffenheim',
  'Bayer 04 Leverkusen',
  'Borussia Dortmund',
  'FC Bayern München',
  'VfB Stuttgart',
  'VfL Wolfsburg',
  'SV Werder Bremen',
  '1. FSV Mainz 05',
  'FC Augsburg',
  'SC Freiburg',
  'Borussia Mönchengladbach',
  'Eintracht Frankfurt',
  '1. FC Union Berlin',
  'VfL Bochum 1848',
  '1. FC Heidenheim 1846',
  'SV Darmstadt 98',
  'RB Leipzig',
  'Toulouse FC',
  'Stade Brestois 29',
  'Olympique de Marseille',
  'Montpellier HSC',
  'Lille OSC',
  'OGC Nice',
  'Olympique Lyonnais',
  'Paris Saint-Germain FC',
  'FC Lorient',
  'Stade Rennais FC 1901',
  'Le Havre AC',
  'Clermont Foot 63',
  'FC Nantes',
  'FC Metz',
  'Racing Club de Lens',
  'Stade de Reims',
  'AS Monaco FC',
  'RC Strasbourg Alsace',
  'AC Milan',
  'ACF Fiorentina',
  'AS Roma',
  'Atalanta BC',
  'Bologna FC 1909',
  'Cagliari Calcio',
  'Genoa CFC',
  'FC Internazionale Milano',
  'Juventus FC',
  'SS Lazio',
  'SSC Napoli',
  'Udinese Calcio',
  'Empoli FC',
  'Hellas Verona FC',
  'US Salernitana 1919',
  'Frosinone Calcio',
  'US Sassuolo Calcio',
  'Torino FC',
  'US Lecce',
  'AC Monza',
  'Athletic Club',
  'Club Atlético de Madrid',
  'CA Osasuna',
  'FC Barcelona',
  'Getafe CF',
  'Granada CF',
  'Real Madrid CF',
  'Rayo Vallecano de Madrid',
  'RCD Mallorca',
  'Real Betis Balompié',
  'Real Sociedad de Fútbol',
  'Villarreal CF',
  'Valencia CF',
  'Deportivo Alavés',
  'Cádiz CF',
  'UD Almería',
  'UD Las Palmas',
  'Girona FC',
  'RC Celta de Vigo',
  'Sevilla FC',
];

const tweetTeams = [
  ['Arsenal FC', '@Arsenal'],
  ['Aston Villa FC', '@AVFCOfficial'],
  ['Chelsea FC', '@ChelseaFC'],
  ['Everton FC', '@Everton'],
  ['Fulham FC', '@FulhamFC'],
  ['Liverpool FC', '@LFC'],
  ['Manchester City FC', '@ManCity'],
  ['Manchester United FC', '@ManUtd'],
  ['Newcastle United FC', '@NUFC'],
  ['Tottenham Hotspur FC', '@SpursOfficial'],
  ['Wolverhampton Wanderers FC', '@Wolves'],
  ['Burnley FC', '@BurnleyOfficial'],
  ['Nottingham Forest FC', '@NFFC'],
  ['Crystal Palace FC', '@CPFC'],
  ['Sheffield United FC', '@SheffieldUnited'],
  ['Luton Town FC', '@LutonTown'],
  ['Brighton & Hove Albion FC', '@OfficialBHAFC'],
  ['Brentford FC', '@BrentfordFC'],
  ['West Ham United FC', '@WestHam'],
  ['AFC Bournemouth', '@AFCBournemouth'],
  ['Borussia Dortmund', '@BVB'],
  ['Bayern Munich', '@FCBayern'],
  ['TSG 1899 Hoffenheim', '@TsgHoffenheim'],
  ['Bayer 04 Leverkusen', '@Bayer04_en'],
  ['FC Bayern Munich', '@FCBayern'],
  ['VfB Stuttgart', '@VfBStuttgart'],
  ['VfL Wolfsburg', '@VfL_Wolfsburg'],
  ['SV Werder Bremen', '@werderbremen'],
  ['1. FSV Mainz 05', '@Mainz05'],
  ['FC Augsburg', '@FCAugsburg'],
  ['SC Freiburg', '@scfreiburg'],
  ['Borussia Mönchengladbach', '@borussia'],
  ['Eintracht Frankfurt', '@Eintracht'],
  ['1. FC Union Berlin', '@fcunionberlin'],
  ['VfL Bochum 1848', '@VfLBochum'],
  ['1. FC Heidenheim 1846', '@FCHeidenheim'],
  ['SV Darmstadt 98', '@sv98darmstadt'],
  ['RB Leipzig', '@RBLeipzig'],
  ['Toulouse FC', '@ToulouseFC'],
  ['Stade Brestois 29', '@StadeBrestois'],
  ['Olympique de Marseille', '@OlympiqueDeMarseille'],
  ['Montpellier HSC', '@MontpellierHSC'],
  ['Lille OSC', '@LOSC'],
  ['OGC Nice', '@ogcnice'],
  ['Olympique Lyonnais', '@OL'],
  ['Paris Saint-Germain FC', '@PSG'],
  ['FC Lorient', '@FC_Lorient'],
  ['Stade Rennais FC 1901', '@StadeRennais'],
  ['Le Havre AC', '@LeHavreAC'],
  ['Clermont Foot 63', '@ClermontFoot'],
  ['FC Nantes', '@FCNantes'],
  ['FC Metz', '@FCMetz'],
  ['Racing Club de Lens', '@RCLens'],
  ['Stade de Reims', '@Stade_de_Reims'],
  ['AS Monaco FC', '@ASMonaco'],
  ['RC Strasbourg Alsace', '@RCSA'],
  ['AC Milan', '@acmilan'],
  ['ACF Fiorentina', '@ACFiorentina'],
  ['AS Roma', '@OfficialASRoma'],
  ['Atalanta BC', '@Atalanta_BC'],
  ['Bologna FC 1909', '@BolognaFC1909'],
  ['Cagliari Calcio', '@CagliariCalcio'],
  ['Genoa CFC', '@GenoaCFC'],
  ['FC Internazionale Milano', '@Inter'],
  ['Juventus FC', '@juventus'],
  ['US Lecce', '@USLecce'],
  ['AC Monza', '@ACMonza'],
  ['Athletic Club', '@AthleticClub'],
  ['Club Atlético de Madrid', '@AtleticoMadrid'],
  ['CA Osasuna', '@CAOsasuna'],
  ['FC Barcelona', '@FCBarcelona'],
  ['Getafe CF', '@GetafeCF'],
  ['Granada CF', '@GranadaCFC'],
  ['Real Madrid CF', '@RealMadrid'],
  ['Rayo Vallecano de Madrid', '@RayoVallecano'],
  ['RCD Mallorca', '@RCD_Mallorca'],
  ['Real Betis Balompié', '@RealBetis'],
  ['Real Sociedad de Fútbol', '@RealSociedad'],
  ['Villarreal CF', '@VillarrealCF'],
  ['Valencia CF', '@ValenciaCF'],
  ['Deportivo Alavés', '@Alaves'],
  ['Cádiz CF', '@CadizCF'],
  ['UD Almería', '@UDAlmeria'],
  ['UD Las Palmas', '@UDLP'],
  ['Girona FC', '@GironaFC'],
  ['RC Celta de Vigo', '@RCCelta'],
  ['Sevilla FC', '@SevillaFC'],
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
      matches.push(team[1]);
    } else if (smallname.includes(lowerStr)) {
      matches.push(team[1]);
    } else if (matches.length >= 1) {
      const split = team[1].split(' ');
      split.forEach((token) => {
        const splitmatch = distance(str, token);
        if (splitmatch <= 3 && !matches.includes(team[1])) {
          closeMatches.push(team[1]);
        }
      });
    }
  });

  const othermatches = closestMatch(str, teamLong, true);
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
