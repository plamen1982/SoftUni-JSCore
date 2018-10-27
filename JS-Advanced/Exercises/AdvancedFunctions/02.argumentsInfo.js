function argumentInfo() {
    let typeCount = {};

    for(let arg of arguments) {
        console.log(`${typeof(arg)}: ${arg}`);
        if(!typeCount[typeof(arg)]) {
            typeCount[typeof(arg)] = 1;
        } else {
            typeCount[typeof(arg)] += 1;
        }
    }
Object.keys(typeCount).sort((prev, curr) => typeCount[prev] < typeCount[curr]).forEach((sortedKey) => { console.log(`${sortedKey} = ${typeCount[sortedKey]}`) });

}

argumentInfo('cat', 42, 42,  function () { console.log('Hello world!'); })