function solve([day, month, year]) {
    let correctMonth = month - 1;
    let currentDate = new Date(year, correctMonth, 0);
    console.log(currentDate.getDate());
}

// solve([17, 3, 2002]);
solve([13, 12, 2004]);