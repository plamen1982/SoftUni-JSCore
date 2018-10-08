function townsToJSON(inputArray) {
   let resultArray =  inputArray
    .map((element, index) => {
        if(index > 0) {
            return element
            .split(/\|/g)
            .filter((el) => el !== '')
            .map((el) => el.trim())
        }
    });

    let result = [];
    let objectResult = {};

    for(let el of resultArray) {

        if(el) {
            objectResult.Town = el[0];
            objectResult.Latitude = el[1];
            objectResult.Longitude = el[2];
            result.push(JSON.parse(JSON.stringify(objectResult)));
        }
    }

    //numbers to be numbers in JSON.stringify
    for(let i = 0; i < result.length; i++){
        let obj = result[i];
        for(let prop in obj){
            if(obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])){
                obj[prop] = +obj[prop];   
            }
        }
    }
    
    console.log(JSON.stringify(result, null));
}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);