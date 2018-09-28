function modifyAverage(number) {

    let numberToArrayOfDigits = (number) => {
        number = number.toString();
        return number.split('').map(Number);
    }

    let isAverageBiggerThan5 = (arrayOfNumbers) => {
        let sum = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue)
        let average = sum / arrayOfNumbers.length;
        if(average > 5) {
            return true;
        } 
        return false;
    }

    while(true) {
        let arrayOfNumbers = numberToArrayOfDigits(number);
        if(isAverageBiggerThan5(arrayOfNumbers)) {
            return number;
        } else {
            let stringNumber = number.toString() + '9';
            number = stringNumber;
        }   
    }
}

console.log(modifyAverage(5835));

