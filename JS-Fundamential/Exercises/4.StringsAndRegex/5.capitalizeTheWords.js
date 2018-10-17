function capitalizeTheWords(theString) {
return theString
    .toLowerCase()
    .split(' ')
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ');
}

// console.log(capitalizeTheWords('Capitalize these words'));
console.log(capitalizeTheWords('Was that Easy? tRY thIs onE for SiZe!'));