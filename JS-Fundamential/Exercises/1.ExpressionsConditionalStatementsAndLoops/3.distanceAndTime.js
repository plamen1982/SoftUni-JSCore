function solve([v1Km, v2Km, timeInSeconds]) {
    let timeInHours = timeInSeconds / 3600;
    let v1InMeters = v1Km * 1000;
    let v2InMeters = v2Km * 1000;

    let speed1 = v1InMeters * timeInHours;
    let speed2 = v2InMeters * timeInHours;

    let delta = Math.abs(speed1 - speed2);
    console.log(delta);
}

// solve([0, 60, 3600]);
// solve([11, 10, 120]);
solve([5, -5, 40]);