function findVariableNamesInSentence(theString) {
    let arrayOfStrings = theString.match(/\b_[a-z]+\b/gi);
    let correctResults = [];

    function removeFirstUnderscore(element) {
        return element.slice(1);
    }

    for(let i = 0; i < arrayOfStrings.length; i++) {
        correctResults
            .push(removeFirstUnderscore(arrayOfStrings[i]));
    }
    return correctResults.join();
}

console.log(findVariableNamesInSentence('The _id and _age variables are both integers.'));
// console.log(findVariableNamesInSentence('Calculate the _area of the _perfectRectangle object.'));
// console.log(findVariableNamesInSentence('__invalidVariable _evenMoreInvalidVariable_ _validVariable'));