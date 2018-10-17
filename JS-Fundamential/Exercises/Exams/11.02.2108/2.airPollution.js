function airPollution(airPollutionMap, pollutionForces) {
    //TODO: refactor to pure functions && functional programming

    airPollutionMap = airPollutionMap.map((row) => row.split(' ').map(Number));
    pollutionForces = pollutionForces.map(force => force.split(' '));

    function breeze(breezeIndex) {
        for(let i = 0; i < airPollutionMap.length; i++) {
            airPollutionMap[breezeIndex][i] -= 15;
        }
    }

    function gale(galeIndex) {
        for(let i = 0; i < airPollutionMap.length; i++) {
            airPollutionMap[i][galeIndex] -= 20;
        }
    }

    function smog(smogIndex) {
        for(let i = 0; i < airPollutionMap.length; i++) {
            for(let j = 0; j < airPollutionMap.length; j++) {
                airPollutionMap[i][j] += +smogIndex;
            }
        }
    }

    function extractPollutedAreas(airPollutionMap) {
        let extractedResult = [];
        for(let i = 0; i < airPollutionMap.length; i++) {
            for(let j = 0; j < airPollutionMap.length; j++) {
                if(airPollutionMap[i][j] >= 50) {
                    extractedResult.push(`[${i}-${j}]`);
                };
            }
        }
        return extractedResult;
    }

    for(let i = 0; i < pollutionForces.length; i++) {

        switch(pollutionForces[i][0]) {
            case 'breeze': breeze(pollutionForces[i][1]);
                break;
            case 'gale': gale(pollutionForces[i][1]);
                break;
            case 'smog': smog(pollutionForces[i][1]);
                break; 
        }
    }

    if(extractPollutedAreas(airPollutionMap).length) {
        console.log('Polluted areas: ' + extractPollutedAreas(airPollutionMap).join(', '));
    } else {
        console.log('No polluted areas')
    }

}

airPollution([ '5 7 72 14 4',
'41 35 37 27 33',
'23 16 27 42 12',
'2 20 28 39 14',
'16 34 31 10 24' ], [ 'breeze 1', 'gale 2', 'smog 25' ])
/*
[ '5 7 3 28 32',
  '41 12 49 30 33',
  '3 16 20 42 12',
  '2 20 10 39 14',
  '7 34 4 27 24' ], [ 'smog 11', 'gale 3', 'breeze 1', 'smog 2' ]
*/

/*
[ '5 7 2 14 4',
  '21 14 2 5 3',
  '3 16 7 42 12',
  '2 20 8 39 14',
  '7 34 1 10 24' ], [ 'breeze 1', 'gale 2', 'smog 35' ]
*/