function addItem() {
    
    console.log('add');
    let newItemText = document.getElementById('newItemText').value;
    let newItemValue = document.getElementById('newItemValue').value;    
    let option = document.createElement('option');
    option.text = newItemText;
    option.value = newItemValue;
    let menu = document.getElementById('menu');
    menu.appendChild(option);
    document.getElementById('newItemText').value = "";
    document.getElementById('newItemValue').value = "";

}