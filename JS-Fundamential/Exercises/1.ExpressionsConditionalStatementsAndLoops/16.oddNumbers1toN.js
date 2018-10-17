function solve(n) {
    for(let i = 1; i <= n; i++) {
        i % 2 !== 0 ? console.log(i) : '';
    }
}

solve(5);
solve(4);
solve(7);