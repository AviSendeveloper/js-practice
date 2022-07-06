function color() {
    let lists = document.getElementsByTagName('li');
    console.log(lists);
    const listLength = lists.length
    let colorState = false;

    for (i=0; i<listLength; i++) {
        if (!colorState) {
            lists[i].style.color = 'red';
        } else {
            lists[i].style.color = 'green';
        }

        colorState = !colorState;
    }
}