function solve() {

    class Melon {
        constructor(weight, melonSort) {
            if(new.target === Melon) {
                throw new Error("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }
         
        get elementIndex() {
            return +this.weight * this.melonSort.length;
        }

        toString() {
            let result = `\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
            return result;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Water";
        }
        toString() {
            return `Element: ${this.element}` + super.toString();
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Fire";
        }

        toString() {
            return `Element: ${this.element}` + super.toString();
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Earth";
        }

        toString() {
            return `Element: ${this.element}` + super.toString();
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Air";
        }

        toString() {
            return `Element: ${this.element}` + super.toString();            
        }
    }

    class Melolemonmelon extends Airmelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Water";
        }
        morph() {
            switch(this.element) {
                case 'Fire': this.element = 'Earth'; break;
                case 'Earth': this.element = 'Air'; break;
                case 'Air': this.element = 'Water'; break;
                case 'Water': this.element = 'Fire'; break;
            }
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
}

let AllMelons = solve();

let waterMelon = new AllMelons.Watermelon(5, "Rotten");
console.log(waterMelon.elementIndex);