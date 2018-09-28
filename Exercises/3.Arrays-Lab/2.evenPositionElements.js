function evenPositionElements(inputArray) {
    inputArray.forEach((element, currentIndex) => {
        let result = "";
        if(currentIndex % 2 == 0) {
            result += element + " "
        }
    });
    return result;
}

// console.log(evenPositionElements(['20', '30', '40']));
console.log(evenPositionElements(['5', '10']));