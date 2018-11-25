function realEstateAgency() {
	let buttonRegOffer = $("#regOffer button");
	buttonRegOffer.on('click', registerOffer);

	let buttonFindOffer = $('#findOffer button');
	buttonFindOffer.on('click', findFirstOffer);
	let agencyCommision = 0;
	function registerOffer() {

		let building = $('#building');
		let apartmentRent = $("input[name*='apartmentRent']");
		let apartmentType = $("input[name*='apartmentType']");
		let agencyCommission = $("input[name*='agencyCommission']");
		let message = $('#message');
	
		let div1 = $('<div>')
		div1.addClass('apartment')
		let rent = $('<p>');
		rent.text(`Rent: ${apartmentRent.val()}`);
		let type = $('<p>');
		type.text(`Type: ${apartmentType.val()}`);
		let commision = $('<p>');
		commision.text(`Commission: ${agencyCommission.val()}`);
		div1.append(rent);
		div1.append(type);
		div1.append(commision);
		let isColonCharExist = false;
	
		if (apartmentType.val().indexOf(':') !== -1) {
			isColonCharExist = true;
		}
		if (typeof (+apartmentRent.val()) === 'number' && typeof (+agencyCommission.val()) === 'number') {
			if (+agencyCommission.val() >= 0 && +agencyCommission.val() <= 100) {
				if (apartmentType.val() !== '' && isColonCharExist === false) {
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
	
	}
	
	function findFirstOffer() {

		let theWholeOffer = $('.apartment');
		let thePriceApartment;
		let theTypeApartment;
		let theCommision;
		let familyBudget = +($("input[name*='familyBudget']").val());
		let familyApartmentType = $("input[name*='familyApartmentType']").val();
		let familyName = $("input[name*='familyName']").val();
		let diffBetwBudgetAndPrice = 0;
		let isOfferFound = false;

		if (typeof (familyBudget) === 'number' && familyBudget > 0 && familyApartmentType.length > 0 && familyName.length > 0) {
			if (theWholeOffer.length > 0) {

				theWholeOffer.toArray().forEach((offer) => {
					if(offer.childNodes[0].textContent.indexOf(':') > -1) {
						thePriceApartment = +offer.childNodes[0].textContent.split(':')[1].trim();
						theTypeApartment = offer.childNodes[1].textContent.split(':')[1].trim();;
						theCommision = +offer.childNodes[2].textContent.split(':')[1].trim();;
		
						if (familyApartmentType === theTypeApartment) {
							diffBetwBudgetAndPrice = familyBudget - ( thePriceApartment + thePriceApartment * (theCommision/100) )
							if (diffBetwBudgetAndPrice > 0 && !isOfferFound) {
								successfulOffer(offer);
								isOfferFound = true;
							} else {
								message.textContent = '';
								message.textContent = 'We were unable to find you a home, so sorry 😞';
							}
						} else {
							message.textContent = '';
							message.textContent = 'We were unable to find you a home, so sorry 😞';
						}
					}
				});
			}
		}
	}

	function successfulOffer(offer) {
		let building = $('#building');
		let message = $('#message');
		let textHeader = $('#roof h1');
		let familyBudget = +($("input[name*='familyBudget']").val());

		thePriceApartment = +offer.childNodes[0].textContent.split(':')[1].trim();
		theCommision = +offer.childNodes[2].textContent.split(':')[1].trim();;
		message.text('');
		message.text('Enjoy your new home! :)');
		agencyCommision += familyBudget * ( theCommision/100 ) + thePriceApartment * ( theCommision/100);
		textHeader.text(`Agency profit: ${agencyCommision} lv.`)
		let div = $('<div>');
		div.addClass('apartment');
		div.css('border', '2px solid red');
		let p1 = $('<p>');
		p1.text($("input[name*='familyName']").val())
		let p2 = $('<p>');
		p2.text('live here now')
		let button = $('<button>');
		button.text('MoveOut');
		offer.parentElement.removeChild(offer);
		div.append(p1);
		div.append(p2);
		div.append(button);
		building.append(div);
		$("input[name*='familyBudget']").val('');
		$("input[name*='familyApartmentType']").val('');
		$("input[name*='familyName']").val('');
		button.on('click', function(){

			let familyName = $(this).closest('.apartment').find('p:first').text();
			$(this).closest('.apartment').remove();
			message.text(`They had found cockroaches in ${familyName}'s apartment`);
		});
	}
}