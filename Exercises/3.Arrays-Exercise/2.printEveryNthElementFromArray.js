function printEveryNthElementFromArray(inputArray) {
    let step = inputArray.pop();
    return inputArray
        .filter((element, index) => index % step === 0)
        .forEach((element) => {
            console.log(element)
        });
}

printEveryNthElementFromArray(['5', '20', '31', '4', '20', '2']);