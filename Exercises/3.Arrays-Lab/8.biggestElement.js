function biggestElement(inputMatrix) {
    let newMergedArray = [];
    inputMatrix.forEach(array => newMergedArray = newMergedArray.concat(array))
    return newMergedArray
        .sort((a, b) => b - a)
        .slice(0, 1)
        .join(' ');
}

// console.log(biggestElement([
//     [20, 50, 10],
//     [8, 33, 145]
// ]));
console.log(biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ))