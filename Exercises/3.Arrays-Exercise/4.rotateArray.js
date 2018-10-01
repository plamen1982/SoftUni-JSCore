function rotateArray(inputArray) {
    
    let numberRotations = inputArray.pop();
    for(let i = 0; i < numberRotations % inputArray.length; i++) {
        let firstElement = inputArray.pop();
        inputArray.unshift(firstElement);
    }
    return inputArray.join(' ');
}

// console.log(rotateArray([1, 2, 3, 4, 2]));
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '16']));