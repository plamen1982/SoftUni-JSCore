function firstAndLastKNumbers(array) {
    let [ numbersElements ] = array;
    let copyArray = array.slice(1);
    console.log(copyArray
            .slice(0, numbersElements)
            .join(" "));
    console.log(copyArray
            .slice((copyArray.length - numbersElements), copyArray.length)
            .join(" "));
}

firstAndLastKNumbers([2, 7, 8, 9]);
// firstAndLastKNumbers([3, 6, 7, 8, 9]);
