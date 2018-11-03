let assert = require('chai').assert;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
console.log(lookupChar('33'))

describe('lookupChar(string, index)', () => {
    it('should return undefined if the argument string not from type String', () => {
        assert.equal(lookupChar(33, 0), undefined);
    });

    it('should return undefined if the argument index not from type Number', () => {
        assert.equal(lookupChar('33', '3'), undefined);
    });

    it('should return "Incorrect index" if the length of the argument string is smaller that the index argument', () => {
        assert.equal(lookupChar('33', 3), "Incorrect index");
    });
    
    it('should return "Incorrect index" if the index argument is less that a zero', () => {
        assert.equal(lookupChar('33', -1), "Incorrect index");
    });

    it('should return correct index when correct data is passed', () => {
        assert.equal(lookupChar('33', 1), 3);
    });
    
    it('should return "Incorrect index" if the index argument with the length of the string', () => {
        assert.equal(lookupChar('33', 2), "Incorrect index");
    });

    it('should return undefined if no arguments were passed', () => {
        assert.equal(lookupChar(), undefined);
    });

    it('should return undefined if one argument is passed', () => {
        assert.equal(lookupChar('33'), undefined);
    });

    it('should return undefined with non-number argument', () => {
        assert.equal(lookupChar("pesho", "gosho"), undefined);
    });

    it('should return undefined with non-integer argument', () => {
        assert.equal(lookupChar('13', 3.12), undefined);
    });

    it('should return correct result with correct input', () => {
        assert.equal(lookupChar('pesho', 0), 'p');
    });

    it('should return correct result with correct input', () => {
        assert.equal(lookupChar('stamat', 3), 'm');
    });
});

