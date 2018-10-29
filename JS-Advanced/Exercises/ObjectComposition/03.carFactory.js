// function carFactory(descrebedCar) {

//     let engine = {
//         smallEngine: { power: 90, volume: 1800 },
//         normalEngine: { power: 120, volume: 2400 },
//         monsterEngine: { power: 200, volume: 3500 }
//     }

//     let carriage = {
//         hatchback: {
//             type: 'hatchback', color: '',
//         },

//         coupe: {
//             type: 'coupe', color: ''
//         }
//     }

//     function chooseWheelsSize(wheelsSize) {
//         let fourWheels = [];
//         if (wheelsSize % 2 === 0) {
//             wheelsSize = wheelsSize - 1;
//         }
//         for(let i = 0; i < 4; i++) {
//             fourWheels.push(wheelsSize);
//         }
//         return fourWheels;
//     }

//     function chooseEngine(power) {
//         if(power <= 90) {
//             return engine.smallEngine;
//         } else if(power > 90 && power <= 120) {
//             return engine.normalEngine;
//         } else if(power > 120) {
//             return engine.monsterEngine;
//         }

//     }

//     function chooseCariage(carriageType, color) {
//         if(carriageType === 'hatchback') {
//             carriage.hatchback.color  = color;
//             return carriage.hatchback;
//         } else if(carriageType === 'coupe') {
//             carriage.coupe.color = color;
//             return carriage.coupe;
//         }
//     }
//     let newCar = {
//         model: descrebedCar.model,
//         engine: chooseEngine(descrebedCar.power),
//         carriage: chooseCariage(descrebedCar.carriage, descrebedCar.color),
//         wheels: chooseWheelsSize(descrebedCar.wheelsize)
//     }

//     return newCar;
// }

// console.log(carFactory({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }
// ));
// Second solutions
function carFactory(wantedCar) {
    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = [{ type: 'hatchback', color: wantedCar.color }, { type: 'coupe', color: wantedCar.color }];
    let wheelsize = wantedCar.wheelsize %2 == 1 ? wantedCar.wheelsize : wantedCar.wheelsize - 1;

    return {
        model: wantedCar.model,
        engine: engines.find(e => e.power >= wantedCar.power),
        carriage: carriages.find(c => c.type == wantedCar.carriage),
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    }
}

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

))

