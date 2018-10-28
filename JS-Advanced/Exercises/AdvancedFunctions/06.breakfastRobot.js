let manager = function() {
    let ingredients = {};
    ingredients['protein'] = 0;
    ingredients['carbohydrate'] = 0;
    ingredients['fat'] = 0;
    ingredients['flavour'] = 0;

    function restock(tokens) {
        const [ingredient, quantity] = tokens;
        ingredients[ingredient] += +quantity;
        return "Success";
    }

    function prepare(tokens) {
        const [recipes, quantity] = tokens;
        let totalCarb = 0;
        let totalFlavour = 0;
        let totalFat = 0;
        let totalProteins = 0;
        switch (recipes) {
            case 'apple':
                totalCarb = quantity * 1;
                totalFlavour = quantity * 2;
                if (totalCarb <= ingredients['carbohydrate'] && totalFlavour <= ingredients['flavour']) {
                    ingredients['carbohydrate'] -= totalCarb;
                    ingredients['flavour'] -= totalFlavour;
                    return "Success";
                } else if (totalCarb > ingredients['carbohydrate']) {
                    return `Error: not enough carbohydrate in stock`;
                } else if (totalFlavour > ingredients['flavour']) {
                    return `Error: not enough flavour in stock`;
                }
            case 'coke':
                totalCarb = quantity * 10;
                totalFlavour = quantity * 20;
                if (totalCarb <= ingredients['carbohydrate'] && totalFlavour <= ingredients['flavour']) {
                    ingredients['carbohydrate'] -= totalCarb;
                    ingredients['flavour'] -= totalFlavour;
                    return "Success";
                } else if (totalCarb > ingredients['carbohydrate']) {
                    return `Error: not enough carbohydrate in stock`;
                } else if (totalFlavour > ingredients['flavour']) {
                    return `Error: not enough flavour in stock`;
                }

            case 'burger':
                totalCarb = quantity * 5;
                totalFlavour = quantity * 3;
                totalFat = quantity * 7;
                if (totalCarb <= ingredients['carbohydrate'] && totalFlavour <= ingredients['flavour'] && totalFat <= ingredients['fat']) {
                    ingredients['carbohydrate'] -= totalCarb;
                    ingredients['flavour'] -= totalFlavour;
                    ingredients['fat'] -= totalFat;
                    return "Success";
                } else if (totalCarb > ingredients['carbohydrate']) {
                    return `Error: not enough carbohydrate in stock`;
                } else if (totalFlavour > ingredients['flavour']) {
                    return `Error: not enough flavour in stock`;
                } else if (totalFlavour > ingredients['fat']) {
                    return `Error: not enough fat in stock`;
                }
            case 'omelet':
                totalProteins = quantity * 5;
                totalFlavour = quantity * 1;
                totalFat = quantity * 1;
                if (totalProteins <= ingredients['protein'] && totalFlavour <= ingredients['flavour'] && totalFat <= ingredients['fat']) {
                    ingredients['protein'] -= totalProteins;
                    ingredients['flavour'] -= totalFlavour;
                    ingredients['fat'] -= totalFat;
                    return "Success";
                } else if (totalProteins > ingredients['protein']) {
                    return `Error: not enough protein in stock`;
                } else if (totalFlavour > ingredients['flavour']) {
                    return `Error: not enough flavour in stock`;
                } else if (totalFlavour > ingredients['fat']) {
                    return `Error: not enough fat in stock`;
                }

            case 'cheverme':
                totalCarb = quantity * 10;
                totalProteins = quantity * 10;
                totalFlavour = quantity * 10;
                totalFat = quantity * 10;
                if (totalProteins <= ingredients['protein'] && totalFlavour <= ingredients['flavour'] && totalFat <= ingredients['fat'] && totalCarb <= ingredients['carbohydrate']) {
                    ingredients['protein'] -= totalProteins;
                    ingredients['flavour'] -= totalFlavour;
                    ingredients['fat'] -= totalFat;
                    ingredients['carbohydrate'] -= totalCarb;
                    return "Success";
                } else if (totalProteins > ingredients['protein']) {
                    return `Error: not enough protein in stock`;
                } else if (totalCarb > ingredients['carbohydrate']) {
                    return `Error: not enough carbohydrate in stock`;
                } else if (totalFlavour > ingredients['fat']) {
                    return `Error: not enough fat in stock`;
                } else if (totalFlavour > ingredients['flavour']) {
                    return `Error: not enough flavour in stock`;
                } 
        }
    }

    function report() {
        return `protein=${ingredients['protein']} carbohydrate=${ingredients['carbohydrate']} fat=${ingredients['fat']} flavour=${ingredients['flavour']}`
    }

    function execute() {
        const tokens = arguments[0].split(' ');
        const command = tokens.shift();
        switch (command) {
            case 'restock': return restock(tokens);
            case 'prepare': return prepare(tokens);
            case 'report': return report();
        }
    }
    return execute;
};

// console.log(manager("restock carbohydrate 10"))
// console.log(manager("restock flavour 10"))
// console.log(manager("prepare apple 1"))
// console.log(manager("restock fat 10"))
// console.log(manager("prepare burger 1"))
// console.log(manager("report"))
// console.log(manager("prepare cheverme 1"))
console.log(manager("restock protein 10"))
console.log(manager("prepare cheverme 1"))
console.log(manager("restock carbohydrate 10"))
console.log(manager("prepare cheverme 1"))
console.log(manager("restock fat 10"))
console.log(manager("prepare cheverme 1"))
console.log(manager("restock flavour 10"))
console.log(manager("prepare cheverme 1"))
console.log(manager("report"))