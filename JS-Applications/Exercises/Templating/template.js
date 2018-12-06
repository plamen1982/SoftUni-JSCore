$(() => {
    const allCats = $("#allCats");
    const codes = {};
    renderCatTemplate();

    function renderCatTemplate() {
        let source = $("#cat-template").html();
        let template = Handlebars.compile(source);
        codes.cats = window.cats;
        allCats.html(template(codes));

        let showMoreBtn = $(".btn-primary");
        showMoreBtn.on("click", function (e) {
            $(e.target).text() === "Show status code" ? $(e.target).text("Hide status code") : $(e.target).text("Show status code");
            $(e.target).next().toggle();
        });
    }
});