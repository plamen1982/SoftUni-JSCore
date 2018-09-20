function solve([number, toFixed]) {
    if(toFixed > 15) {
        toFixed = 15;
    }
    let fixedNumber = number.toFixed(toFixed);

    console.log((fixedNumber * 1).toString());
}

solve([3.1415926535897932384626433832795, 2]);
solve([10.5, 3]);