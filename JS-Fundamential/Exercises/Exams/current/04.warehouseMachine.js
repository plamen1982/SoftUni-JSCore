function warehouseMachine(inputArray) {
    let storage = {};
    inputArray = inputArray.map((element) => {
        return element.split(', ')
    })
    for(let i = 0; i < inputArray.length; i++) {
        let command = inputArray[i][0];
        let brand = inputArray[i][1];
        let typeCoffe = inputArray[i][2];
        let date = inputArray[i][3];
        let quantity = +inputArray[i][4];
        if(command === 'IN') {
            if(!storage[brand]) {
                storage[brand] = {};
            }
            if(!storage[brand][typeCoffe]) {
                storage[brand][typeCoffe] = {};
                storage[brand][typeCoffe].quantity = quantity;
                storage[brand][typeCoffe].exparation = date;
            } 
    
            if(storage[brand][typeCoffe].exparation.localeCompare(date) === 0) {
                storage[brand][typeCoffe].exparation = '';
                storage[brand][typeCoffe].exparation = date;
            }
        }
    }

    function isADateBiggerThanB(a, b) {
        let arr = [];
        arr.push(a);
        arr.push(b);
        arr.sort((a, b) => a < b);
        if(arr[1] === b) {
            return true;
        } else {
            return false;
        }
    }
}

warehouseMachine([
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    "REPORT",
    "INSPECTION",
  ]
  );

