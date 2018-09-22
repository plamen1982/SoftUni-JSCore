function solve(a, b, c) {
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    if(discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(x2);        
        console.log(x1);
    } else if(discriminant === 0) {
       let x = (-b) / (2 * a);
       console.log(x);
    } else {
        console.log('No');
    }
}

solve(6, 11, -35);
solve(1, -12, 36);
solve(5, 2, 1);