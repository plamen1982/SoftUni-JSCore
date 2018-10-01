function spiceMustFlow(input) {
    let spice = Number(input[0]);

    let days = 0;
    let extractedSpice = 0;
    while(spice >= 100) {
        extractedSpice += spice - 26;
        spice -= 10;
        days++
    }
    if(days > 0) {
        extractedSpice -= 26;
    } 
    console.log(days);
    console.log(extractedSpice);
}

// spiceMustFlow(['100']);
// spiceMustFlow(['450']);
// spiceMustFlow(['200']);
spiceMustFlow(['2']);