const tableBody = document.getElementById('row');

function addRow() {
    // copy text
    lastRow = tableBody.lastElementChild;
    text = document.querySelector('.text').innerText;
    console.log(text);

    newElement = `<tr>
        <td class="text"> ${text} </td>
        <td><button onclick="deleteRow(event)">Delete</button></td>
    </tr>`;
    console.log(newElement);

    tableBody.insertAdjacentHTML("afterend",newElement);

    console.log(tableBody.innerHTML);

}

function deleteRow(e){
    console.log(e);
    // e.srcElement.parentElement.parentElement.remove();
}