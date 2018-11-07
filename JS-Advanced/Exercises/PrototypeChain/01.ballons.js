function solve() {
    class Balloon{
        constructor(color, gasWeight){
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }
    
    class PartyBalloon extends Balloon{
        constructor(color,gasWeight,ribbonColor, ribbonLength){
            super(color,gasWeight);
            this._ribbon = {color:ribbonColor,length:ribbonLength}
        }

        get ribbon(){
            return this._ribbon
        }
    }
    
    class BirthdayBalloon extends PartyBalloon {
        constructor(color,gasWeight,ribbonColor,ribbonLength,text) {
            super(color,gasWeight,ribbonColor,ribbonLength);
            this._text = text;
        }
    
        get text() {
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}

let regBallon = new Balloon('red', 100);
// console.log(regBallon.color);
// console.log(regBallon.gasWeight);

let partyBallon = new PartyBallon('blue', 200, 'purple', 50);
// console.log(partyBallon.color);
// console.log(partyBallon.gasWeight);

// console.log(partyBallon.ribbon.color);
// console.log(partyBallon.ribbon.length);

let birthdayBallon = new BirthdayBallon('white', 100, 'pink', 200, 34, 'red');
console.log(birthdayBallon.ribbon.color);


