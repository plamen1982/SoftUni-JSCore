function insideVolume(array) {
    for(let i = 0; i < array.length - 2; i += 3) {
        if(isXInside(array[i]) && isYInside(array[i + 1]) && isZInside(array[i + 2])) {
            console.log('inside');
        } else {
            console.log('outside');
        }
    }

    function isXInside(x) {
        if(x >= 10 && x <= 50) {
            return true;
        }
        return false;
    }

    function isYInside(y) {
        if(y >= 20 && y <= 80) {
            return true;
        }
        return false;
    }

    function isZInside(z) {
        if(z >= 15 && z <= 50) {
            return true;
        }
        return false;
    }
}

// console.log(insideVolume([8, 20, 22]));
insideVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);
    