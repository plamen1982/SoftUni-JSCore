function addAndRemoveElements(inputArray) {
    let outputArray = [];
    inputArray.forEach((command, index, array) => {
        if(command === 'add') {
            outputArray.push(index + 1);
        } else if(command === 'remove' && array.length > 0) {
            outputArray.pop();
        }
    });
    if(outputArray.length === 0) {
        console.log('Empty');
    }
    outputArray.forEach((element) => {
        console.log(element);
    })
}

// addAndRemoveElements(['add', 'add', 'add', 'add']);
// addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);