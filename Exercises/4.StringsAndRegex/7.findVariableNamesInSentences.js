function findVariableNamesInSentence(theString) {
    let regex = /^_[a-z]+$/i;
    let arrayOfStrings = theString.split(/[^a-zA-Z0-9_]+/g);
    let correctResults = [];

    function removeFirstUnderscore(element) {
        return element.slice(1);
    }

    for(let i = 0; i < arrayOfStrings.length; i++) {
        if(regex.test(arrayOfStrings[i])) {
            correctResults
                .push(removeFirstUnderscore(arrayOfStrings[i]))
        }
    }
    return correctResults.join()
}

console.log(findVariableNamesInSentence('The _id and _age variables are both integers.'));
// console.log(findVariableNamesInSentence('Calculate the _area of the _perfectRectangle object.'));
// console.log(findVariableNamesInSentence('__invalidVariable _evenMoreInvalidVariable_ _validVariable'));