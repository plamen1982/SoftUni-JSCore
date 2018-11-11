function addDestination() {
   let inputData =  $('.inputData');
   let [city, country] = inputData
    .toArray()
    .map(inputElement => inputElement.value);
    //Clear the Input
    inputData.toArray().forEach(inputElement => { inputElement.value = '' });

    let season = $('#seasons option:selected').text();
    //Reset option to initial value
    $('#seasons').prop('selectedIndex', 0);

    let table = $('#destinationsList');
    let newRow = `<tr><td>${city}, ${country}</td><td class="season">${season}</td></tr>`;
    if(city && country) {
        table.append(newRow);
    }

    let seasons = $('#destinationsList .season')
    .toArray()
    .map(season => season.textContent);
    
    let summer = $('#summer');
    let autumn = $('#autumn');
    let winter = $('#winter');
    let spring = $('#spring');
    
    let numberSummers = seasons.filter(season => season === "Summer");
    let numberAutumn = seasons.filter(season => season === "Autumn");
    let numberWinter = seasons.filter(season => season === "Winter");
    let numberSpring = seasons.filter(season => season === "Spring");

    summer.val(numberSummers.length);
    autumn.val(numberAutumn.length);
    winter.val(numberWinter.length);
    spring.val(numberSpring.length);

}