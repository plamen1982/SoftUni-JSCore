class Vacationer {
    constructor(fullName, creditCardDetails = []) {
        //Check the full name;
        if(fullName.length === 3) {
            let nameRegex = /^[A-Z]{1}[a-z]+$/;
            fullName.forEach((name) => {
                if(!nameRegex.test(name)) {
                    throw new Error('Invalid full name');
                }
            });
            const [firstName, middleName, lastName] = fullName;
            this.firstName = firstName;
            this.middleName = middleName;
            this.lastName = lastName; 
            this.fullName = {
                firstName: this.firstName,
                middleName: this.middleName,
                lastName: this.lastName
            };
        } else {
            throw new Error('Name must include first name, middle name and last name');
        }
        if(creditCardDetails.length === 0) {
            this.cardNumber = 1111;
            this.expirationDate  = '';
            this.securityNumber = 111;
            this.creditCard = {
                cardNumber: this.cardNumber,
                expirationDate: this.expirationDate,
                securityNumber: this.securityNumber
            } 
        } else {
            const [cardNumber, expirationDate, securityNumber] = creditCardDetails;

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
        this.wishList = [];

        this.generateIDNumber();
    }

    generateIDNumber () {
        let firstLetterFirstName = this.firstName[0];
        let lastLetterLastName = this.lastName[this.lastName.length - 1];
        let lastDigit;
        if(lastLetterLastName === 'a' || lastLetterLastName === 'e' || lastLetterLastName === 'o' || lastLetterLastName === 'i' || lastLetterLastName === 'u') {
            lastDigit = 8;
        } else {
            lastDigit = 7;
        }
        let id = 231 * firstLetterFirstName.charCodeAt() + 139 * this.middleName.length;
        this.idNumber = id.toString() + lastDigit;
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

    addDestinationToWishList(destination) {
        if(this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist');
        }
        this.wishList.push(destination);
        this.wishList.sort((a, b) => a.length > b.length);
    }
 
    getVacationerInfo() {
        if(this.wishList.length < 1) {
            return `Name: ${this.firstName} ${this.middleName} ${this.lastName}
ID Number: ${this.idNumber}
Wishlist: 
empty
Credit Card:
Card Number: ${this.cardNumber}
Expiration Date: ${this.expirationDate}
Security Number: ${this.securityNumber}`;
           
        } else {
                return `Name: ${this.firstName} ${this.middleName} ${this.lastName}
ID Number: ${this.idNumber}
Wishlist: 
${this.wishList.join(', ')}
Credit Card:
Card Number: ${this.cardNumber}
Expiration Date: ${this.expirationDate}
Security Number: ${this.securityNumber}`;
        }
    }
}

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
[123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());


