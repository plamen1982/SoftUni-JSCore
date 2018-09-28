function validityChecker(inputCoordinates) {
    const [x1, y1, x2, y2] = inputCoordinates;

    let isDistanceValid = (x1, y1, x2, y2) => {
        let isValid = Math.sqrt(Math.pow((x1 - x2), 2) + (Math.pow((y1 - y2), 2)));
        return Number.isInteger(isValid);
    }

    let printResult = (x1, y1, x2, y2, isValidDistanceBetweenPoints) => {
        if(isValidDistanceBetweenPoints) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    let betweenPointOneAndCenter = isDistanceValid(x1, y1, 0, 0); 
    let betweenPointTwoAndCenter = isDistanceValid(x2, y2, 0, 0); 
    let betweenTheTwoPoints = isDistanceValid(x1, y1, x2, y2);

    printResult(x1, y1, 0, 0, betweenPointOneAndCenter);
    printResult(x2, y2, 0, 0, betweenPointTwoAndCenter);
    printResult(x1, y1, x2, y2, betweenTheTwoPoints);
}

validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);