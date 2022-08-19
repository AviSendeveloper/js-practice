var pauseStatus = false;
var intervalId = '';

function swipeImage(startFirstImage = null, startSecondImage = null) {
    console.log('Calling swip function');
    let images = document.getElementsByClassName('image');

    let firstImage = images[0].src;
    let secondImage = images[1].src;

    let temImage = secondImage;

    images[1].src = firstImage;
    images[0].src = temImage;
}

function start() {
    intervalId = setInterval(this.swipeImage, 300);
}

function pauseStatusChange() {
    if (!pauseStatus) {
        pauseStatus = !pauseStatus;
        clearInterval(intervalId);
        document.getElementById('pauseBtn').innerHTML = 'Resume';
    } else {
        pauseStatus = !pauseStatus;
        start();
        document.getElementById('pauseBtn').innerHTML = 'Pause';
    }
}

