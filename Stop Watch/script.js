// Write JavaScript code here
let timerInterval;
        let seconds = 0;
        let isRunning = false;

        const stopwatchElement = document.getElementById('stopwatch');
        const startStopButton = document.getElementById('startStop');
        const resetButton = document.getElementById('reset');

        function updateStopwatch() {
            seconds++;
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;

            stopwatchElement.innerHTML = 
                String(hours).padStart(2, '0') + ':' +
                String(minutes).padStart(2, '0') + ':' +
                String(secs).padStart(2, '0');
        }

        startStopButton.addEventListener('click', () => {
            if (isRunning) {
                clearInterval(timerInterval);
                startStopButton.innerHTML = 'Start';
            } else {
                timerInterval = setInterval(updateStopwatch, 1000);
                startStopButton.innerHTML = 'Stop';
            }
            isRunning = !isRunning;
        });

        resetButton.addEventListener('click', () => {
            clearInterval(timerInterval);
            seconds = 0;
            isRunning = false;
            stopwatchElement.innerHTML = '00:00:00';
            startStopButton.innerHTML = 'Start';
        });


