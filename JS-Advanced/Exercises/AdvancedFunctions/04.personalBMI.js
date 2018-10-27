function personalBMI() {
    const [name, age, weight, height] = arguments;
    function calculateBMI() {
       return Math.round(+weight / Math.pow(+(height/100), 2))
    }
    let result = {
        name : name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI: calculateBMI(),
    }
    if(result.BMI < 18.5) {
        result.status = 'underweight';
    } else if(result.BMI < 25) {
        result.status = 'normal';
    } else if(result.BMI >= 25 && result.BMI < 30) {
        result.status = 'overweight';
    } else if(result.BMI >= 30) {
        result.status = 'obese';
        result.recommendation = 'admission required';
    }

    return result;
}

console.log(personalBMI("Honey Boo Boo", 9, 57, 137));