const extractArrayWithoutDelimiter = (arrayWithDelimiter) => {
    const arrayWithoutDelimiter = arrayWithDelimiter.slice(0, arrayWithDelimiter.length - 1);
    return arrayWithoutDelimiter;
}

const extractDelimiterFromArray = (arrayWithDelimiter) => {
    const delimiter = arrayWithDelimiter[arrayWithDelimiter.length - 1];
    return delimiter;
}

const stringToBePrinted = (arrayWithDelimiter, delimiter) => {
    return arrayWithDelimiter.join(delimiter)
}

const solution = (arrayWithDelimiter) => {
   const arrayWithoutDelimiter = extractArrayWithoutDelimiter(arrayWithDelimiter);
   const delimiter = extractDelimiterFromArray(arrayWithDelimiter);
   const result = stringToBePrinted(arrayWithoutDelimiter, delimiter);
   console.log(result);
}

// solution(['One', 'Two', 'Three', 'Four', 'Five', '-']);
solution(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);