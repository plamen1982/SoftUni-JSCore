function diagonalSum(matrix) {
    let mainDiagonalSum = matrix.map((array, outerIndex) => {
        return array
            .filter((el, innerIndex) => innerIndex === outerIndex)
        }).reduce((accumulator, currentElement) => +accumulator + +currentElement);
        
    let secondaryDiagonalSum = matrix.map((array, outerIndex) => {
        return array
            .filter((el, innerIndex, array) => array.length - 1 === outerIndex + innerIndex)
        }).reduce((accumulator, currentElement) => +accumulator + +currentElement);

        return `${mainDiagonalSum} ${secondaryDiagonalSum}`;
}

// console.log(diagonalSum([
//     ['20', '40'],
//     ['10', '60']
// ]));

console.log(diagonalSum([
    ['3', '5', '17'],
    ['-1', '7', '14'],
    ['1', '-8', '89']
]
));