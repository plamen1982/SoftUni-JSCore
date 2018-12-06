function attachEvents() {
    $('#btnLoadTowns').on('click', renderTowns);
    function renderTowns() {
        let towns = {};
        let root = $('#root');
        let source = $('#towns-template').html();
        let template = Handlebars.compile(source);
        $towns = $('#towns');
        towns.towns = $towns.val().split(',').map(town => { 
            return { name: town.trim()} 
        });
        let renderedHtml = template(towns);
        root.html(renderedHtml);
    }
}