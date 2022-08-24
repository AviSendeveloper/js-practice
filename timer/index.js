var hour;
var min;
var sec;
var targetTime;
var intervalId;

function timer() {
    let resultHour = parseInt(targetTime / (60 * 60));
    let resultMin = parseInt((targetTime % (60 * 60)) / 60);
    let resultSec = parseInt((targetTime % (60 * 60)) % 60);

    document.getElementById('hour').value = resultHour;
    document.getElementById('min').value = resultMin;
    document.getElementById('sec').value = resultSec;

    targetTime = targetTime - 1;

    if (targetTime < 0) {
        clearInterval(intevalId)
    }

    
}

function startTimer() {
    hour = document.getElementById('hour').value;
    min = document.getElementById('min').value;
    sec = document.getElementById('sec').value;

    targetTime = ((hour * 3600) + (min * 60) + sec)   // time in sec

    pauseStatus = false;

    timer();
    // timer();
    intervalId = setInterval(timer, 1000);
}

function pauseTimer() {
    if (!pauseStatus) {
        clearInterval(intervalId);
        pauseStatus = true;
        document.getElementById('pause').innerHTML = 'Resume';
    } else {
        startTimer();
        document.getElementById('pause').innerHTML = 'Pause';
    }
}