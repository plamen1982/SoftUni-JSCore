function evenPositionElements(inputArray) {
    return inputArray.filter((element, currentIndex) => currentIndex % 2 === 0).join(' ');
}

// console.log(evenPositionElements(['20', '30', '40']));
console.log(evenPositionElements(['5', '10']));