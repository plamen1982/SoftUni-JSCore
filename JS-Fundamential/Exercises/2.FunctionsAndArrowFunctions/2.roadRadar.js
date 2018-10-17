function roadRadar([actualSpeed, areaOfDriving]) {
    function getInfraction(limitSpeed, actualSpeed) {
        let deltaSpeed  = actualSpeed - limitSpeed;
        if(deltaSpeed > 0 && deltaSpeed <= 20) {
            return 'speeding';
        } else if(deltaSpeed > 20 && deltaSpeed <= 40) {
            return 'excessive speeding';
        } else if(deltaSpeed > 40) {
            return 'reckless driving';
        } else {
            return '';
        }
    }
    function getLimitSpeed(areaOfDriving) {
        switch(areaOfDriving) {
            case 'residential': return 20;
            case 'city': return 50;
            case 'interstate': return 90;
            case 'motorway': return 130;
        }
    }

    let speedLimit = getLimitSpeed(areaOfDriving);
    let infraction = getInfraction(speedLimit, actualSpeed);

    if(infraction) {
        console.log(infraction);
    } else {
        console.log('');
    }
}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);