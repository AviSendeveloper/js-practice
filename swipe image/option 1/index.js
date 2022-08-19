
function swipeImage() {
    let images = document.getElementsByClassName('image');
    let firstImage = images[0].src;

    let secondImage = images[1].src;

    let temImage = secondImage;

    images[1].src = firstImage;
    images[0].src = temImage;
}