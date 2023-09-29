'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let timer = document.querySelector(".timer")
let fire = document.querySelector("#firing-button")
let rocket = document.querySelector("#rocket")
let cancel = document.querySelector("#cancel-button")
let body = document.body
/********************   ***************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/


function reverse10() {
    let i = 10
    let interval = setInterval(function() {
        timer.textContent = i
        i--
        if (i < 0) {
            clearInterval(interval)
            launch();
        }
    }, 1000)
    fire.classList.add("disabled")
    rocket.src = "images/rocket2.gif"
}

function launch() {
    rocket.src = "images/rocket3.gif"
    rocket.classList.add("tookOff")
}

function cancelling() {
    fire.classList.remove("disabled")
    rocket.classList.remove("tookOff")
    rocket.src = "images/rocket1.png"
    timer.textContent = ""

}


for (var i = 0; i < 1000; i++) {
    var star = document.createElement("div");
    star.classList.add("star");
    star.classList.add("tiny");
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    body.appendChild(star);
}


for (var i = 0; i < 1000; i++) {
    var star = document.createElement("div");
    star.classList.add("star");
    star.classList.add("big");
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    body.appendChild(star);
}

for (var i = 0; i < 1000; i++) {
    var star = document.createElement("div");
    star.classList.add("star");
    star.classList.add("normal");
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    body.appendChild(star);
}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
fire.addEventListener("click", reverse10)
cancel.addEventListener("click",cancelling)