function calculator(a, b, operator) {
    function calculate(a, b, calcFunction) {
        return calcFunction(a, b);
    }

    function add(a, b) {
        return a + b;
    }

    function substract(a, b) {
        return a - b;
    }

    function divide(a, b) {
        return a / b;
    }

    function multiply(a, b) {
        return a * b;
    }

    switch(operator) {
        case '+': return calculate(a, b, add);
        case '-': return calculate(a, b, substract);
        case '*': return calculate(a, b, divide);
        case '/': return calculate(a, b, multiply);
    }

}

console.log(calculator(2, 3, '+'));