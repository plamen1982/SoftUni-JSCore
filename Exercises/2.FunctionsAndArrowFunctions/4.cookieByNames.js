function cookieByNumbers(arrayOfArguments) {
    let number = arrayOfArguments[0];
    
    let calculate = (callback) => callback()

    let chop = () => number / 2;
    let dice = () => Math.sqrt(number);
    let spice = () => number + 1;
    let bake = () => number * 3;
    let fillet = () => number - number * 0.2;
    

    for(let i = 1; i < arrayOfArguments.length; i++) {
        switch(arrayOfArguments[i]) {
            case 'chop': number = calculate(chop); 
                console.log(number); 
                break;
            case 'dice': number = calculate(dice);
                console.log(number); 
                break;
            case 'spice': number = calculate(spice);
                console.log(number); 
                break;
            case 'bake': number = calculate(bake); 
                console.log(number);
                break;
            case 'fillet': number = calculate(fillet); 
                console.log(number);
                break;
        }
    }
}

// cookieByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cookieByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);