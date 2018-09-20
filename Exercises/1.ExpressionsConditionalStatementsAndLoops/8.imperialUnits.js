function solve(inches) {
        let feets = Math.floor(inches / 12);
        let remainingInches = inches % 12;
        console.log(`${feets}'-${remainingInches}"`);
}

solve(36);
solve(55);