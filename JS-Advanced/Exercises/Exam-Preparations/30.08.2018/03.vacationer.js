class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;
        this.wishList = [];

        this.creditCard = {
            cardNumber: 1111,
            expirationDate: '',
            securityNumber: 111
        }

        if(creditCard) {
            this.addCreditCardInfo(creditCard);
        }

        this.idNumber = this.generateIDNumber();
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(currentName) {
        let nameRegex = /^[A-Z][a-z]+$/;
        if(currentName.length === 3) {
            currentName.forEach((name) => {
                if(!nameRegex.test(name)) {
                    throw new Error('Invalid full name');
                }
            });
            this.firstName = currentName[0];
            this.middleName = currentName[1];
            this.lastName = currentName[2];
            this._fullName = {
                firstName: currentName[0],
                middleName: currentName[1],
                lastName: currentName[2]
            }  
        } else {
            throw new Error('Name must include first name, middle name and last name');
        }
    }

    addCreditCardInfo(input) {
        if(input.length !== 3) {
            throw new Error('Missing credit card information');
        }

        const [cardNumber, expirationDate, securityNumber] = input;
        if(typeof(cardNumber) !== 'number' || typeof(securityNumber) !== 'number') {
            throw new Error('Invalid credit card details');
        }

        this.cardNumber = cardNumber;
        this.expirationDate = expirationDate;
        this.securityNumber = securityNumber;
        this.creditCard = {
            cardNumber: this.cardNumber,
            expirationDate: this.expirationDate,
            securityNumber: this.securityNumber
        } 
    }

    generateIDNumber () {
        let firstLetterFirstName = this.fullName.firstName[0];
        let lastLetterLastName = this.fullName.lastName[this.fullName.lastName.length - 1];
        let lastDigit;
        if(lastLetterLastName === 'a' || lastLetterLastName === 'e' || lastLetterLastName === 'o' || lastLetterLastName === 'i' || lastLetterLastName === 'u') {
            lastDigit = 8;
        } else {
            lastDigit = 7;
        }
        let id = 231 * firstLetterFirstName.charCodeAt() + 139 * this.middleName.length;
        return id.toString() + lastDigit;
    }

    addDestinationToWishList(destination) {
        if(this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist');
        }
        this.wishList.push(destination);
        this.wishList.sort((a, b) => a.length > b.length);
    }

    getVacationerInfo() {
        let output = "";
        output += `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\n`;
        output += `ID Number: ${this.idNumber}\n`;
        if (this.wishList.length === 0) {
            output+= "Wishlist:\nempty\n";
        } else {
            output += `Wishlist:\n${this.wishList.join(", ")}\n`;
        }
        output += `Credit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date: ${this.creditCard.expirationDate}\nSecurity Number: ${this.creditCard.securityNumber}`;
        return output;
    }
}

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
// let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
// [123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
// try {
//     let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
// } catch (err) {
//     console.log("Error: " + err.message);
// }

// // Should throw an error (Missing credit card information)
// try {
//     let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
//     vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
// } catch (err) {
//     console.log("Error: " + err.message);
// }

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
// console.log(vacationer2.getVacationerInfo());
