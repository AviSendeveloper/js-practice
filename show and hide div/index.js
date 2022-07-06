let showState = false;

function showBox() {
    let box = document.getElementById('box');
    
    if (showState) {
        box.style.display = '';
    } else {
        box.style.display = 'none';
    }

    showState = !showState;
}