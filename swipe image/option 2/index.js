function swipeImage() {
    let firstImage = document.getElementById('image1').src;
    console.log('first', firstImage);

    let secondImage = document.getElementById('image2').src;
    console.log('second', secondImage);

    let tempImage = firstImage;
    console.log('temp', tempImage);

    document.getElementById('image1').src = secondImage;
    document.getElementById('image2').src = tempImage;
}