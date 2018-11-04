let assert = require('chai').assert;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;
    let sharedObject = {
        name: null,
        income: null,
        changeName: function (name) {
            if (name.length === 0) {
                return;
            }
            this.name = name;
            let newName = $('#name');
            newName.val(this.name);
        },
        changeIncome: function (income) {
            if (!Number.isInteger(income) || income <= 0) {
                return;
            }
            this.income = income;
            let newIncome = $('#income');
            newIncome.val(this.income);
        },
        updateName: function () {
            let newName = $('#name').val();
            if (newName.length === 0) {
                return;
            }
            this.name = newName;
        },
        updateIncome: function () {
            let newIncome = $('#income').val();
            if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
                return;
            }
            this.income = Number(newIncome);
        }
    };
    

describe("sharedObject", function () {
    before(()=>global.$ = $);
   describe("initially name and income should be null", function () {
      it("should return null for initial state of name", function () {
        assert.isNull(sharedObject.name);
      });
       it("should return null for initial state of income", function () {
        assert.isNull(sharedObject.income);
       });
   });

    describe("change name function", function () {
        it("should return number for number parameter", function () {
            sharedObject.changeName(15);
            assert.equal(sharedObject.name, 15);
            assert.equal($('#name').val(), 15);
        });
        it("should return previous name for empty string parameter", function () {
            sharedObject.changeName("Pesho");
            sharedObject.changeName("");
            assert.equal(sharedObject.name, "Pesho");
            assert.equal($('#name').val(), "Pesho");
        });
        it("should return new name after calling the function more than one time", function () {
            sharedObject.changeName("Pesho");
            sharedObject.changeName("Gosho");
            assert.equal(sharedObject.name, "Gosho");
            assert.equal($('#name').val(), "Gosho");
        });
    });

    describe("changeIncome function", function () {
        it("should return previous value after calling with 0 parameter", function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            assert.equal(sharedObject.income, 5);
            assert.equal($('#income').val(), "5");
        });
        it("should return correct result after calling with integer", function () {
            sharedObject.changeIncome(10);
            assert.equal(sharedObject.income, 10);
            assert.equal($('#income').val(), "10");
        });
        it("should return previous value after calling with negative parameter", function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-10);
            assert.equal(sharedObject.income, 5);
            assert.equal($('#income').val(), "5");
        });
    });

    describe("updateName function", function () {
        it("should successfully change name with non empty string", function () {
            sharedObject.changeName("Pesho");
            $("#name").val("Gosho");
            sharedObject.updateName();
            assert.equal(sharedObject.name, "Gosho");
            assert.equal($("#name").val(), "Gosho");
        });
        it("should not change name with empty string", function () {
            sharedObject.changeName("Pesho");
            $("#name").val("");
            sharedObject.updateName();
            assert.equal(sharedObject.name, "Pesho");
            assert.equal($("#name").val(), "");
        });
    });

    describe("updateIncome function", function () {
        it("should return previous value if value is NaN", function () {
            sharedObject.changeIncome(15);
            $("#income").val("abc");
            sharedObject.updateIncome();
            assert.equal(sharedObject.income, 15);
            assert.equal($("#income").val(), "abc");
        });
        it("should return previous value if value is floating point number", function () {
            sharedObject.changeIncome(15);
            $("#income").val("3.6");
            sharedObject.updateIncome();
            assert.equal(sharedObject.income, 15);
            assert.equal($("#income").val(), "3.6");
        });
        it("should return previous value if value is negative number", function () {
            sharedObject.changeIncome(15);
            $("#income").val("-10");
            sharedObject.updateIncome();
            assert.equal(sharedObject.income, 15);
            assert.equal($("#income").val(), "-10");
        });
        it("should return previous value if value is 0", function () {
            sharedObject.changeIncome(15);
            $("#income").val("0");
            sharedObject.updateIncome();
            assert.equal(sharedObject.income, 15);
            assert.equal($("#income").val(), "0");
        });
        it("should return correct value id value is positive integer", function () {
            sharedObject.changeIncome(15);
            $("#income").val("20");
            sharedObject.updateIncome();
            assert.equal(sharedObject.income, 20);
            assert.equal($("#income").val(), "20");
        })
    });
});