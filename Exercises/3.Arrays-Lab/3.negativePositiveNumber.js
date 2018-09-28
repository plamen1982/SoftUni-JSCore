function negativePositiveNumber(inputArray) {
    let newArray = [];
    inputArray
        .forEach((element) => {
            if(element < 0) {
                newArray.unshift(element);
            } else {
                newArray.push(element);
            }  
        });
    newArray.forEach(element => { 
        console.log(element) 
    });
}

negativePositiveNumber([7, -2, 8, 9])
// negativePositiveNumber([3, -2, 0, -1]);
