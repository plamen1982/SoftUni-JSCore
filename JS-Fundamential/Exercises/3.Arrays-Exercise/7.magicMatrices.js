function magicMatrices(inputMatrix) {
    let isMagic = false;
    let magicArray = inputMatrix.map(array => {
            return array.reduce((accumulator, element) => accumulator + element, 0)
        });

    for(let i = 0; i < magicArray.length - 2; i++) {
        if(magicArray[i] === magicArray[i + 1]) {
            isMagic = true;
        } else {
            isMagic = false;
            break;
        }
    }
    return isMagic;
}

console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));