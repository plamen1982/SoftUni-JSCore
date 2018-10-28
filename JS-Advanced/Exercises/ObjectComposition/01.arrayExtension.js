(function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    }

    Array.prototype.skip = function(n) {
        return this.filter((el, index) => index > n - 1)
    }

    Array.prototype.take = function(n) {
        return this.filter((el, index) => n > index);
    }

    Array.prototype.sum = function() {
        return this.reduce((acc, curr) => acc + curr, 0);
    }

    Array.prototype.average = function() {
        return this.reduce((acc, curr) => acc + curr) / this.length;
    }
})();

let someArr = [1, 2, 3];
console.log(someArr.average());