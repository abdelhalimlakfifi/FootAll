//filling matches section
/*
const container = document.querySelector("#matches");
const match = document.createElement('ul');

match.classList.add('flex justify-evenly items-center pt-3 text-slate-500 font-normal');

match.innerHTML = `
<li class="flex items-center justify-between w-80">
    <img class="object-contain h-10" src="${match.homeTeam.crest}">${match.homeTeam.name} <span>VS</span>
    <img
        class="object-contain h-10" src="${match.awayTeam.crest}" alt="">${match.awayTeam.name}
</li>
<li class="flex items-center justify-between w-24">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
        <path
            d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
    </svg> 5:00 PM
</li>
<li class="flex items-center justify-between w-24"><svg xmlns="http://www.w3.org/2000/svg"
        height="1em" viewBox="0 0 384 512">
        <path
            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </svg> ${match.homeTeam.address}
</li>
<li class="flex items-center justify-between w-24">
    <svg xmlns="http://www.w3.org/2000/svg"
    height="1em" id="likeBtn" class="cursor-pointer" viewBox="0 0 512 512">
        <path
        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
        class="fill-gray-400" />
    </svg>
</li>
<li>
    <a class="flex items-center justify-between w-32" href="#">View Details
        <svg
            xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path
                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                fill="gray" />
        </svg>
    </a>
</li>`;
    container.appendChild(match);
*/
// filling leagues tables
let win = `<svg height="100" width="100">
<circle cx="50" cy="50" r="6" stroke="black" stroke-width="1" fill="green" />

</svg> `;

let lose = `<svg height="100" width="100">
<circle cx="50" cy="50" r="6" stroke="black" stroke-width="1" fill="red" />

</svg> `;
let draw = `<svg height="100" width="100">
<circle cx="50" cy="50" r="6" stroke="black" stroke-width="1" fill="grey" />

</svg> `;

//import { Tab } from 'bootstrap';
let baseurl = 'http://localhost:3000/';
const leagues = document.querySelectorAll('#myTab>li>button');
let l = [5, 4, 3, 2, 1, 2, 3, 4, 5];
const divisions = ['PL', 'PD', 'SA', 'BL1', 'FL1'];

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
const tables = document.querySelectorAll('#scrolsLeague>div');
fetchTeams(baseurl + 'competitions/SA/standings').then((result) => {
  tables.forEach((table, index) => {
    if ('SA' === table.id) {
      i = index;
    }
  });
  console.log(JSON.parse(result));
  JSON.parse(result).standings[0].table.forEach((x, index) => {
    const team = document.createElement('ul');
    team.classList.add('flex');
    team.classList.add('py-4');
    team.classList.add('px-8');
    team.classList.add('font-medium');
    team.classList.add('items-center');
    team.classList.add('justify-between');
    team.innerHTML = `<li>${index + 1}</li>
        <li class="flex items-center justify-start gap-5 w-52"><img
                class="object-contain h-10" src="${x.team.crest} "> ${
      x.team.shortName
    }
        </li>
        <li>${x.won}</li>
        <li>${x.draw}</li>
        <li>${x.lost}</li>
        <li>${x.points}</li>
        <li class="flex w-32 justify-evenly">
        ${x.goalsFor} | ${x.goalsAgainst} | ${x.goalDifference}
        </li>`;
    tables[i].appendChild(team);
  });
});

leagues.forEach((league) => {
  league.addEventListener('click', (e) => {
    var i;
    console.log(e.currentTarget.dataset.id);
    var leagueId = league.id.split('-')[0];
    tables.forEach((table, index) => {
      if (leagueId === table.id) {
        i = index;
      }
    });

    fetchTeams(baseurl + 'competitions/' + leagueId + '/standings').then(
      (result) => {
        console.log(JSON.parse(result));
        JSON.parse(result).standings[0].table.forEach((x, index) => {
          const team = document.createElement('ul');
          team.classList.add('flex');
          team.classList.add('py-4');
          team.classList.add('px-8');
          team.classList.add('font-medium');
          team.classList.add('items-center');
          team.classList.add('justify-between');
          team.innerHTML = `<li>${index + 1}</li>
          <li class="flex items-center justify-start gap-5 w-52"><img
                  class="object-contain h-10" src="${x.team.crest} "> ${
            x.team.shortName
          }
          </li>
          <li>${x.won}</li>
          <li>${x.draw}</li>
          <li>${x.lost}</li>
          <li>${x.points}</li>
          <li class="flex w-32 justify-evenly">
          ${x.goalsFor} | ${x.goalsAgainst} | ${x.goalDifference}
          </li>`;
          tables[i].appendChild(team);
        });
      }
    );
  });
});
