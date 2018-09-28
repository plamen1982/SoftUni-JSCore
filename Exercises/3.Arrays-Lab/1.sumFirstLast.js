function sumFirstLast(array) {
    let localArray = [].concat(array);
    // let localArray = array.slice(0);
    localArray = localArray.map(x => Number(x));
    let sum = localArray.reduce((accum, current, currentIndex, array) => {
        //if array has only one member doubled it
        if(array.length === 1) {
            return 2 * (accum + current)
            //accumulate the first element
        } else if(currentIndex === 0) {
            return accum + current; 
            //accumulate the last element
        } else if(currentIndex === array.length - 1) {
            return accum + current;
        }
        return accum;
    }, 0)
    return sum;
}

// console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['20']));