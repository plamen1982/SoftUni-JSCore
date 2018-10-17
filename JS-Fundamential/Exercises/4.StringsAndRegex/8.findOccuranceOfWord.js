function findOccuranceOfWord(theString, searchedWord) {
    let regex = new RegExp(`\\b${searchedWord}\\b`, 'gi');
    let result = theString.match(regex);
        return result ? result.length : 0;
}

console.log(findOccuranceOfWord('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 
'there'
));