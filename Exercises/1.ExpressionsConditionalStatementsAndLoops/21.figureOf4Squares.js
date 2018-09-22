function solve(n) {
    if( n <= 4) {
        for(let i = 0; i < n - 1; i++) {
            console.log('+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+');        
        }
    } else {
        for(let i = 0; i < n - 1; i++) {
            console.log('+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+');   
            if(i === 2) {
                break;
            }
            for(j = 0; j < Math.floor((n - 3) / 2); j++) {
                console.log('|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|')
            }     
        }
    }

}

// solve(4);
// solve(5);
// solve(6);
solve(7);
