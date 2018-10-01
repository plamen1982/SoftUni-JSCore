function printArrayWithDelimiter(inputArray) {
    let delimiter = inputArray.pop();
    return inputArray.join(delimiter);
}

console.log(printArrayWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']));