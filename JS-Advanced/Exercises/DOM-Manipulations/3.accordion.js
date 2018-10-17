function toggle() {
    console.log('toggle');
    let extra = document.getElementById('extra');
    if(extra.style.display = 'block') {
        extra.style.display = 'none';
        extra.childNodes[0].textContent = "Less";
    } else {
        extra.style.display = 'block';
        extra.childNodes[0].textContent = "More";
    }
}