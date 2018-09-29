function lastKNumbersSequence(n, k) {
    let array = [1];
    for(let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i - k);
        let newElement = array.slice(startIndex, startIndex + k).reduce((accumulator, currentElement) => { return accumulator + currentElement });
        array.push(newElement);
    }
    console.log(array.join(" "));
}

// lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);