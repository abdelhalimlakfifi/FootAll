const lineUp = {
    "Team 1": [
        {
            "name":"player 1",
            "position":"GK"
        },

        {
            "name":"player 2",
            "position":"GK"
        },

        {
            "name":"player 3",
            "position":"GK"
        },

        {
            "name":"player 4",
            "position":"GK"
        },

        {
            "name":"player 5",
            "position":"GK"
        },

        {
            "name":"player 6",
            "position":"GK"
        },
        {
            "name":"player 7",
            "position":"GK"
        },{
            "name":"player 8",
            "position":"GK"
        },{
            "name":"player 9",
            "position":"GK"
        },{
            "name":"player 10",
            "position":"GK"
        },{
            "name":"player 11",
            "position":"GK"
        },
    ],
    "Team 2": [
        {
            "name":"player 1",
            "position":"GK"
        },

        {
            "name":"player 2",
            "position":"GK"
        },

        {
            "name":"player 3",
            "position":"GK"
        },

        {
            "name":"player 4",
            "position":"GK"
        },

        {
            "name":"player 5",
            "position":"GK"
        },

        {
            "name":"player 6",
            "position":"GK"
        },
        {
            "name":"player 7",
            "position":"GK"
        },{
            "name":"player 8",
            "position":"GK"
        },{
            "name":"player 9",
            "position":"GK"
        },{
            "name":"player 10",
            "position":"GK"
        },{
            "name":"player 11",
            "position":"GK"
        },
    ]
}

document.getElementById('teamOneName').innerHTML = "Team 1";
document.getElementById('teamTwoName').innerHTML = "Team 2";



document.getElementById('teamOneManager').innerHTML = "Some One";
document.getElementById('teamTwoManager').innerHTML = "Some One";

let teamOneContainer = document.getElementById('team_1_lineUp');
let teamTwoContainer = document.getElementById('team_2_lineUp');


lineUp["Team 1"].forEach((el) => {
    let newPlayer = document.createElement("div");
    newPlayer.style.margin = "0.5rem 2.5rem 0.5rem 2.5rem";
    newPlayer.innerHTML += `<p class="text-sm">
                                <span class="text-[#096A00] font-bold">${el.position}</span>
                                <span class="font-[500]">${el.name}</span>
                            </p>`
    document.getElementById('team_1_lineUp').appendChild(newPlayer)
});



lineUp["Team 2"].forEach((el) => {
    let newPlayer = document.createElement("div");
    newPlayer.style.margin = "0.5rem 2.5rem 0.5rem 2.5rem";
    newPlayer.innerHTML += `<p class="text-sm ">
                                <span class="font-[500]">${el.name}</span>
                                <span class="text-[#096A00] font-bold">${el.position}</span>
                            </p>`
    document.getElementById('team_2_lineUp').appendChild(newPlayer)
});





const sub = {
    "Team 1": [
        {
            "name":"player 1",
            "position":"GK"
        },

        {
            "name":"player 2",
            "position":"GK"
        },

        {
            "name":"player 7",
            "position":"GK"
        },{
            "name":"player 8",
            "position":"GK"
        },{
            "name":"player 9",
            "position":"GK"
        },{
            "name":"player 10",
            "position":"GK"
        },{
            "name":"player 11",
            "position":"GK"
        },
    ],
    "Team 2": [
        {
            "name":"player 1",
            "position":"GK"
        },

        {
            "name":"player 2",
            "position":"GK"
        },

        {
            "name":"player 3",
            "position":"GK"
        },

        {
            "name":"player 4",
            "position":"GK"
        },

        {
            "name":"player 5",
            "position":"GK"
        },

        {
            "name":"player 6",
            "position":"GK"
        }
    ]
}


document.getElementById('teamOneNameSub').innerHTML = "Team 1";
document.getElementById('teamTwoNameSub').innerHTML = "Team 2";

sub["Team 1"].forEach((el) => {
    let newPlayer = document.createElement("div");
    newPlayer.style.margin = "0.5rem 2.5rem 0.5rem 2.5rem";
    newPlayer.innerHTML += `<p class="text-sm">
                                <span class="text-[#096A00] font-bold">${el.position}</span>
                                <span class="font-[500]">${el.name}</span>
                            </p>`
    document.getElementById('team_1_sub').appendChild(newPlayer);
});


sub["Team 2"].forEach((el) => {
    let newPlayer = document.createElement("div");
    newPlayer.style.margin = "0.5rem 2.5rem 0.5rem 2.5rem";
    newPlayer.innerHTML += `<p class="text-sm ">
                                <span class="font-[500]">${el.name}</span>
                                <span class="text-[#096A00] font-bold">${el.position}</span>
                            </p>`
    document.getElementById('team_2_sub').appendChild(newPlayer)
});