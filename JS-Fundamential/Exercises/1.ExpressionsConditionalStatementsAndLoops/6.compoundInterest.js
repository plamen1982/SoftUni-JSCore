function solve([principalSum, interestRateInPercentage, compoundPeriodInMonth, timeInYears]) {
    let interestRate = interestRateInPercentage / 100;
    let compoundedFrequency = 12 / compoundPeriodInMonth;
    let totalCompoundedPeriods = compoundedFrequency * timeInYears
    let accumulatedValue = principalSum * Math.pow((1 + (interestRate / compoundedFrequency)), totalCompoundedPeriods);
    console.log(accumulatedValue.toFixed(2));
}

solve([1500, 4.3, 3, 6]);
solve([100000, 5, 12, 25]);