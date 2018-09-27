function cookieByNumbers(arrayOfArguments) {
    let number = arrayOfArguments[0];
    
    function chop(number) {
        return number / 2;
    }

    function dice(number) {
        return Math.sqrt(number);
    }

    function spice(number) {
        return number + 1;
    }

    function bake(number) {
        return number * 3;
    }

    function fillet(number) {
        number = number - number * 0.2;
        return number;
    }

    for(let i = 1; i <= arrayOfArguments.length; i++) {
        switch(arrayOfArguments[i]) {
            case 'chop': number = chop(number); 
                console.log(number); 
                break;
            case 'dice': number = dice(number);
                console.log(number); 
                break;
            case 'spice': number = spice(number); 
                console.log(number); 
                break;
            case 'bake': number = bake(number); 
                console.log(number);
                break;
            case 'fillet': number = fillet(number); 
                console.log(number);
                break;
        }
    }
}

// cookieByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cookieByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);