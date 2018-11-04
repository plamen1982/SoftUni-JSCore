class Rat {
    constructor(name) {
        this.name = name;
        this.unityRats = [];
    }

    unite(otherRat) {
        if(otherRat instanceof Rat) {
            this.unityRats.push(otherRat);
        }
    }

    getRats() {
        return this.unityRats;
    }

    toString() {
        let str = `${this.name}\n`;
        this.unityRats.forEach((rat) => {
            str += `##${rat.name}\n`;
        });

        return str;
    }
}

let peshoRat = new Rat("Pesho");
console.log(peshoRat.toString());

peshoRat.unite(new Rat("Gosho"));
peshoRat.unite(new Rat("Sasho"));
console.log(peshoRat.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(peshoRat.toString());
