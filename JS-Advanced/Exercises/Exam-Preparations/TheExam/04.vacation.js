class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {}
    }

    registerChild(name, grade, budget) {
        let output;
        if(this.budget <= budget) {

            if(!this.kids[grade]) {
                this.kids[grade] = [];
            } 

            let isThisKidExist = this.kids[grade].some((kidName) => kidName.split('-')[0] === name);
            if(!isThisKidExist) {
                this.kids[grade].push(`${name}-${budget}`);
                return grade;
            } else {
                output = `${name} is already in the list for this ${this.destination} vacation.`
            }
        } else {
            output = `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }
        return output;
    }

    removeChild(name, grade) {
        let result;
         this.kids[grade].find((nameMoney, index) => {
            let [currentName, money] = nameMoney.split('-');
            if(name === currentName) {
                this.kids[grade].splice(index, 1);
                result = grade;
            } else {
                result = `We couldn't find ${name} in ${grade} grade.`
            }
        });
        return result;
    }

    toString() {
        let result = '';
        let sortedGrades = Object.keys(this.kids).sort((a, b) => a > b);
        if(this.numberOfChildren > 1) {
            result += `${this.organizer} will take ${countKids} children on trip to ${this.destination}\n`;
            sortedGrades.forEach((grade) => {
                result += `Grade: ${grade}\n`
                this.kids[grade].forEach((kid, index) => {
                    result += `${index + 1}. ${kid}\n`;
                });
            });   
        } else {
            result += `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
        return result;
    }
    
   get numberOfChildren() {
        let sortedGrades = Object.keys(this.kids).sort((a, b) => a > b);
        let countKids = 0;
        if(sortedGrades.length > 0) {
            sortedGrades.forEach((grade) => {
                this.kids[grade].forEach((kid, index) => {
                    countKids += 1;
                });
            }); 
        return countKids;
        } else {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
    }
}

let vacation = new Vacation('Miss. Elizabeth', 'The bahamas', 400);

vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Gosho', 12, 3400);
vacation.registerChild('Skaro', 11, 400);
vacation.registerChild('Gosho', 11, 3444);
console.log(vacation.numberOfChildren);