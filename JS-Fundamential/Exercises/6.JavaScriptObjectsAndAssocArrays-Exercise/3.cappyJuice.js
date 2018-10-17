function cappyJuice(inputArray) {
    let quantities = {};
    let bottles = {};

    let bottlesOfJuice = inputArray
    .map((row, index, array) => {

        let fruit = row.split(' => ')[0];
        let quantity = Number(row.split(' => ')[1]);
        
        if(!quantities.hasOwnProperty(fruit)) {
            quantities[fruit] = 0;
        }

        quantities[fruit] += quantity;
        if(quantities[fruit] >= 1000) {
            bottles[fruit] = parseInt(quantities[fruit] / 1000);
        }

        if(array.length - 1 === index) {
            return bottles;
        }
    });

    for(let bottleOfJuice of bottlesOfJuice) {
        if(bottleOfJuice) {
            for(let key of Object.keys(bottleOfJuice)) {
                console.log(`${key} => ${bottleOfJuice[key]}`);
            }
        }
    }
}

cappyJuice(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
)