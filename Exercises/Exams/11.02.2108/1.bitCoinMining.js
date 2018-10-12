function bitCoinMining(inputArray) {
    let oneBitcoinPrice = 11949.16 //per lv.
    let oneGramGoldPrice = 67.51 //per lv.
    let totalBitCoins = 0;
    let totalLevs = 0;
    let theDayOfFirstPurchase = 0;
    let isPurchased = false;
    let leftMoney = 0;

    for(let i = 0; i < inputArray.length; i++) {
        if((i + 1) % 3 === 0 ) {
            totalLevs += inputArray[i] * (oneGramGoldPrice * 0.7);
        } else {
            totalLevs += inputArray[i] * oneGramGoldPrice;
        }
        if(totalLevs >= oneBitcoinPrice && !isPurchased) {
            theDayOfFirstPurchase = i + 1;
            isPurchased = true;
        }
    }

    totalBitCoins = parseInt(totalLevs / oneBitcoinPrice);
    leftMoney = (totalLevs - totalBitCoins * oneBitcoinPrice).toFixed(2);

       console.log(`Bought bitcoins: ${totalBitCoins}`)
       if(theDayOfFirstPurchase) {
        console.log(`Day of the first purchased bitcoin: ${theDayOfFirstPurchase}`);
       }
       console.log( `Left money: ${leftMoney} lv.`)
}

bitCoinMining([ '100', '200', '300' ])