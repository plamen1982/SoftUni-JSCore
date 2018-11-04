let assert = require('chai').assert;
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('addFive(num)', function() {
    it('should return undefined if the num is not from type Number', function() {
        assert.equal(mathEnforcer.addFive("5"), undefined);
    });
    it('should return value that is with five more to num argument', function() {
        assert.equal(mathEnforcer.addFive(10), 15);
    });
    it('should return value that is with five more to num argument', function() {
        assert.equal(mathEnforcer.addFive(-5), 0);
    });
    it('should return value that is with five more to num argument', function() {
        assert.closeTo(mathEnforcer.addFive(3.14), 8.14, 0.01);
    });
    it('should return undefined if no arguments were passed', function() {
        assert.equal(mathEnforcer.addFive(), undefined);
    });
});

describe('subtractTen(num)', function() {
    it('should return undefined if the num is not from type Number', function() {
        assert.equal(mathEnforcer.subtractTen("5"), undefined);
    });
    it('should return subtraced value that is with ten less that a initial one', function() {
        assert.equal(mathEnforcer.subtractTen(-5), -15);
    });
    it('should return value that is with ten less to num argument', function() {
        assert.equal(mathEnforcer.subtractTen(10), 0);
    });
    it('should return value that is with ten less to num argument', function() {
        assert.closeTo(mathEnforcer.subtractTen(3.14), -6.86, 0.01);
    });
    it('should return undefined if no arguments were passed', function() {
        assert.equal(mathEnforcer.subtractTen(), undefined);
    });
});

describe('sum(num)', function() {
    it('should return undefined if the num is not from type Number', function() {
        assert.equal(mathEnforcer.sum(5, "5"), undefined);
    });
    it('should return undefined if the num is not from type Number', function() {
        assert.equal(mathEnforcer.sum("5", 5), undefined);
    });
    it('should return correct sum value', function() {
        assert.equal(mathEnforcer.sum(5, 3), 8);
    });
    it('should return correct sum value', function() {
        assert.equal(mathEnforcer.sum(5, -3), 2);
    });
    it('should return correct sum value', function() {
        assert.closeTo(mathEnforcer.sum(2.7, 3.4), 6.1, 0.01);
    });
    it('should return undefined if no arguments were passed', function() {
        assert.equal(mathEnforcer.sum(), undefined);
    });
});