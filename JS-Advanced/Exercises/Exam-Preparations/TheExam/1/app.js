function acceptance() {
	let companyName = $( "input[name*='shippingCompany']");
	let productName  = $( "input[name*='productName']");
	let productQuantity  = $( "input[name*='productQuantity']");
	let scrape = $( "input[name*='productScrape']" );
	let warehouseList = $('#warehouse');
if(companyName.val() !== '' && productName.val() !== '') {
	if(typeof(+productQuantity.val()) === 'number' && typeof(+scrape.val()) === 'number') {
		let diff = +productQuantity.val() - +scrape.val();
			if(diff > 0) {
				let div = $('<div>');
				let p = $('<p>');
				let button = $('<button>');
				p.text(`[${companyName.val()}] ${productName.val()} - ${diff} pieces`);
				button.text('Out of stock');
				div.append(p);
				div.append(button);
				warehouseList.append(div);
				companyName.val('');
				productName.val('');
				productQuantity.val('');
				scrape.val('');
				button.on('click', function() {
					div.remove();
				});
			}
		}
	}
}
