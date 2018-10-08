function heroicInventory(inputArray) {
    let regex = /\s*\/\s*/;

    let result = inputArray
        .map((line) => {
        return line.split(regex)
    })
    .map((hero) => {
        let obj = {}
        obj.name = hero[0];
        obj.level = Number(hero[1]);
        obj.items = [];
        if(hero[2].length > 2) {
            obj.items = hero[2].split(', ');
        }
        return JSON.parse(JSON.stringify(obj));
    })

    return JSON.stringify(result);

}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));