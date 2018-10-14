// coffee caffeine	0.80
// coffee decaf	0.90
// tea	0.80
function coffeMachine(input) {
    let totalIncomes = 0;
    for(let i = 0; i < input.length; i++) {
        let order = input[i].split(', ');
        let moneyInput = +order[0];
        let thingsToOrder = order.slice(1); 
        let typeDrink = thingsToOrder[0];
        let priceForCurrentDrink = findCoffeePrice(thingsToOrder);
        let diff = moneyInput - priceForCurrentDrink;
        if(diff < 0) {
           diff =  Math.abs(diff)
            console.log(`Not enough money for ${typeDrink}. Need ${diff.toFixed(2)}$ more.`);
            continue;
        } else {
            console.log(`You ordered ${typeDrink}. Price: ${priceForCurrentDrink.toFixed(2)}$ Change: ${diff.toFixed(2)}$`)
        }
        totalIncomes += priceForCurrentDrink;
    }
    console.log(`Income Report: ${totalIncomes.toFixed(2)}$`);


    function findCoffeePrice(thingsToOrder){
            let drink = thingsToOrder[0];
            let price = 0;
            switch(drink) {
                case 'coffee': 
                    if(thingsToOrder[1] === 'caffeine') {
                        price += 0.80;
                    } 
                    if(thingsToOrder[1] === 'decaf'){
                        price += 0.90;
                    } 

                    if(thingsToOrder[1] ==='milk') {
                        price += price * 0.1;
                    }
                    if(thingsToOrder[2] ==='milk') {
                        price += price * 0.1;
                    }
                    if(+thingsToOrder[thingsToOrder.length - 1] !== 0) {
                        price += 0.1;
                    }
                    return Math.round( price * 10 ) / 10;

                case 'tea': 
                    price += 0.8;
                    if(thingsToOrder[1] ==='milk') {
                        price += price * 0.1;
                    }
                    if(+thingsToOrder[thingsToOrder.length - 1] !== 0) {
                        price += 0.1;
                    }
                    return Math.round( price * 10 ) / 10;
            }
        }
    

}

coffeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
'1.00, coffee, decaf, 0']
)