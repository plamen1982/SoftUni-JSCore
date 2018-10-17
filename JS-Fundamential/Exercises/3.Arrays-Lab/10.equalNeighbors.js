function equalNeighbors(matrix) {
    let counter = 0;
    //check horizontal neighbors
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length - 1; j++) {
            if(matrix[i][j] === matrix[i][j + 1]) {
                counter++;
            }
        }
    }

    //check the vertical neighbors
    for(let i = 0; i < matrix.length - 1; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === matrix[i + 1][j]) {
                counter++;
            }
        }
    }
    return counter;
}

let result = equalNeighbors([
    ['5', '5', '4'],
    ['5', '0', '5'],
    ['2', '5', '5'],

]);
console.log(result);