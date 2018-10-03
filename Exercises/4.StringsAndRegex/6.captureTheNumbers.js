function captureTheNumbers(inputArray) {
    return inputArray
        .join()
        .match(/\d+/g)
        .join(' ');
}

// console.log(captureTheNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']));
console.log(captureTheNumbers(['123a456', '789b987', '654c321', '0']));