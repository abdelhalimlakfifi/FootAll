const searchInput = document.getElementById('default-search');





// Had function ghi dial Comparaison USELESS MSeee7hom mni tsali
function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}


//HTA HADI // Had function ghi dial Comparaison USELESS MSeee7hom mni tsali
function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}


searchInput.addEventListener('input', function () {

    let suggestions = document.getElementById('suggestion');


    // Teams for Test
    let teams = ['Raja', 'Koukab', 'chabab mo7amadia', 'Real Madrid', 'Barca', 'Widad', 'Meghrib', 'real sociedad', 'Athletico Madrid' , 'Khizo', 'Btata'];

    if (searchInput.value != '' || searchInput.value == null) {



        // filter bash nreturn tems dial recherche
        let results = teams.filter((res) => { 
            return similarity(searchInput.value, res) > 0.2 ;
        })


        suggestions.innerHTML = '';

        results.forEach((res) =>{
            let newElemnt = document.createElement('div');
            newElemnt.innerHTML = `
            <div class="cursor-pointer py-2 px-3 hover:bg-slate-100">
                <p class="text-sm font-medium text-gray-600">${res}</p>
            </div>
            `
            suggestions.appendChild(newElemnt);
        })

        
        suggestions.classList.remove('hidden');


    } else {
        suggestions.classList.add('hidden');
    }
})