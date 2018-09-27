function roadRadar([actualSpeed, areaOfDriving]) {
    function calculateSeverity(limitSpeed, actualSpeed) {
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
    switch(areaOfDriving) {
        case 'residential': return calculateSeverity(20, actualSpeed);
        case 'city': return calculateSeverity(50, actualSpeed);
        case 'interstate': return calculateSeverity(90, actualSpeed);
        case 'motorway': return calculateSeverity(130, actualSpeed);
    }
}

// let result = roadRadar([21, 'residential']);
// let result = roadRadar([40, 'city']);
// let result = roadRadar([120, 'interstate']);
let result = roadRadar([200, 'motorway']);
console.log(result);
