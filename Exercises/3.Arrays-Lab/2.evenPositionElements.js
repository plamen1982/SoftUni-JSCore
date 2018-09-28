function evenPositionElements(inputArray) {
    let result = "";
    inputArray.forEach((element, currentIndex) => {
        if(currentIndex % 2 == 0) {
            result += element + " "
        }
    });
    return result;
}

// console.log(evenPositionElements(['20', '30', '40']));
console.log(evenPositionElements(['5', '10']));