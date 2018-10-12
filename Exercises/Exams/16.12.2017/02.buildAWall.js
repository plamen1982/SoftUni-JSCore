function buildAWall(inputArray) {
    let array = inputArray.map(x => Number(x)).filter((x) => x < 30);
    let dailyUsageConcrete = [];
    let totalCost = 0;
    while(array.length) {
        let dailyUsage = array.reduce((accumulator) => accumulator + 195, 0);
        dailyUsageConcrete.push(dailyUsage);
        array = array.map((element) => element += 1).filter((element) => element < 30);
        totalCost += dailyUsage * 1900;
    }

    console.log(dailyUsageConcrete.join(", "));
    console.log(`${totalCost} pesos`);
}

buildAWall([21, 25, 28]);