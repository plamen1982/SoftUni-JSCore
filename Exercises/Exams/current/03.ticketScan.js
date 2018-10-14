function ticketScan(text, command) {
    let passRegex = /\s[A-Z]{1}[a-z]*-[A-Z]{1}[a-z]*[.\-A-Za-z]*\s/gm;
    let airportRegex = /\s[A-Z]{3}\/[A-Z]{3}\s/gm;
    let flightRegex = /\s[A-Z]{1,3}[0-9]{1,5}\s/gm;
    let companyRegex = /-\s[A-Za-z]+\*[A-Za-z]+\s/gm;

    let passName = text.match(passRegex)[0];
    let name = passName.split("-").join(" ").trim();
    let airports = text.match(airportRegex)[0].split("/");
    let fromAirport = airports[0].trim();
    let toAirport = airports[1].trim();
    let flight = text.match(flightRegex)[0];
    let flightNumber = flight.trim();
    let company = text.match(companyRegex)[0].split("*").join(" ").trim();
    let companyName = company.substring(2);
 
    if(command === 'name') {
        console.log(`Mr/Ms, ${name}, have a nice flight!`);
    } else if(command === 'flight') {
        console.log(`Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`)
    } else if(command === 'company') {
        console.log(`Have a nice flight with ${companyName}.`);
    } else if(command === 'all') {
        console.log(`Mr/Ms, ${name}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${companyName}.`)
    }
}

// ticketScan('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 'all')
ticketScan(' TEST-T.-TESTOV   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ', 'flight');