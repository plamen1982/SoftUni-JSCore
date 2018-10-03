function splitStringByDelimiter(theString, delimiter) {
    theString
        .split(delimiter)
        .forEach((element) => {
        console.log(element);
    })
}

// splitStringByDelimiter('One-Two-Three-Four-Five', '-');
splitStringByDelimiter('http://platform.softuni.bg', '.');