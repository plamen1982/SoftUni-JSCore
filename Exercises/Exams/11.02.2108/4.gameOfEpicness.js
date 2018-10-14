function solve(kingdoms, fights) {

unitedKingdoms = kingdoms.reduce((acc, currKingdom) => {
    let kingdom = currKingdom.kingdom;
    let general = currKingdom.general;
    let army = currKingdom.army;

    if(!acc[kingdom]) {
        acc[kingdom] = {};
    }
    if(!acc[kingdom][general]) {
        acc[kingdom][general] = {};
        if(!acc[kingdom][general].wins || !acc[kingdom][general].loses) {
            acc[kingdom][general].wins = 0;
            acc[kingdom][general].loses = 0;
            acc[kingdom][general].army = army;
        }

    } else  {
        acc[kingdom][general].army += army;
    }
    return acc;
}, {})

fights = fights.reduce((acc, curr) => {
    let attackingKingdom = curr[0]; 
    let attackingGeneral = curr[1];
    let defendingKingdom = curr[2];
    let defendingGeneral = curr[3];
    let obj = {
        attackingKingdom,
        attackingGeneral,
        defendingKingdom,
        defendingGeneral
    };
    acc.push(obj);
    return acc;
}, []);

// let kingdoms = Object.keys(unitedKingdoms);
fights.forEach((fight) => {
    if(fight.attackingKingdom === fight.defendingKingdom) {
        // do nothing;
    } else {
        if(unitedKingdoms[fight.attackingKingdom][fight.attackingGeneral].army > unitedKingdoms[fight.defendingKingdom][fight.defendingGeneral].army) {
            unitedKingdoms[fight.attackingKingdom][fight.attackingGeneral].army += unitedKingdoms[fight.attackingKingdom][fight.attackingGeneral].army * 0.1;
            unitedKingdoms[fight.attackingKingdom][fight.attackingGeneral].wins++;

            unitedKingdoms[fight.defendingKingdom][fight.defendingGeneral].army -= unitedKingdoms[fight.defendingKingdom][fight.defendingGeneral].army * 0.1;
            unitedKingdoms[fight.defendingKingdom][fight.defendingGeneral].loses++;
        } else if(unitedKingdoms[fight.attackingKingdom][fight.attackingGeneral].army < unitedKingdoms[fight.defendingKingdom][fight.defendingGeneral].army) {
            unitedKingdoms[fight.defendingKingdom][fight.defendingGeneral].army += unitedKingdoms[fight.defendingKingdom][fight.defendingGeneral].army * 0.1;
            unitedKingdoms[fight.defendingKingdom][fight.defendingGeneral].wins++;

            unitedKingdoms[fight.attackingKingdom][fight.attackingGeneral].army -= unitedKingdoms[fight.attackingKingdom][fight.attackingGeneral].army * 0.1;
            unitedKingdoms[fight.attackingKingdom][fight.attackingGeneral].loses++;
        }
    }

})

// { 'Maiden Way':
//    { Merek: { wins: 0, loses: 2, army: 4050 },
//      Berinon: { wins: 1, loses: 0, army: 110000 } },
//   Stonegate:
//    { Ulric: { wins: 2, loses: 1, army: 5336.1 },
//      Doran: { wins: 1, loses: 0, army: 77000 } },
//   YorkenShire: { Quinn: { wins: 0, loses: 1, army: 1800 } } }
function getWinnerKingdom (unitedKingdoms) {
    let kingdoms = Object.keys(unitedKingdoms);

    for(let kingdom of kingdoms) {

        let winsLosesArmy = Object.values(unitedKingdoms[kingdom])
        for(let wLA of winsLosesArmy) {
            if(!unitedKingdoms[kingdom].totalWins) {
                unitedKingdoms[kingdom].totalWins = 0;
            }
            unitedKingdoms[kingdom].totalWins += +wLA.wins
        }
        // unitedKingdoms[kingdom].totalWins += +winsLosesArmy[0];
    }

}
getWinnerKingdom (unitedKingdoms)
console.log(unitedKingdoms)
let kingdomNames = Object.keys(unitedKingdoms).sort((a, b) => { a > b});
// console.log(kingdomNames)
// [ 'Maiden Way', 'Stonegate', 'YorkenShire' ]
// console.log(unitedKingdoms)
// { 'Maiden Way':
//    { Merek: { wins: 0, loses: 2, army: 4050 },
//      Berinon: { wins: 1, loses: 0, army: 110000 } },
//   Stonegate:
//    { Ulric: { wins: 2, loses: 1, army: 5336.1 },
//      Doran: { wins: 1, loses: 0, army: 77000 } },
//   YorkenShire: { Quinn: { wins: 0, loses: 1, army: 1800 } } }
for(let name of kingdomNames) {
  let generals =  Object.keys(unitedKingdoms[name]).sort((a, b) => a > b)
//   [ 'Berinon', 'Merek' ]
// [ 'Doran', 'Ulric' ]
// [ 'Quinn' ]
//   console.log(generals)

// }
// let kingdoms1 = [
// { kingdom: "Maiden Way", general: "Merek", army: 5000, wins: 5, losses: 2, army: 5000 },
// { kingdom: "Stonegate", general: "Ulric", army: 4900, wins: 8, losses: 23, army: 8000 },
// { kingdom: "Stonegate", general: "Doran", army: 70000, wins: 10, losses: 21, army: 10000 }]
// let alphabeticaly = kingdoms1.reduce((acc, kingdom) => {
//         if(!acc[kingdom.kingdom]) {
//             acc[kingdom.kingdom] = {};
//             acc[kingdom.kingdom].name = kingdom.kingdom;
//             acc[kingdom.kingdom].wins = kingdom.wins
//         } else if(acc[kingdom.kingdom].name === kingdom.kingdom) {
//             acc[kingdom.kingdom].wins += kingdom.wins
//         }
//         return acc;
// }, {})
// let kingd = Object.values(alphabeticaly).sort((a, b) => a.wins < b.wins);
// console.log(kingd);
}
}
solve(
[ 
    { kingdom: "Maiden Way", general: "Merek", army: 5000 },
    { kingdom: "Stonegate", general: "Ulric", army: 4900 },
    { kingdom: "Stonegate", general: "Doran", army: 70000 },
    { kingdom: "YorkenShire", general: "Quinn", army: 0 },
    { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
    { kingdom: "Maiden Way", general: "Berinon", army: 100000 } 
   ],

[ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
["Stonegate", "Ulric", "Stonegate", "Doran"],
["Stonegate", "Doran", "Maiden Way", "Merek"],
["Stonegate", "Ulric", "Maiden Way", "Merek"],
["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
)