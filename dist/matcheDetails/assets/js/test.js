const divisions = ['PL', 'PD', 'SA', 'BL1', 'FL1'];
const urlTeams = [];
let baseurl = 'https://api.football-data.org/v4';
divisions.forEach((division) => {
  let newurl = baseurl + '/competitions/' + division + '/teams';
  urlTeams.push(newurl);
});

const options = {
  method: 'GET',
  headers: {
    'X-Auth-Token': '8e1f84010b5348ccb90fa14f6070bbde',
    'Access-Control-Allow-Origin': '*',
  },
};

async function fetchTeams(url) {
  const result = await fetch(url, options);
  const response = result.json();

  return response;
}

const teams = [];

urlTeams.forEach((url) => {
  fetchTeams(url).then((response) => {
    response.teams.forEach((team) => {
      teams.push(team.shortName);
    });
    if (teams.length > 80) {
      console.log(teams);
    }
  });
});
