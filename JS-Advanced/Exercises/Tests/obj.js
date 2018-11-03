let obj = {
    name: 'Peter',
    address: 'Serdica'
}

let gosho = Object.create(obj);
console.log()
//dynamically created property

obj.walk = function() {console.log(`${this.name} walking...`)}
// gosho.walk();
// gosho.name = "George";
// gosho.walk();

function HumanObj(name, address) {
    this.name = name;
    this.address = address;
}
let goshoHuman = new HumanObj('George', 'Mladost');

HumanObj.prototype.walk = function() {
    console.log(`${this.name} walking...`);
}

let kamen = HumanObj.bind({}, 'Kamen', 'Berkovica');
kamen.walk()

// goshoHuman.walk();

class Human {
    constructor(name = 'Stamat', address = 'Kaspi4an') {
        this.name = name;
        this.address = address;
    }

    get walk() {
        return `${this.name} walking...`;
    }

    set walk(name) {
        this.name = name;
    }
}

let stamat = new Human();
// stamat.walk = 'Peshi';
// console.log(stamat.walk);



