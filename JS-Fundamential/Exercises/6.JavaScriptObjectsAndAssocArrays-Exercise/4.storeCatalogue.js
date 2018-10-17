 function storageCatalogue(inputArray) {

    let catalogArray = inputArray
        .map((line) => {

        let arrayOfItems = line.split(' : ');
        let catalog = {};
        catalog.name = arrayOfItems[0];
        catalog.price = arrayOfItems[1];
        return catalog;
    }).sort((a, b) => a.name > b.name)

        let letterToBePrint = '';
        for(let item of catalogArray) {
            currentLetter = item.name.charAt(0);
            if(letterToBePrint !== currentLetter) {
                console.log(currentLetter);
                letterToBePrint = currentLetter;
            } 
                console.log(` ${item.name}: ${item.price}`)
        }
 }

//  storageCatalogue([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
//  ]);

storageCatalogue(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
)