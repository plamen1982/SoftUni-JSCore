const assert = require('chai').assert;
const mocha = require('mocha');
const Calculator = require('../calculator');

describe('contains property expenses', () => {
    let output;
    beforeEach(function() {
        output = new Calculator();
    });
    it('it should contains property expenses that is initialized to an empty array.', () => {
        assert.isArray(output.expenses, 'should be an array');
        assert.equal(output.expenses.length, 0, 'shoud be an empty array');
    });
});

describe('add(data)', () => {
    let output;

    beforeEach(function() {
        output = new Calculator();
    });

    it('should be able to add a number', () => {
        output.add(10);
        assert.equal(output.expenses[0], 10, 'should be able to add number');
    });

    it('should able to add string', () => {
        output.add("Pesho");
        assert.equal(output.expenses[0], "Pesho", 'should be able to add string');
    });

    it('should add true, undefined, NaN', () => {
        output.add("Pesho");
        output.add(10);
        output.add(1.5);
        assert.equal(output.expenses, ["Pesho", 10, 1.5]);
    });

    it('should add object', () => {
        output.add({});
        assert.isObject(output.expenses[0], {}, 'should be able to add object');
    });

    it('should add an array', () => {
        output.add([]);
        assert.isArray(output.expenses[0], 'should be able to add object');
    });

    
    it('should add an array', () => {
        assert.isArray(output.expenses, 'expenses should be able to add object');
    });

});

describe('divideNums() ', () => {
    let output;
    beforeEach(function() {
        output = new Calculator();
    });
    it(`•	Function divideNums() – divides only the numbers from the expenses  and returns the result.`, () => {
        output.add(10);
        output.add("Pesho");
        output.add(5);
        output.add("Gosho");
        assert.equal(output.divideNums(), 2, 'should divide properly two numbers');
    });

    it(`•	Function divideNums() – divides only the numbers from the expenses  and returns the result.`, () => {
        output.add(10);
        output.add("Pesho");
        output.add(6);
        output.add("Gosho");
        assert.closeTo(output.divideNums(), 1.66, 0.01, 'should divide properly two numbers');

    });

    it(`•	Test with more that two numbers`, () => {
        output.add(15);
        output.add("Pesho");
        output.add(3);
        output.add(3);
        output.add("Gosho");
        assert.closeTo(output.divideNums(), 1.66, 0.01, 'should divide properly two numbers');

    });

    it(`•	Function divideNums() – divides only the numbers from the expenses  and returns the result.`, () => {
        output.add(0);
        output.add("Pesho");
        output.add(6);
        output.add("Gosho");
        assert.equal(output.divideNums(), 0, 'should divide properly two numbers');
        
    });

    it(`•	cannot divide by zero`, () => {
        output.add(6);
        output.add(0);
        assert.throws(() => { output.divideNums() }, Error, 'should throws an error if we divide by zero');
        
    });

    it(`•   If there are no numbers in the array, the function throws the following error: "There are no numbers in the array!" `, () => {
       output.add("Pesho");
       output.add("Gosho");
       assert.throws( () => { output.divideNums() }, 'There are no numbers in the array!');
   });
});

describe(`toString()`, () => {
    let output;
    beforeEach(function() {
        output = new Calculator();
    });
    it(`•   returns a string, containing a list of all items from the expenses, joined with an arrow: " -> ". `, () => {
        output.add(10);
        output.add("Pesho");
        output.add("5");
        let result = output.toString();
        assert.equal(result, '10 -> Pesho -> 5')
    });

    it(`•   ". If there are no items stored, it should return the string "empty array". `, () => {
        let result = output.toString();
        assert.equal(result, 'empty array');
    });

});

describe(`orderBy()`, () => {
    let output;
    beforeEach(function() {
        output = new Calculator();
    });

    it(`•   sorted expenses, sorting them by numbers`, () => {
        output.add(10);
        output.add(5);
        output.orderBy();

        assert.equal(output.expenses.join(', '), '5, 10');
    });

    it(`•   sorted expenses, sorting them by - one for numbers and another for mixed data.`, () => {
        output.add(10);
        output.add("Pesho");
        output.add("5");        
        output.orderBy();
        let result = output.expenses.join(', ');
        
        assert.equal(result, '10, 5, Pesho');
    });

    it(`•   sorted expenses, sorting them by - one for numbers and another for mixed data.`, () => {
        let result = output.orderBy();
        assert.equal(result, 'empty');
    });

});