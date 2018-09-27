function roadRadar([actualSpeed, areaOfDriving]) {
    function calculateSeverity(limitSpeed, actualSpeed) {
        let deltaSpeed  = actualSpeed - limitSpeed;
        if(deltaSpeed > 0 && deltaSpeed <= 20) {
            console.log('speeding');
        } else if(deltaSpeed > 20 && deltaSpeed <= 40) {
            console.log('excessive speeding');
        } else if(deltaSpeed > 40) {
            console.log('reckless driving');
        } else {
            console.log('');
        }
    }
    switch(areaOfDriving) {
        case 'residential': return calculateSeverity(20, actualSpeed);
        case 'city': return calculateSeverity(50, actualSpeed);
        case 'interstate': return calculateSeverity(90, actualSpeed);
        case 'motorway': return calculateSeverity(130, actualSpeed);
    }
}

// roadRadar([21, 'residential']);
// roadRadar([40, 'city']);
// roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);
