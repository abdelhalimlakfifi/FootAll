import dom from './dom.js';
import focusedTeam from './dom.js';

const home = document.querySelector('#homeLogo');
const away = document.querySelector('#awayLogo');
const matchDate = document.querySelector('#matchDate');
const hour = document.querySelector('#hour');
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

function getPosition(position) {
    if (position === 'Goalkeeper') {
        return 'GK';
    }
    if (position === 'Defence') {
        return 'D';
    }
    if (position === 'Midfield') {
        return 'M';
    }
    if (position === 'Offence') {
        return 'F';
    }
}

function getPlayers(shortName) {
    let gkCount = 0,
        defCount = 0,
        cmCount = 0,
        forwardCount = 0;
    let team = [];
    let bench = [];

    currentTeam[shortName].squad.forEach((player) => {
        if (gkCount < 1) {
            if (player.position === 'Goalkeeper') {
                team.push(player);
                gkCount++;
            }
        }
        if (gkCount == 1) {
            if (player.position === 'Goalkeeper' && !team.includes(player)) {
                bench.push(player);
                gkCount++;
            }
        }
        if (defCount < 4) {
            if (player.position === 'Defence') {
                team.push(player);
                defCount++;
            }
        }
        if (defCount < 6 && defCount >= 4 && !team.includes(player)) {
            if (player.position === 'Defence') {
                bench.push(player);
                defCount++;
            }
        }
        if (cmCount < 4) {
            if (player.position === 'Midfield') {
                team.push(player);
                cmCount++;
            }
        }
        if (cmCount < 6 && cmCount >= 4 && !team.includes(player)) {
            if (player.position === 'Midfield') {
                bench.push(player);
                cmCount++;
            }
        }
        if (forwardCount < 2) {
            if (player.position === 'Offence') {
                team.push(player);
                forwardCount++;
            }
        }
        if (forwardCount >= 2 && forwardCount < 4 && !team.includes(player)) {
            if (player.position === 'Offence') {
                bench.push(player);
                forwardCount++;
            }
        }
    });

    return [team, bench];
}

let slugTeam = decodeURI(window.location.href.split('?team=')[1]);

const currentTeam = focusedTeam[0];

let baseurl = 'http://localhost:3000/';
const divisions = ['PL', 'PD', 'SA', 'BL1', 'FL1'];
const urlTeams = [];
var distance = function (a, b) {
    var _a;
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    if (a.length > b.length)(_a = [b, a]), (a = _a[0]), (b = _a[1]);
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

const nextMonth = () => {
    const now = new Date();
    now.setDate(now.getDate() + 160);
    return now.toISOString().split('T')[0];
};
const now = new Date().toISOString().split('T')[0];

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
    return matches;
}

async function fetchTeams(url) {
    const options = {
        method: 'GET',
        headers: {
            'X-Auth-Token': '8e1f84010b5348ccb90fa14f6070bbde',
            'Access-Control-Allow-Origin': '*',
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
}

class Team {
    constructor(logo, name, stadium, id, coach, squad) {
        this.logo = logo;
        this.name = name;
        this.stadium = stadium;
        this.id = id;
        this.coach = coach;
        this.squad = squad;
    }
    getId() {
        return this.id;
    }
}

divisions.forEach((division) => {
    let newurl = baseurl + 'competitions/' + division + '/teams';
    urlTeams.push(newurl);
});

const teams = {};

// get all teams from top 5 leagues

/* urlTeams.forEach((url, index) => {
  fetchTeams(url).then((resulted) => {
    let result = JSON.parse(resulted);
    result.teams.forEach((team) => {
      const newteam = new Team(
        team.crest,
        team.name,
        team.venue,
        team.id,
        team.coach,
        team.squad
      );
      teams[team.shortName] = newteam;
      teamShort.push(team.shortName);
      arr.push([team.name, team.shortName]);
    });
    console.log(arr);
  });
}); */

// fetch user from twitter using keyword
async function fetchTwitter() {
    const url = `https://twitter135.p.rapidapi.com/v2/UserByScreenName/?username=${removeSpaces(
    slugTeam
  )}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0013b9b2c2mshab8a6f847a49d05p10a33djsn3e9c44cbae9c',
            'X-RapidAPI-Host': 'twitter135.p.rapidapi.com',
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
}


var isError = false;
//fetch game using id from api
async function fetchMatch(id) {
    let matchurl =
        baseurl +
        'teams/' +
        id +
        '/matches/?dateFrom=' +
        now +
        '&dateTo=' +
        nextMonth();
    fetchTeams(matchurl).then((response) => {
        let res = JSON.parse(response);
        const match = res.matches[0];

        let date = new Date(match.utcDate);
        let playHour = date.toTimeString().split(' ')[0];
        //GET PLAYERS
        
        document.getElementById('teamOneName').src = match.homeTeam.crest;

        // document.getElementById('teamTwoName').innerHTML = match.awayTeam.name;
        document.getElementById('teamTwoName').src = match.awayTeam.crest;
        document.getElementById('teamOneManager').innerHTML =
            currentTeam[match.homeTeam.shortName].coach.name;
        document.getElementById('teamTwoManager').innerHTML =
            currentTeam[match.awayTeam.shortName].coach.name;
        //BENCH

        document.getElementById('teamOneNameSub').src = match.homeTeam.crest;
        document.getElementById('teamTwoNameSub').src = match.awayTeam.crest;

        getPlayers(match.homeTeam.shortName)[1].forEach((el) => {
            let newPlayer = document.createElement('div');
            newPlayer.style.margin = '0.5rem 0rem 0.5rem 0rem';
            newPlayer.innerHTML += `<p class="text-sm flex gap-4">
                                    <span class="text-[#096A00] font-bold w-6">${getPosition(
                                      el.position
                                    )}</span>
                                    <span class="font-[500]">${el.name}</span>
                                </p>`;
            document.getElementById('team_1_sub').appendChild(newPlayer);
        });

        getPlayers(match.awayTeam.shortName)[1].forEach((el) => {
            let newPlayer = document.createElement('div');
            newPlayer.style.margin = '0.5rem 0rem 0.5rem 0rem';
            newPlayer.innerHTML += `<p class="text-sm flex gap-4">
                                    <span class="text-[#096A00] font-bold  w-6">${getPosition(
                                        el.position
                                    )}</span>
                                    <span class="font-[500]">${el.name}</span>
                                </p>`;
            document.getElementById('team_2_sub').appendChild(newPlayer);
        });
        //BENCH
        let teamOneContainer = document.getElementById('team_1_lineUp');
        let teamTwoContainer = document.getElementById('team_2_lineUp');
        getPlayers(match.homeTeam.shortName)[0].forEach((el) => {
            let newPlayer = document.createElement('div');
            newPlayer.style.margin = '0.5rem 0rem 0.5rem 0rem';
            newPlayer.innerHTML += `<p class="text-sm flex gap-4">
                                <span class="text-[#096A00] font-bold  w-6">${getPosition(
                                  el.position
                                )}</span>
                                <span class="font-[500]">${el.name}</span>
                            </p>`;
            document.getElementById('team_1_lineUp').appendChild(newPlayer);
        });

        getPlayers(match.awayTeam.shortName)[0].forEach((el) => {
            let newPlayer = document.createElement('div');
            newPlayer.style.margin = '0.5rem 0rem 0.5rem 0rem';
            newPlayer.innerHTML += `<p class="text-sm flex gap-4">
                                <span class="text-[#096A00] font-bold  w-6">${getPosition(
                                el.position
                                )}</span>
                                <span class="font-[500]">${el.name}</span>
                            </p>`;
            document.getElementById('team_2_lineUp').appendChild(newPlayer);
        });
        home.src = match.homeTeam.crest;
        away.src = match.awayTeam.crest;
        let formatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        matchDate.innerHTML = date.toLocaleDateString('en-US', formatOptions);
        hour.innerHTML = playHour;
        let lastUrl = baseurl + 'matches/' + match.id + '/head2head/';
        fetchTeams(lastUrl).then((previous) => {
            let getprev = JSON.parse(previous);
            getprev.matches.forEach((match) => {
                let date = new Date(match.utcDate);
                let playHour = date.toLocaleDateString('en-US', formatOptions);
                let matchContainer = document.createElement('div');
                matchContainer.className = 'matchContainer';
                matchContainer.innerHTML = `
                    <p class="text-center font-bold pt-4">
                         ${playHour}
                    </p>
                    <div class="flex justify-between pb-7 mx-20">
                         <div class="flex gap-8">
                              <p class="flex items-center font-rubik font-bold">${match.homeTeam.shortName}</p>
                              <img src="${match.homeTeam.crest}" class="w-20 h-fit" alt="" />
                         </div>
                         <div class="flex">
                              <p class="mt-5 font-bold text-3xl tracking-[1.25rem]">${match.score.fullTime.home}-${match.score.fullTime.away}</p>
                         </div>
     
                         <div class="flex gap-8">
                              <img src="${match.awayTeam.crest}" class="w-20 h-fit" alt="" />
                              <p class="flex items-center font-rubik font-bold">${match.awayTeam.shortName}</p>
                         </div>
                    </div>
     `;

                document
                    .getElementById('matches_container')
                    .appendChild(matchContainer);
            });
        });
    }).catch(() => {
        isError = true;
        document.getElementById('loader').innerHTML = `
            <div class=" m-[15rem]">
                <img src="https://media2.giphy.com/media/co5nmPivPa42vv6IVm/giphy.gif?cid=ecf05e47feibba0qhokzjqquy045ex8zrsgc3ti6htxmoges&ep=v1_gifs_search&rid=giphy.gif&ct=g" class=" h-[26rem]" />
                <h3 class="text-center text-3xl">Too many Request (10Calls/minute)</h3>
            </div>
        `;
    });
}

function smallName(bigName) {
    for (let i of teamNames) {
        if (i[1] === bigName) {
            return i[0];
        }
    }
}

const focused = smallName(slugTeam);

fetchMatch(currentTeam[focused].id)


window.addEventListener('load', function () {
    if(!isError){

        setTimeout(()=>{document.getElementById('loader').style.display = "none";},2000);
        
    }
})