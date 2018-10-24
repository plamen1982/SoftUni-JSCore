function sortArray(arr, command) {

        let dispatcher = {
            asc: (a, b) => a - b,
            desc: (a, b) => b - a
        }

    return arr.sort(dispatcher[command]);

}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));