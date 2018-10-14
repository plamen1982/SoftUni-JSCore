// [[20, 5, 100, 20, 1],
//  [457, 25],
//  [1],
//  [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
//  [20, 85],
//  [5000, 4500],
// ]
// Service Report: 146$ inserted. Current balance: 146$.
// You get 25$. Account balance: 432$. Thank you!
// Service Report: Banknotes from 1$: 1.
// Service Report: 252$ inserted. Current balance: 373$.
// Not enough money in your account. Account balance: 20$.
// ATM machine is out of order!

// Comments
// First Command - we insert each element /banknotes/ and print the report.
// Second Command - withdraw, which is possible. We start from the biggest banknotes, so the banknotes are (20 + 5) = 25$. After the withdraw there are 121$ left in the ATM.
// Third Command - we need to print how many banknotes of 1$ there are in the ATM (1).
// Forth Command - insert again and print the report (252$ inserted).
// Fifth Command - withdraw cannot be completed, because the account does not have enough money.
// The last Command - withdraw cannot be completed, because the ATM does not have enough money.

function atmMachine(input) {
    let banknotesInATM = [];
    let balanceInATM = 0;
    for(let i = 0; i < input.length; i++) {

        //INSERT
        if(input[i].length > 2) {
            let currentBalance = insertMoney(input[i]);
            balanceInATM += currentBalance;
            for(let j = 0; j < input[i].length; j++) {
                banknotesInATM.push(input[i][j]);
            }
            console.log(`Service Report: ${currentBalance}$ inserted. Current balance: ${balanceInATM}$.`)
            continue;
        }
        //WITHDRAW
        if(input[i].length === 2) {
            let customerBalance = input[i][0];
            let withdrawMoney = +(input[i][1]);
            let balanceAfterWithDraw = customerBalance - withdrawMoney;
            let balanceAtmBeforeDraw = balanceInATM - withdrawMoney;
            if(balanceAtmBeforeDraw < 0) {
                console.log(`ATM machine is out of order!`);
                continue;
            }
            if(balanceInATM - withdrawMoney > 0) {
                balanceInATM = balanceInATM - withdrawMoney;
            }
            if(balanceAfterWithDraw < 0) {
                console.log(`Not enough money in your account. Account balance: ${customerBalance}$.`);
                continue;
            }
            console.log(`You get ${withdrawMoney}$. Account balance: ${balanceAfterWithDraw}$. Thank you!`)
            let bankNotesWithdraw = moneyToBanknotes(withdrawMoney);
            for(let key in bankNotesWithdraw) {
                if(bankNotesWithdraw[key] !== 0) {
                    let bankNote = stringToNumber(key);
                    let numberOfBanknotes = bankNotesWithdraw[key];
                    for(let k = 0; k < numberOfBanknotes; k++) {
                        let index = banknotesInATM.indexOf(bankNote);
                        if(index > -1) {
                            banknotesInATM.splice(index, 1);
                        }
                    }
                }
            }
        }
        //SERVICE REPORT FOR BANKNOTES
        if(input[i].length < 2) {
            let banknotesInAtm = getBankNotes(input[i][0]);
            console.log(`Service Report: Banknotes from ${input[i][0]}$: ${banknotesInAtm}.`)
    }

    function getBankNotes(banknote) {
        let count = 0;
        for(let i = 0; i < banknotesInATM.length; i++) {
            if(banknotesInATM[i] === banknote) {
                count++;
            }
        }
        return count;
    }

    //if inputArray.length > 2;
    function insertMoney(inputArray) {
        let sum = inputArray.reduce((acc, curr) => {
            return acc + curr;
        }, 0)
        return sum;
    }

    function stringToNumber(input) {
        switch(input) {
            case 'numberOfTwenty': return 20;
            case 'numberOfTen': return 10;
            case 'numberOfFive': return 5;
            case 'numberOfTwo': return 2;
            case 'numberOfOne': return 1;
        }
    }


    //132 - 6 X 20, 1 X 10, 1 X 2
    function moneyToBanknotes(money) {
        let numberOfTwenty = 0;
        let numberOfTen = 0;
        let numberOfFive = 0;
        let numberOfTwo = 0;
        let numberOfOne = 0;


            if(money >= 20) {
                numberOfTwenty = parseInt(money / 20);
                money = money - numberOfTwenty*20;
            }

            if(money >= 10) {
                numberOfTen = parseInt(money / 10);
                money = money - numberOfTen*10;

            }

            if(money >= 5) {
                numberOfFive = parseInt(money / 5);
                money = money - numberOfFive*5;

            }
            
            if(money >= 2) {
                numberOfTwo = parseInt(money / 2);
                money = money - numberOfTwo*2;

            }

            if(money >= 1) {
                numberOfOne = parseInt(money / 1);
                money = money - numberOfOne*1;
            }
        
        let obj = {
            numberOfTwenty,
            numberOfTen, 
            numberOfFive,
            numberOfTwo,
            numberOfOne
        }
        return obj;
    }
}
}

atmMachine(
    [[20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],
   ])

