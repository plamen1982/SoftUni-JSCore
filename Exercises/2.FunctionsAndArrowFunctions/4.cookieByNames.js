function cookieByNumbers(arrayOfArguments) {
    let number = arrayOfArguments[0];
    
    let chop = () => number / 2;
    let dice = () => Math.sqrt(number);
    let spice = () => number + 1;
    let bake = () => number * 3;
    let fillet = () => number - number * 0.2;
    

    for(let i = 1; i < arrayOfArguments.length; i++) {
        switch(arrayOfArguments[i]) {
            case 'chop': number = chop(); 
                console.log(number); 
                break;
            case 'dice': number = dice();
                console.log(number); 
                break;
            case 'spice': number = spice(); 
                console.log(number); 
                break;
            case 'bake': number = bake(); 
                console.log(number);
                break;
            case 'fillet': number = fillet(); 
                console.log(number);
                break;
        }
    }
}

// cookieByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cookieByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);