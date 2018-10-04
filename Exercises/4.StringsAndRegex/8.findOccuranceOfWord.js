function findOccuranceOfWord(theString, searchedWord) {
    let regex = new RegExp(`\\b${searchedWord}\\b`, 'gi');
    return theString.match(regex).filter((element) => element !== '').length;
}

console.log(findOccuranceOfWord('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 
'there'
));