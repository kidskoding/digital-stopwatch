let interval;
let ticking = false;

let currentMilliseconds = 0;
let currentSeconds = 0;
let currentMinutes = 0;

document.addEventListener('DOMContentLoaded', function() {
    const startStopButton = document.getElementById('startStopButton');
    startStopButton.addEventListener('click', function() {
        if(ticking) {
            clearInterval(interval);
            startStopButton.innerText = 'Start';
        } else {
            interval = setInterval(updateTime, 10);
            startStopButton.innerText = 'Stop';
        }
        ticking = !ticking;
    });
});

function updateTime() {
    currentMilliseconds += 10;
    if(currentMilliseconds === 1000) {
        currentMilliseconds = 0;
        currentSeconds += 1;
        if(currentSeconds === 60) {
            currentSeconds = 0;
            currentMinutes++;
        }
    }
    updateDisplay();
}   

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = `${padNumber(currentMinutes)}:${padNumber(currentSeconds)}:${padNumber(currentMilliseconds / 10)}`;
}

function padNumber(number) {
    return number.toString().padStart(2, '0');
}