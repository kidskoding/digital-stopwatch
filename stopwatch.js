document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const stopwatchDisplay = document.querySelector('.stopwatch p strong');

    let currentMilliseconds = 0;
    let currentSeconds = 0;
    let currentMinutes = 0;

    let ticking = false;

    let intervalTimer;

    startButton.addEventListener('click', startStopwatch);
    
    function startStopwatch() {
        if(!ticking) {
            intervalTimer = setInterval(runMilliseconds, 10);

            const runMilliseconds = () => {
                currentMilliseconds++;
                if(currentMilliseconds === 100) {
                    currentMilliseconds = 0;
                    runSeconds();
                }
                updateDisplay();
            }
    
            const runSeconds = () => {
                currentSeconds++;
                if(currentSeconds === 60) {
                    currentSeconds = 0;
                    runMinutes();
                }
                updateDisplay();
            }
    
            const runMinutes = () => {
                currentMinutes++;
            }
    
            const updateDisplay = () => {
                const formattedTime = `${pad(currentMinutes)}:${pad(currentSeconds)}:${pad(currentMilliseconds)}`;
                stopwatchDisplay.textContent = formattedTime;
            }
            startButton.addEventListener('click', stopStopwatch);

            ticking = true;
            startButton.textContent = 'Stop';
            startButton.addEventListener('click', stopStopwatch);
        } else {
            stopStopwatch();
        }
    }

    function stopStopwatch() {
        clearInterval(intervalTimer);
        ticking = false;
        startButton.textContent = "Start";
    }

    function pad(value) {
        return value < 10 ? "0" + value : value;
    }
});