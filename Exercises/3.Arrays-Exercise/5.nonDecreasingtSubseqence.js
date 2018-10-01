function nonDecreasingSubseqence(inputArray) {
    let maxValue = Number.NEGATIVE_INFINITY;
    inputArray
        .forEach((currentElement) => {
        if(currentElement >= maxValue) {
            maxValue = currentElement;
            console.log(currentElement);
        }
    })
}

nonDecreasingSubseqence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// nonDecreasingSubseqence([1, 2, 3, 4]);
// nonDecreasingSubseqence([20, 3, 2, 15, 6, 1]);
    