$(() => {
    const app = Sammy('#main', function () {
        // TODO: Define all the routes
        this.use('Handlebars', 'hbs');
        this.route('get', '/index.html', displayHome);
        this.route('get', '#/home', displayHome);;
        this.route('get', '#/about', displayAbout);
        this.route('get', '#/login', displayLogin);

        function displayHome(context) {

            context.loggedId = !!(sessionStorage.getItem('authtoke'));
            context.username = sessionStorage.getItem('username');
            context.teamId = !!(sessionStorage.getItem('teamId'));

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function(context) {
                this.partial('./templates/home/home.hbs');
            }).catch(auth.handleError);
        }

        function displayAbout(context) {

            context.loggedId = !!(sessionStorage.getItem('authtoke'));
            context.username = sessionStorage.getItem('username');
            context.teamId = !!(sessionStorage.getItem('teamId'));

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function(context) {
                this.partial('./templates/about/about.hbs');
            }).catch(auth.handleError);
        }

        function displayLogin(context) {

            context.loggedId = !!(sessionStorage.getItem('authtoke'));
            context.username = sessionStorage.getItem('username');
            context.teamId = !!(sessionStorage.getItem('teamId'));

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                loginForm: './templates/login/loginForm.hbs',
            }).then(function(context) {
                this.partial('./templates/login/loginPage.hbs');
            }).catch(auth.handleError);
        }
    });
    app.run();
});