// <reference path="globals/jquery/index.d.ts" />
// <span id="hours" class="timer">00</span>:
// <span id="minutes" class="timer">00</span>:
// <span id="seconds" class="timer">00</span>
// <button id="start-timer">Start</button>
// <button id="stop-timer">Stop</button>
function timer() {
    let isRunning = false;
    let intervalId = false;
    let time = 0;

    $('#start-timer').on('click', () => {
        if(!isRunning) {
            intervalId = setInterval(startTimer, 1000);
            console.log(intervalId)
            isRunning = true;
        }
    });

    $('#stop-timer').on('click', () => {
        if(isRunning) {
            clearInterval(intervalId);
            isRunning = false;
        }
    })

    function startTimer() {
        time += 1;
        $('#hours').text(('0' + parseInt(time / 3600)).slice(-2));
        $('#minutes').text(('0' + (parseInt(time / 60) % 60)).slice(-2));
        $('#seconds').text(('0' + parseInt(time % 60)).slice(-2));
    }

}