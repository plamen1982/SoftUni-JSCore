function travelTime(inputArray) {

    let destinations = inputArray
        .map((el) => el.split(' > '))
        .reduce((obj, el) => {
            let country = el[0];
            let town = el[1].charAt(0).toUpperCase() + el[1].slice(1);
            let priceOfTicket = +el[2];
            if(!obj[country]) {
                obj[country] = {};
            }

            if(!obj[country][town]) {
                obj[country][town] = priceOfTicket;
            }

            if(obj[country][town] > priceOfTicket) {
                obj[country][town] = priceOfTicket;
            }
            return obj;
        }, {})

let sortedCountries = Object.keys(destinations).sort((a, b) => a > b);

    for(let country of sortedCountries) {
        let result = "";
        result += country + " -> " ;
        
        let sortedTownsByPrice = Object.keys(destinations[country]).sort((town1, town2) => {
            return destinations[country][town1] > destinations[country][town2];
        })
        
        for(let town of sortedTownsByPrice) {
            result += town + " -> ";
            result += destinations[country][town] + " ";
        }
        // console.log(result);
    }
}
travelTime(["Bulgaria > Sofia > 25000",
"aaa > Sofia > 1",
"aa > Orgrimar > 0",
"France > Paris > 2000",
"zz > Aarana > 25010",
"Bulgaria > Lukovit > 1000",
 ]);