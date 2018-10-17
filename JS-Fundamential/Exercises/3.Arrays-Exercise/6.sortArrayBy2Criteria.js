function sortArrayBy2Criteria(inputArray) {
    inputArray
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .sort((a, b) => a.length - b.length)
        .forEach((element) => {
            console.log(element)
        });
}

// sortArrayBy2Criteria(['alpha', 'beta', 'gamma']);
// sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);
