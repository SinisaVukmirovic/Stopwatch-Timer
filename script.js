// creating timer variable
let timer;

// creating variable for seconds, minutes and hours
let secs = 0, mins = 0, hours = 0;

// getting the buttons
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');

let lapBtn = document.getElementById('lap-btn');
let lapTime = document.getElementById('lap-time');

let timerDisplay = document.getElementById('timer');

startBtn.addEventListener('click', () => {
    timer = setInterval(timerHandler, 1000);
    resetBtn.disabled = false;
    startBtn.disabled = true;
});

pauseBtn.addEventListener('click', () => {
    timer = clearInterval(timer);
    resetBtn.disabled = false;
    startBtn.disabled = false;
});

resetBtn.addEventListener('click', () => {
    timer = clearInterval(timer);
    resetBtn.disabled = true;
    startBtn.disabled = false;
    secs = 0;
    mins = 0;
    hours = 0;
    timerDisplay.innerHTML = `<em>00:00:00</em>`;
});

lapBtn.addEventListener('click', () => {
    lapTime.innerText = timerDisplay.innerText;
});

function timerHandler() {
    secs++;

    if (secs === 60) {
        secs = 0;
        mins++;
    }
    if (mins === 60) {
        mins = 0;
        hours++;
    }

    displayTime();
}

function displayTime() {

    // adding zero in front of one digit numbers
    let zeroSecs = secs;
    let zeroMins = mins;
    let zeroHours = hours;

    if (secs < 10) {
        zeroSecs = `0${secs}`;
    }
    if (mins < 10) {
        zeroMins = `0${mins}`;
    }
    if (hours < 10) {
        zeroHours = `0${hours}`;
    }

    timerDisplay.innerHTML = `<em>${zeroHours}:${zeroMins}:${zeroSecs}</em>`;
}

