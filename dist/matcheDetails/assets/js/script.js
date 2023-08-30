import focusedTeam from './dom.js';

const home = document.querySelector('#homeLogo');
const away = document.querySelector('#awayLogo');
const matchDate = document.querySelector('#matchDate');
const hour = document.querySelector('#hour');

const currentTeam = focusedTeam[0];
let baseurl = 'https://api.football-data.org/v4/';
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
          vals.push((0, distance_1.distance)(target, array[i]));
     var min = Math.min.apply(Math, vals);
     for (var i = 0; i < vals.length; i++) {
          if (vals[i] === min) found.push(array[i]);
     }
     return showOccurrences ? found : found[0];
};
const options = {
     method: 'GET',
     headers: {
          'X-Auth-Token': '8e1f84010b5348ccb90fa14f6070bbde',
          'Access-Control-Allow-Origin': '*',
     },
};

const nextWeek = () => {
     const now = new Date();
     now.setDate(now.getDate() + 7);
     return now.toISOString().split('T')[0];
};

/* const home = document.querySelector('#homeLogo');
const away = document.querySelector('#awayLogo'); */

const now = new Date().toISOString().split('T')[0];

function getMatch(str) {
     const matches = [];
     const closeMatches = [];
     teamNames.forEach((team) => {
          let bigname = team[0].toLowerCase();
          let smallname = team[1].toLowerCase();
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
     try {
          const response = await fetch(url, options);
          const result = await response.json();
          return result;
     } catch (error) {
          console.error(error);
     }
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
     let newurl =
          'https://api.football-data.org/v4/competitions/' + division + '/teams';
     urlTeams.push(newurl);
});

let url = 'https://api.football-data.org/v4/competitions/PD/teams';

const teams = {};

// get all teams from top 5 leagues

/* urlTeams.forEach((url, index) => {
  fetchTeams(url).then((result) => {
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
    });
  });
});
 */

function fetchMatch(id) {
     let matchurl =
          baseurl +
          'teams/' +
          id +
          '/matches/?dateFrom=' +
          now +
          '&dateTo=' +
          nextWeek();
     fetchTeams(matchurl)
          .then((response) => {
               const match = response.matches[0];
               let date = new Date(match.utcDate);
               let playHour = date.toTimeString().split(' ')[0];

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
               let lastUrl = baseurl + 'matches/' + match.id + '/head2head';
               return lastUrl;
          })
          .then((response1) => {
               console.log(response1);
               fetchTeams(response1).then((games) => {
                    console.log(games);
               });
          });
}

// fetchMatch(currentTeam['Man City'].id);


[1,2,3].forEach((match) => {

     let matchContainer = document.createElement("div");
     matchContainer.className = "matchContainer"
     console.log(document.getElementById('matches_container').innerHTML);
     matchContainer.innerHTML = `
                    <p class="text-center font-bold pt-4">
                         Tuesday, August 29, 2023 at 19:45
                    </p>
                    <div class="flex justify-between pb-7 mx-20">
                         <div class="flex gap-8">
                              <p class="flex items-center font-rubik font-bold">Ny Yorks</p>
                              <img src="./teamLogo/team_1.png" class="w-20 h-fit" alt="" />
                         </div>
                         <div class="flex">
                              <p class="mt-5 font-bold text-3xl tracking-[1.25rem]">1-3</p>
                         </div>
     
                         <div class="flex gap-8">
                              <img src="./teamLogo/team_2.png" class="w-20 h-fit" alt="" />
                              <p class="flex items-center font-rubik font-bold">Ny Yorks</p>
                         </div>
                    </div>
     `
     
     console.log(matchContainer);
     document.getElementById('matches_container').appendChild(matchContainer)
})



