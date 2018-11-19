function realEstateAgency () {

let building = $('#building');
let apartmentRent = $( "input[name*='apartmentRent']");
let apartmentType = $( "input[name*='apartmentType']");
let agencyCommission = $( "input[name*='agencyCommission']");
let buttonRegOffer = $("#regOffer button");
let message = $('#message');
buttonRegOffer.on('click', function() {
	let div1 = $('<div>')
	div1.addClass('apartment')
	let rent = $('<p>');
	rent.text(`Rent: ${apartmentRent.val()}`);
	let type = $('<p>');
	type.text(`Type: ${apartmentType.val()}`);
	let commision = $('<p>');
	commision.text(`Commision: ${agencyCommission.val()}`);
	div1.append(rent);
	div1.append(type);
	div1.append(commision);
	let isColonCharExist = false; 

	if(apartmentType.val().indexOf(':') !== -1) {
		isColonCharExist = true;
	}
	if(typeof(+apartmentRent.val()) === 'number' && typeof(+agencyCommission.val()) === 'number') {
		if(+agencyCommission.val() >= 0 && +agencyCommission.val() <= 100) {
			if(apartmentType.val() !== '' && isColonCharExist === false) {
				building.append(div1);
				message.text('Your offer was created successfully.');
				apartmentRent.val('');
				apartmentType.val('');
				agencyCommission.val('');
			}
			else {
				message.text('Your offer registration went wrong, try again.');
			}
		} else {
			message.text('Your offer registration went wrong, try again.');
		}
	} else {
		message.text('Your offer registration went wrong, try again.');
	}
});

let buttonFindOffer = $('#findOffer button');

buttonFindOffer.on('click', function() {
	let conteinersApartment = $('.apartment');
	let theWholeOffer = $('.apartment');
	let thePriceApartment;
	let theTypeApartment;
	let theCommision;
	let findOfferContainer = $('#findOffer');
	let familyBudget = $( "input[name*='familyBudget']");
	let familyApartmentType = $( "input[name*='familyApartmentType']");
	let familyName = $( "input[name*='familyName']");
	let diffBetwBudgetAndPrice = 0;
	let agencyCommision = 0;
	let textHeader = $('#roof h1')
	if(theWholeOffer.length > 0) {
		theWholeOffer.toArray().forEach((offer) =>{
			thePriceApartment = +offer.childNodes[0].textContent;
			theTypeApartment = offer.childNodes[1].textContent;
			theCommision = +offer.childNodes[2].textContent;
			if(+familyBudget.val() > 0 || familyApartmentType.val() !== '' || familyName.val() !== '') {
				if(familyApartmentType.val() === theTypeApartment) {
					diffBetwBudgetAndPrice = +familyBudget.val() - (thePriceApartment + thePriceApartment * (theCommision/100))
					if(diffBetwBudgetAndPrice > 0) {
						message.text('');
						message.text('Enjoy your new home! :)');
						agencyCommision = +familyBudget.val() * theCommision + thePriceApartment * (theCommision/100);
						textHeader.text(`Agency profit: ${agencyCommision} lv.`)
						let div = $('<div>');
						div.addClass('apartment');
						div.css('border: 2px solid red');
						let p1 = $('<p>');
						p1.text(familyName.val())
						let p2 = $('<p>');
						p2.text('live here now')
						let button = $('<button>');
						button.text('MoveOut');
						offer.parentElement.removeChild(offer);
						div.append(p1);
						div.append(p2);
						div.append(button);
						building.append(div);
						familyBudget.val('')
						familyApartmentType.val('')
						familyName.val('')
						button.on('click', () => {
							debugger;
						});
					}
				}
			}
		}); 

	}
});

}

// <body onload="realEstateAgency()">
//     <section>
//         <div id="roof">
//             <h1>Agency profit: 0 lv.</h1>
//         </div>
//         <div id="building"></div>
//         <div id="offerManager">
//             <div id="regOffer">
//                 <h2>Reg offer</h2>
//                 <input type="text" name="apartmentRent" placeholder="Rent price...">
//                 <input type="text" name="apartmentType" placeholder="Apartment type...">
//                 <input type="text" name="agencyCommission" placeholder="Commission rate...">
//                 <button name="regOffer">Reg offer</button>
//             </div>
//             <div id="findOffer">
//                 <h2>Find offer</h2>
//                 <input type="text" name="familyBudget" placeholder="Family budget....">
//                 <input type="text" name="familyApartmentType" placeholder="Apartment type...">
//                 <input type="text" name="familyName" placeholder="Family name...">
//                 <button name="findOffer">Find offer</button>
//             </div>
//             <div id="notifications">
//                 <p id="message"></p>
//             </div>
//         </div>
//     </section>
// </body>
// </html>