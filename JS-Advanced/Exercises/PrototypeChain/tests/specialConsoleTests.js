const assert = require('chai').assert;
const Console = require('../05.c#Console');

describe('writeLine(string)', () => {
    it('- if only a single argument is passed and it is a string, the function should simply return it.', () => {
        let singleStr = Console.writeLine('some string');
        assert.equal(singleStr, 'some string');
        let emptyStr = Console.writeLine('');
        assert.equal(emptyStr, '');
    });
});

describe('templateString, parameters', () => {
    it('- if only a single parameter is passed and it is an object - return the JSON representation of the object.', () => {
        let obj = {foo: 'bar'}
        let returnedObj = Console.writeLine(obj);
        assert.equal(returnedObj, JSON.stringify(obj));
    });
});

describe('writeLine(templateString, parameters)', () => {
    it('If multiple arguments are passed, but the first is not a string - throw a TypeError.', () => {
        assert.throws(() => { Console.writeLine(1, 1) }, TypeError, 'No string format given!');
    });

    it('If the number of parameters does not correspond to the number of placeholders in the template string - throw a RangeError.', () => {
        assert.throws(() => { Console.writeLine("The sum of {0} and {1} is {2}",  4, 7); }, RangeError);
    });

    it('If the placeholders have indexes not withing the parameters range(for instance we have a placeholder {13} and only 5 params) throw a RangeError.', () => {
        assert.throws(() => { Console.writeLine("The sum of {13}",  4, 7); }, RangeError);
    });

    it('If multiple arguments are passed and the first is a string, find all placeholders from the string and exchange them with the supplied parameters.', () => {
        let result = Console.writeLine('The sum of {0} and {1} is {2}', 3, 6, 9);
        assert.equal(result, 'The sum of 3 and 6 is 9');
    });
});


