// Automatische fotoslider
// var counter = 1;
// setInterval(function () {
//     document.getElementById("radio" + counter).checked = true;
//     counter++;
//     if (counter > 4) {
//         counter = 1;
//     }
// }, 5000)

// Login systeem
function show() {
    var show = document.getElementById("container_logIn");
    if (show.style.display == "block") {
        show.style.display = "none";
    }
    else {
        show.style.display = "block";
    }
}

// Trending Games Filters
let allTrendingGames = document.getElementsByClassName("trending_card");
// let filters = document.getElementsByClassName("filter_trending_cards");

let sandbox_filter = document.getElementById("checkbox-sandbox");
sandbox_filter.onchange = function () {
    if (sandbox_filter.checked === true) {
        for (let i = 0; i < allTrendingGames.length; i++) {
            if (allTrendingGames[i].dataset.category === "sandbox");
            allTrendingGames[i].style.display = "block";
        }
    }
    else {
        for (let i = 0; i < allTrendingGames.length; i++) {
            if (allTrendingGames[i].dataset.category === "sandbox") {
                allTrendingGames[i].style.display = "none";
            }
        }
    }
}

let coöp_filter = document.getElementById("checkbox-co-op");
coöp_filter.onchange = function () {
    if (coöp_filter.checked === true) {
        for (let i = 0; i < allTrendingGames.length; i++) {
            if (allTrendingGames[i].dataset.category === "co-op") {
                allTrendingGames[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allTrendingGames.length; i++) {
            if (allTrendingGames[i].dataset.category === "co-op") {
                allTrendingGames[i].style.display = "none";
            }
        }
    }
}

let role_play = document.getElementById("checkbox-role-play");
role_play.onchange = function () {
    if (role_play.checked === true) {
        for (let i = 0; i < allTrendingGames.length; i++) {
            if (allTrendingGames[i].dataset.category === "role-play")
                allTrendingGames[i].style.display = "block";
        }
    }
    else {
        for (let i = 0; i < allTrendingGames.length; i++) {
            if (allTrendingGames[i].dataset.category === "role-play") {
                allTrendingGames[i].style.display = "none";
            }
        }
    }
}


// Game Filters
let allGames = document.getElementsByClassName("");
let sandbox = document.getElementById("");
sandbox.onchange = function () {
    if (sandbox.checked === true) {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === "sandbox") {
                allGames[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === "sandbox") {
                allGames[i].style.display = "none";
            }
        }
    }
}