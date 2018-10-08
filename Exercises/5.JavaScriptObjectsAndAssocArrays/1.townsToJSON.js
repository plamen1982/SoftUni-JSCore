function townsToJSON(inputArray) {
   let result =  inputArray
    .map((element, index) => {
        if(index > 0) {
            return element
            .split(/\|/g)
            .filter((el) => {
                if(el) { 
                    return el;
                }
            })
            .map((el) => el.trim())
        }
    })
    .map((el) => {
        let objectResult = {}
        if(el) {
            objectResult.Town = el[0];
            objectResult.Latitude = el[1];
            objectResult.Longitude = el[2];
            return JSON.parse(JSON.stringify(objectResult));
        }
    })
    .filter((el) => { 
        if(el) { 
            return el;
        }
    });

    for(let i = 0; i < result.length; i++){
        let obj = result[i];
        for(let prop in obj){
            if(obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])){
                obj[prop] = +obj[prop];   
            }
        }
    }
    
   return JSON.stringify(result, null);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));