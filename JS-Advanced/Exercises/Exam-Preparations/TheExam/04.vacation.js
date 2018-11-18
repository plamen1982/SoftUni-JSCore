class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {}
    }

    registerChild(name, grade, budget) {
        if(!this.kids[grade]) {
            this.kids[grade] = [];
        } 

        if(this.budget <= budget) {
            let isExist = false;
            this.kids[grade].find((nameMoney) => {
                let [currentName] = nameMoney.split('-');
                if(name === currentName) {
                    isExist = true;
                    return `${name} is already in the list for this ${this.destination} vacation.`
                } 
            });
            if(!isExist) {
                this.kids[grade].push(`${name}-${budget}`);
                return grade;
            }
        } else {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }


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
        let sortedGrades = Object.keys(this.kids).sort((a, b) => a > b);
        let countKids = 0;
        sortedGrades.forEach((grade) => {
            this.kids[grade].forEach((kid, index) => {
                countKids += 1;
            });
        }); 
        let result = `${this.organizer} will take ${countKids} children on trip to ${this.destination}\n`;
        sortedGrades.forEach((grade) => {
            result += `Grade: ${grade}\n`
            this.kids[grade].forEach((kid, index) => {
                result += `${index + 1}. ${kid}\n`;
            });
        });   
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