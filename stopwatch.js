let currentMilliseconds = 0;
let currentSeconds = 0;
let currentMinutes = 0;

let interval;
let ticking = false;
let lap = 1;

document.addEventListener('DOMContentLoaded', function() {
    const startStopButton = document.getElementById('startStopButton');
    const lapButton = document.getElementById('lapButton');
    const display = document.getElementById('display');
    const lapContainer = document.getElementsByClassName('lapContainer')[0];

    startStopButton.addEventListener('click', function() {
        if(ticking) {
            clearInterval(interval);
            startStopButton.innerText = 'Start';
            lapButton.innerText = 'Reset';
        } else {
            interval = setInterval(updateTime, 10);
            startStopButton.innerText = 'Stop';
            lapButton.innerText = 'Lap';
        }
        ticking = !ticking;
    });

    lapButton.addEventListener('click', function() {
        if(ticking) {
            const lapElement = document.createElement('p');
            const lapText = document.createTextNode('Lap ' + lap + ': ' + display.innerText);
            lapElement.appendChild(lapText);
            lapContainer.appendChild(lapElement);
            lap += 1;
        } else {
            currentMilliseconds = 0;
            currentSeconds = 0;
            currentMinutes = 0;
            lap = 1;
            updateDisplay();
            lapContainer.innerHTML = '';
        }
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