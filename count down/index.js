// Countdown
function startCoundown() {
    input = document.getElementById('inputNum').value;
    const a = setInterval(function() {
        console.log(input);
        document.getElementById('countDown').innerHTML = `<p> ${input} </p>`;
        input = input - 1;

    if (input < 0) {
        clearInterval(a);
    }

    }, 1000);
}