const extractArrayWithoutDelimiter = (arrayWithDelimiter) => {
    // Solution 1 - pure
    // const arrayWithoutDelimiter = arrayWithDelimiter.slice(0, arrayWithDelimiter.length - 1);
    // return arrayWithoutDelimiter;

    // Solution 2 - impure, the arrayWithDelimiter reference was changed in extractDelimiterArray()

    return arrayWithDelimiter;
}

const extractDelimiterFromArray = (arrayWithDelimiter) => {
    // Solution 1 - pure
    // const delimiter = arrayWithDelimiter[arrayWithDelimiter.length - 1];
    // return delimiter;
    // Solution 2 - impure
    const delimiter = arrayWithDelimiter.pop();
    return delimiter;
}

const stringToBePrinted = (arrayWithDelimiter, delimiter) => {
    return arrayWithDelimiter.join(delimiter)
}

const solution = (arrayWithDelimiter) => {
    const delimiter = extractDelimiterFromArray(arrayWithDelimiter);
//    const arrayWithoutDelimiter = extractArrayWithoutDelimiter(arrayWithDelimiter);
   const result = stringToBePrinted(arrayWithDelimiter, delimiter);
   console.log(result);
}

// solution(['One', 'Two', 'Three', 'Four', 'Five', '-']);
solution(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);