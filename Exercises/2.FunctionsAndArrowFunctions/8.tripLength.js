function tripLength(inputCoordinates) {
    const [x1, y1, x2, y2, x3, y3] = inputCoordinates;

    let getDistanceBtwTwoPoints = (x1, y1, x2, y2) => Math.sqrt(Math.pow((x1 - x2), 2) + (Math.pow((y1 - y2), 2)));
    
    let lineOne = getDistanceBtwTwoPoints(x1, y1, x2, y2);
    let lineTwo = getDistanceBtwTwoPoints(x2, y2, x3, y3);
    let lineThree = getDistanceBtwTwoPoints(x1, y1, x3, y3);

    let startAtFirstPoint = lineOne + lineTwo;
    let startAtSecondPoint = lineTwo + lineThree;
    let startAtThirdPoint = lineThree + lineOne;

    return startAtFirstPoint <= startAtSecondPoint && startAtFirstPoint <= startAtThirdPoint 
    ? `1->2->3: ${startAtFirstPoint}` : startAtSecondPoint <= startAtThirdPoint 
        ? `1->3->2: ${startAtSecondPoint}` : `2->1->3: ${startAtThirdPoint}` 

}

// console.log(tripLength([0, 0, 2, 0, 4, 0]));
console.log(tripLength([5, 1, 1, 1, 5, 4]));
console.log(tripLength([-1, -2, 3.5, 0, 0, 2]));