function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    let calc = +firstNumber - +secondNumber;
    let result = document.getElementById('result');
    result.textContent = calc;
}