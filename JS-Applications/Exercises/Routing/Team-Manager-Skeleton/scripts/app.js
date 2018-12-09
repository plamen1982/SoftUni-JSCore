$(() => {
    const app = Sammy('#main', function () {
        // TODO: Define all the routes
        this.use('Handlebars', 'hbs');
        this.route('get', '#/index.html', () => {
            this.swap('<h2>Hello</h2>');
        })
    });
    app.run();
});