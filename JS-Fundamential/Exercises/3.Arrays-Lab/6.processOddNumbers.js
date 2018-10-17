function processOddNumbers(inputArray) {
    return inputArray
        .filter((currentElement, index) => index % 2 !== 0)
        .map(currentElement => currentElement * 2)
        .reverse()
        .join(' ');
}

// console.log(processOddNumbers([10, 15, 20, 25]));
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));