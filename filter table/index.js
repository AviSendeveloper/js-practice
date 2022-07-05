function filter() {
    const keyword = document.getElementById('keyword').value;
    const table = document.getElementById('table');

    trArray = table.getElementsByClassName('name');
    console.log(keyword);

    for (i=0; i<trArray.length; i++) {
        console.log(trArray[i]);
        trArray[i].style.display = 'none';

        console.log(trArray[i].querySelector('td').innerText.toLowerCase());

        if (trArray[i] && trArray[i].querySelector('td').innerText.toLowerCase().indexOf(keyword) > -1){
            trArray[i].style.display = '';
            // break;
        }
    }
}