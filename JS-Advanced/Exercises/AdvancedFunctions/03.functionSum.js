let myfunc = (function functionSum(number) {
    let sum = 0;

    function add(number) {
        sum += number;
        return add;
    }

    add.toString = () => sum;
    return add;
})();

console.log(myfunc(8)(4)(-5).toString());