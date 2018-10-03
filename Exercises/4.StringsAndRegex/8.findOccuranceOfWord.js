function findOccuranceOfWord(theString, searchedWord) {
    let regex = new RegExp(searchedWord + '(?=\\W)', 'gi');
    return theString.match(regex).length;
}

console.log(findOccuranceOfWord('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 
'there'
));