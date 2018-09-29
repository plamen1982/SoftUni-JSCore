function firstAndLastKNumbers(array) {
    let [ numbersElements ] = array;
    let copyArray = array.slice(1);

    let resultFirstElements = '';

    copyArray.forEach((el, index, array) => {
        if(numbersElements > index) {
            resultFirstElements += el + ' ';
        }
    });
    console.log(resultFirstElements);

    let resultLastElements = '';

    copyArray.forEach((el, index, array) => {
        if(numbersElements > index) {
            resultLastElements += array[array.length - numbersElements + index] + ' ';
        }
    });
    console.log(resultLastElements);
}

firstAndLastKNumbers([2, 7, 8, 9]);
// firstAndLastKNumbers([3, 6, 7, 8, 9]);
