'use strict';

let seconds = 300;

let minutes = Math.floor(seconds / 60),
    secs = seconds % 60;

let p1Time = seconds - 1;
let p2Time = seconds - 1;

let currPlayer = 0;

const timerCard1 = document.querySelector('.timer1');
const timerCard2 = document.querySelector('.timer2');

const timer1 = document.querySelector('.p1-timer');
timer1.textContent = minutes + ":0" + secs;

const timer2 = document.querySelector('.p2-timer');
timer2.textContent = minutes + ":0" + secs;

timerCard1.classList.add("green");
timerCard1.classList.remove("white");
timerCard2.classList.add("white");
timerCard2.classList.remove("green");

let button = document.querySelector('.start-stop');
let buttonPress = 0;

// let center = document.querySelector(".center-screen");
// let h1 = document.querySelector("h1");

// const mq = window.matchMedia( "(min-width: 2559px)" );

// window.onresize = uncenter;

// function uncenter() {
//     if (mq.matches) {
//         console.log("big");
//         center.className = 'container';
//         h1.classList.add("pt-5");
//     } else {
//         console.log("small");
//         location.reload();
//     }
// }


function startTimer() {
    console.log("timer started");
    if (buttonPress == 0) {
        let countDown = setInterval(function () {
        onesec();   
    }, 1000);
        buttonswap();
        buttonPress += 1;
    } else {
        buttonswap();
    }
    button.disabled = true;
    button.disabled = false;
}


document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        currPlayer = !currPlayer;
        if (!currPlayer) {
            timerCard1.classList.add("green");
            timerCard1.classList.remove("white");
            timerCard2.classList.add("white");
            timerCard2.classList.remove("green");
        } else {
            timerCard1.classList.add("white");
            timerCard1.classList.remove("green");
            timerCard2.classList.add("green");
            timerCard2.classList.remove("white");
        }
    }
    
});

button.addEventListener("click", startTimer);

function buttonswap() {
    if (button.textContent === "Pause") {
        button.textContent = "Resume";
    } else {
        button.textContent = "Pause";
    }
}

function onesec() {
    if (button.textContent == "Resume") {
        clearInterval(countDown);
    }
    if (!currPlayer) {
        let min1 = Math.floor(p1Time / 60),
        remainingSec1 = p1Time % 60;
        
        if (remainingSec1 < 10) {
            remainingSec1 = '0' + remainingSec1;
        }

        timer1.innerHTML = min1 + ":" + remainingSec1;
        
        if (p1Time > 0) {
            p1Time = p1Time - 1;
        } else {
            clearInterval(countDown);
            timer1.innerHTML = 'time out';
        }
    } else {
        let min2 = Math.floor(p2Time / 60),
            remainingSec2 = p2Time % 60;

        if (remainingSec2 < 10) {
            remainingSec2 = '0' + remainingSec2;
        }

        timer2.innerHTML = min2 + ":" + remainingSec2;

        if (p2Time > 0) {
            p2Time = p2Time - 1;
        } else {
            clearInterval(countDown);
            timer2.innerHTML = 'time out';
        }
    }
}
