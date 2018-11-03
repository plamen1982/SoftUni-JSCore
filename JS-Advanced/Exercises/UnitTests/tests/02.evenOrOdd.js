let assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


describe('isOddOrEven(string)', () => {

    it('should return odd when the length of the number is odd', () => {
        assert.equal(isOddOrEven("5"), "odd");
    });

    it('should return even when the length of the number is even', () => {
        assert.equal(isOddOrEven("43"), "even");
    });

    it('should return undefined when note a type string is passed', () => {
        assert.equal(isOddOrEven(5), undefined);
    });



});

