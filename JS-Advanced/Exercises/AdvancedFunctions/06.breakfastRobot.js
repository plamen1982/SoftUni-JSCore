// let manager = function () {
//     let ingredients = {};
//     ingredients['protein'] = 0;
//     ingredients['carbohydrate'] = 0;
//     ingredients['fat'] = 0;
//     ingredients['flavour'] = 0;

//     function restock(tokens) {
//         const [ingredient, quantity] = tokens;
//         ingredients[ingredient] += +quantity;
//         return "Success";
//     }

//     function prepare(tokens) {
//         const [recipes, quantity] = tokens;
//         let totalCarb = 0;
//         let totalFlavour = 0;
//         let totalFat = 0;
//         let totalProteins = 0;
//         switch (recipes) {
//             case 'apple':
//                 totalCarb = quantity * 1;
//                 totalFlavour = quantity * 2;
//                 if (totalCarb <= ingredients['carbohydrate'] && totalFlavour <= ingredients['flavour']) {
//                     ingredients['carbohydrate'] -= totalCarb;
//                     ingredients['flavour'] -= totalFlavour;
//                     return "Success";
//                 } else if (totalCarb > ingredients['carbohydrate']) {
//                     return `Error: not enough carbohydrate in stock`;
//                 } else if (totalFlavour > ingredients['flavour']) {
//                     return `Error: not enough flavour in stock`;
//                 }

//             case 'coke':
//                 totalCarb = quantity * 10;
//                 totalFlavour = quantity * 20;
//                 if (totalCarb <= ingredients['carbohydrate'] && totalFlavour <= ingredients['flavour']) {
//                     ingredients['carbohydrate'] -= totalCarb;
//                     ingredients['flavour'] -= totalFlavour;
//                     return "Success";
//                 } else if (totalCarb > ingredients['carbohydrate']) {
//                     return `Error: not enough carbohydrate in stock`;
//                 } else if (totalFlavour > ingredients['flavour']) {
//                     return `Error: not enough flavour in stock`;
//                 }

//             case 'burger':
//                 totalCarb = quantity * 5;
//                 totalFlavour = quantity * 3;
//                 totalFat = quantity * 7;
//                 if (totalCarb <= ingredients['carbohydrate'] && totalFlavour <= ingredients['flavour'] && totalFat <= ingredients['fat']) {
//                     ingredients['carbohydrate'] -= totalCarb;
//                     ingredients['flavour'] -= totalFlavour;
//                     ingredients['fat'] -= totalFat;
//                     return "Success";
//                 } else if (totalCarb > ingredients['carbohydrate']) {
//                     return `Error: not enough carbohydrate in stock`;
//                 } else if (totalFlavour > ingredients['flavour']) {
//                     return `Error: not enough flavour in stock`;
//                 } else if (totalFlavour > ingredients['fat']) {
//                     return `Error: not enough fat in stock`;
//                 }

//             case 'omelet':
//                 totalProteins = quantity * 5;
//                 totalFlavour = quantity * 1;
//                 totalFat = quantity * 1;
//                 if (totalProteins <= ingredients['protein'] && totalFlavour <= ingredients['flavour'] && totalFat <= ingredients['fat']) {
//                     ingredients['protein'] -= totalProteins;
//                     ingredients['flavour'] -= totalFlavour;
//                     ingredients['fat'] -= totalFat;
//                     return "Success";
//                 } else if (totalProteins > ingredients['protein']) {
//                     return `Error: not enough protein in stock`;
//                 } else if (totalFlavour > ingredients['flavour']) {
//                     return `Error: not enough flavour in stock`;
//                 } else if (totalFlavour > ingredients['fat']) {
//                     return `Error: not enough fat in stock`;
//                 }

//             case 'cheverme':
//                 totalCarb = quantity * 10;
//                 totalProteins = quantity * 10;
//                 totalFlavour = quantity * 10;
//                 totalFat = quantity * 10;
//                 if (totalProteins <= ingredients['protein'] && totalFlavour <= ingredients['flavour'] && totalFat <= ingredients['fat'] && totalCarb <= ingredients['carbohydrate']) {
//                     ingredients['protein'] -= totalProteins;
//                     ingredients['flavour'] -= totalFlavour;
//                     ingredients['fat'] -= totalFat;
//                     ingredients['carbohydrate'] -= totalCarb;
//                     return "Success";
//                 } else if (totalProteins > ingredients['protein']) {
//                     return `Error: not enough protein in stock`;
//                 } else if (totalCarb > ingredients['carbohydrate']) {
//                     return `Error: not enough carbohydrate in stock`;
//                 } else if (totalFlavour > ingredients['fat']) {
//                     return `Error: not enough fat in stock`;
//                 } else if (totalFlavour > ingredients['flavour']) {
//                     return `Error: not enough flavour in stock`;
//                 }
//         }
//     }

//     function report() {
//         return `protein=${ingredients['protein']} carbohydrate=${ingredients['carbohydrate']} fat=${ingredients['fat']} flavour=${ingredients['flavour']}`
//     }

//     function execute() {
//         const tokens = arguments[0].split(' ');
//         const command = tokens.shift();
//         switch (command) {
//             case 'restock': return restock(tokens);
//             case 'prepare': return prepare(tokens);
//             case 'report': return report();
//         }
//     }
//     return execute;
// };

// console.log(manager("restock carbohydrate 10"))
// console.log(manager("restock flavour 10"))
// console.log(manager("prepare apple 1"))
// console.log(manager("restock fat 10"))
// console.log(manager("prepare burger 1"))
// console.log(manager("report"))
// console.log(manager("prepare cheverme 1"))

// console.log(manager("restock protein 10"))
// console.log(manager("prepare cheverme 1"))
// console.log(manager("restock carbohydrate 10"))
// console.log(manager("prepare cheverme 1"))
// console.log(manager("restock fat 10"))
// console.log(manager("prepare cheverme 1"))
// console.log(manager("restock flavour 10"))
// console.log(manager("prepare cheverme 1"))
// console.log(manager("report"))

//Second solution

let manage = (() => {
    let ingrediants = {protein: 0,carbohydrate: 0,fat: 0,flavour: 0};
    let prepare = (product, quantity) => {
        let ingrediantsRequired = getIngrediants(product, quantity);
        let massage = checkIngrediants(ingrediantsRequired);
        console.log(massage);
 
        function checkIngrediants(obj) {
            const available = Object.keys(ingrediants);
            for (const ingr in obj) {
                if (available.includes(ingr)) {
                    if (ingrediants[ingr] >= obj[ingr]) {
                        continue;
                    } else {
                        return `Error: not enough ${ingr} in stock`
                    }
                } else {
                    return `Error: not enough ${ingr} in stock`
                }
            }
            Object.keys(obj).forEach(ingr => {
                if (available.includes(ingr)) {
                    ingrediants[ingr] -= obj[ingr];
                }
            })
            return 'Success';
        };
 
        function getIngrediants(product, quantity) {
            if (product === 'apple') {
                return {
                    carbohydrate: +1 * quantity,
                    flavour: +2 * quantity
                }
            } else if (product === 'coke') {
                return {
                    carbohydrate: +10 * quantity,
                    flavour: +20 * quantity
                }
            } else if (product === 'burger') {
                return {
                    carbohydrate: +5 * quantity,
                    fat: 7 * quantity,
                    flavour: +3 * quantity,
 
                }
            } else if (product === 'omelet') {
                return {
                    protein: +5 * quantity,
                    fat: +1 * quantity,
                    flavour: +1 * quantity
                }
            } else if (product === 'cheverme') {
                return {
                    protein: +10 * quantity,
                    carbohydrate: +10 * quantity,
                    fat: +10 * quantity,
                    flavour: +10 * quantity
                }
            }
        };
    }
    let restock = (ingrediant, quantity) => {
        ingrediants[ingrediant] += +quantity;
        console.log('Success');
    }
    let report = () => {
        let info = ''
        Object.keys(ingrediants).forEach(ingr => {
            info += `${ingr}=${ingrediants[ingr]} `
        })
        console.log(info);
    }
 
    function execute(str) {
        let [command, item, quantity] = str.split(' ');
        if (command === 'restock') {
            return restock(item, quantity);
        } else if (command === 'prepare') {
            return prepare(item, quantity);
        } else if (command === 'report') {
            return report();
        }
    }
 
    return execute;
})();
let boss = manage;
boss('restock flavour 50');
boss('prepare coke 4');