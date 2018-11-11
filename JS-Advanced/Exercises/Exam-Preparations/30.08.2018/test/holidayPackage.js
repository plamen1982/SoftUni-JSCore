let HolidayPackage = require('../02.holidayPackage');
let assert = require('chai').assert;

describe('•	Must be instantiated with two parameters – a string destination and a string season.', () => {
    it('should be instantiated with two parameters', () => {
        assert.doesNotThrow(() => { new HolidayPackage('Sapareva Bania', 'Winter') }, TypeError, 'HolidayPackage is not a constructor');
    });
});

describe('•	Accessor insuranceIncluded – used to get and set the value of the insurance status.', () => {
    it('should be able to change insuranceIncluded', () => {
         let newHoliday = new HolidayPackage('Sapareva Bania', 'Winter');
         newHoliday.insuranceIncluded = true;
         assert.equal(newHoliday.insuranceIncluded, true);
         newHoliday.insuranceIncluded = false;
         assert.equal(newHoliday.insuranceIncluded, false)
    });
});

describe('•	Function showVacationers() – returns a string with the vacationers’ names. If there aren’t any, returns a corresponding message.', () => {
    it('should returns a string with the vacationers name', () => {
         let newHoliday = new HolidayPackage('Sapareva Bania', 'Winter');
         newHoliday.vacationers.push('Plamen');
         newHoliday.vacationers.push('Peter');
         assert.equal(newHoliday.showVacationers(), `Vacationers:\n${newHoliday.vacationers.join("\n")}`);
    });

    it('should return corresponding message when there is no vacationers', () => {
        let newHoliday = new HolidayPackage('Sapareva Bania', 'Winter');
        assert.equal(newHoliday.showVacationers(), "No vacationers are added yet");
        });

});

describe('•	Function addVacationer() – adds a vacationer to the array of vacationers. In case of an invalid name, the function throws an error. ', () => {
    it('should be able to add a vacationer', () => {
         let newHoliday = new HolidayPackage('Sapareva Bania', 'Winter');
         newHoliday.vacationers.push('Plamen');
         assert.equal(newHoliday.vacationers.length, 1);
    });

    it('should be able to add a vacationer', () => {
        let newHoliday = new HolidayPackage('Sapareva Bania', 'Winter');
        assert.throws(() => { newHoliday.vacationers.push(' '); }, Error);
   });

    it('should return an Error when a wrong name is passed', () => {
        let newHoliday = new HolidayPackage('Sapareva Bania', 'Winter');
        assert.throws(() => { newHoliday.vacationers.push(Plamen); }, Error);
   });
});

describe(`•	Function generateHolidayPackage() – calculates the total price for the holiday package and returns a string, 
containing an overview of the generated holiday package. However, in case that there are no vacationers, it throws an error. 
The total price includes 400BGN per vacationer, an extra 200BGN season fee for the summer and winter seasons and 100BGN for the insurance, 
if included in the package.`, () => {
    it('should throws Error when generateHolidayPackage() is called and no vacationars are inrolled', () => {
         let newHoliday = new HolidayPackage('Sapareva Bania', 'Winter');
         newHoliday.insuranceIncluded = true;
         assert.throws(() => { newHoliday.generateHolidayPackage() }, Error);
    });

    it(`calculates the total price for the holiday package during Winter and returns a string, 
    containing an overview of the generated holiday package`, () => {
        let newHoliday = new HolidayPackage('Sapareva Bania', 'Winter');
        newHoliday.vacationers.push('Plamen');
        assert.equal(newHoliday.generateHolidayPackage(),
        "Holiday Package Generated\n" +
        "Destination: " + newHoliday.destination + "\n" +
        newHoliday.showVacationers() + "\n" +
        "Price: " + 600);
   });

   it(`calculates the total price for the holiday package during Sprint and returns a string, 
   containing an overview of the generated holiday package`, () => {
       let newHoliday = new HolidayPackage('Sapareva Bania', 'Sprint');
       newHoliday.vacationers.push('Plamen');
       assert.equal(newHoliday.generateHolidayPackage(),
       "Holiday Package Generated\n" +
       "Destination: " + newHoliday.destination + "\n" +
       newHoliday.showVacationers() + "\n" +
       "Price: " + 400);
  });

   it(`calculates the total price and insurance is included in Winter for the holiday package and returns a string, 
   containing an overview of the generated holiday package`, () => {
       let newHoliday = new HolidayPackage('Sapareva Bania', 'Winter');
       newHoliday.vacationers.push('Plamen');
       newHoliday.insuranceIncluded = true;
       assert.equal(newHoliday.generateHolidayPackage(),
       "Holiday Package Generated\n" +
       "Destination: " + newHoliday.destination + "\n" +
       newHoliday.showVacationers() + "\n" +
       "Price: " + 700);
  });

  it(`calculates the total price and insurance is included in Summer for the holiday package and returns a string, 
  containing an overview of the generated holiday package`, () => {
      let newHoliday = new HolidayPackage('Sapareva Bania', 'Summer');
      newHoliday.vacationers.push('Plamen');
      newHoliday.insuranceIncluded = true;
      assert.equal(newHoliday.generateHolidayPackage(),
      "Holiday Package Generated\n" +
      "Destination: " + newHoliday.destination + "\n" +
      newHoliday.showVacationers() + "\n" +
      "Price: " + 700);
 });

});

describe('•	insuranceIncluded  - Boolean', () => {
    it('should insuranceIncluded be Boolean', () => {
       let newHoliday = new HolidayPackage('Sapareva Bania', 'Winter');
       assert.isBoolean(newHoliday.insuranceIncluded);
    });
});

describe('•	vacationerName – non-empty string, containing a valid name. A name is considered valid when it consists of both first name and last name. ', () => {
    it('vacationerName should be non-empty string', () => {
       let newHoliday = new HolidayPackage('Sapareva Bania', 'Winter');
       assert.throws(() => { newHoliday.addVacationer(' ') }, Error);
    });

    it('vacationerName should be non-empty string', () => {
        let newHoliday = new HolidayPackage('Sapareva Bania', 'Winter');
        assert.throws(() => { newHoliday.addVacationer('Plamen') }, Error);
     });

    it('vacationerName should be non-empty string', () => {
        let newHoliday = new HolidayPackage('Sapareva Bania', 'Winter');
        assert.doesNotThrow(() => { newHoliday.addVacationer('Plamen Hristov') }, Error);
     });
});
