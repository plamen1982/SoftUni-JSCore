function travelTime(input) {
    let destinations = {};
    for (let line of input) {
        let [country, city, costs] = line.split(" > ");
        costs = +costs;
        city = city.charAt(0).toUpperCase() + city.slice(1);

        if (destinations.hasOwnProperty(country) === false) {
            destinations[country] = {};
        }
        if (destinations[country].hasOwnProperty(city) === false) {
            destinations[country][city] = costs;
        }
        if (costs < destinations[country][city]) {
            destinations[country][city] = costs;
        }
    }

let sortedCountries = Object.keys(destinations).sort((a, b) => a.localeCompare(b));

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
        console.log(result);
    }
}
travelTime(["Bulgaria > Sofia > 25000",
"aaa > Sofia > 1",
"aa > Orgrimar > 0",
"France > Paris > 2000",
"zz > Aarana > 25010",
"Bulgaria > Lukovit > 1000",
 ]);