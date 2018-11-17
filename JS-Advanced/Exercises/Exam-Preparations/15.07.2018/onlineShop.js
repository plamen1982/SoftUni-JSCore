function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let product = $('.custom-select');   
    let price = $('#price');
    let quantity = $('#quantity');
    let submitButton = $('#submit');
    let display = $('.display');
    let capacity = $('#capacity');
    let sum = $('#sum');
    let totalQuantity = 0;
    let totalPrice = 0;

    product.on('input', () => {
        if(product.val() !== "") {
            submitButton.prop('disabled', false);
        } else {
            submitButton.prop('disabled', true);
        }
    }); 

    submitButton.on('click', () => {
        let result = `Product: ${product.val()} Price: ${price.val()} Quantity: ${quantity.val()}`;
        let li = $('<li>');
        li.text(result);
        display.append(li);
        totalQuantity += +quantity.val(); 
        totalPrice += +price.val();

        if(totalQuantity < 150) {
            capacity.val(totalQuantity);    
        } else {
            capacity.val('full');
            product.prop('disabled', true);
            price.prop('disabled', true);
            quantity.prop('disabled', true);
            capacity.addClass('fullCapacity');    
            submitButton.prop('disabled', true);
        }
        sum.val(totalPrice);
        quantity.val(1);
        price.val(1);
    });
}
