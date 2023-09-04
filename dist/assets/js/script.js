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

import {Tab} from 'bootstrap';

const leagues = document.querySelectorAll('#scrolsLeague>div');
const leagueArray = [1, 2, 3, 4];
leagueArray.forEach((league, index) => {
  const team = document.createElement('ul');
  team.classList.add('flex justify-between items-center font-medium px-8 py-4');
  team.innerHTML = `<li>${index + 1}</li>
    <li class="flex items-center justify-start gap-5 w-52"><img
            class="object-contain h-10" src="">
    </li>
    <li>14</li>
    <li>3</li>
    <li>1</li>
    <li>45</li>
    <li class="flex w-32 justify-evenly"><svg style="fill: green;"
            xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
        </svg> <svg style="fill: green;" xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 512 512">
            <path
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
        </svg> <svg style="fill: green;" xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 512 512">
            <path
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
        </svg> <svg style="fill: green;" xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 512 512">
            <path
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
        </svg> <svg style="fill: green;" xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 512 512">
            <path
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
        </svg>
    </li>`;
  /* 
  const tab = document.querySelector('#L1');
  console.log(tab);
  tab.innerHTML('aaezaeaz');
  tab.appendChild(team); */
});
