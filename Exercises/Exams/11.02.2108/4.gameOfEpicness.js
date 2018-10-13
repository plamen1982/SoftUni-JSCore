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
//unitedKingdoms =  { 'Maiden Way': { Merek: 5000, Berinon: 100000 },
//   Stonegate: { Ulric: 4900, Doran: 70000 },
//   YorkenShire: { Quinn: 2000 } }

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

console.log(unitedKingdoms);

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