function solve(grads) {
    let degrees = (grads / 10) * 9;
    let degreesInRange = (degrees % 360);
    if(degreesInRange < 0) {
        degreesInRange += 360;
    }
    console.log(degreesInRange);
}

// solve(100);
// solve(400);
// solve(850);
solve(-50);