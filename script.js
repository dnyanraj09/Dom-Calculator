function calculateSum() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let sum = num1 + num2;
        document.getElementById('result').innerText = `Sum: ${sum}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers';
    }
}
