function solve(inches) {
    if(inches > 12) {
        let feets = Math.floor(inches / 12);
        let remainingInches = inches % 12;
        console.log(`${feets}'-${remainingInches}"`);
    }

    else if(inches < 0) {
        console.log(`0'-0"`);
    }

    else {
        console.log(`0'-${inches}"`);
    }
}

solve(36);
solve(55);
solve(-10);