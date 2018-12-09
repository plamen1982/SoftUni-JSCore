$(() => {
    const app = Sammy('#main', function () {
        // TODO: Define all the routes
        this.use('Handlebars', 'hbs');
        this.route('get', '/index.html', displayHome);
        this.route('get', '#/home', displayHome);
        this.route('get', '#/about', displayAbout);

        this.route('get', '#/login', displayLogin);
        this.route('post', '#/login', sendLogin);

        this.route('get', '#/register', displayRegister);
        this.route('post', '#/register', sendRegister);


        function displayHome(context) {

            context.loggedIn = !!(sessionStorage.getItem('authtoken'));
            context.username = sessionStorage.getItem('username');
            context.teamId = !!(sessionStorage.getItem('teamId'));

            context.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function(context) {
                this.partial('./templates/home/home.hbs');
            }).catch(function(error) {
                auth.handleError(error)
            });
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

        function sendLogin(context) {
            auth.post()
        }

        function displayRegister(context) {

            context.loggedId = !!(sessionStorage.getItem('authtoke'));
            context.username = sessionStorage.getItem('username');
            context.teamId = !!(sessionStorage.getItem('teamId'));

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                registerForm: './templates/register/registerForm.hbs',
            }).then(function(context) {
                this.partial('./templates/register/registerPage.hbs');
            }).catch(auth.handleError);
        }

        function sendRegister(context) {
            let username = context.params.username;
            let password = context.params.password;
            let repeatPassword = context.params.repeatPassword;

            password !== repeatPassword ? auth.showError('The given passwords doesn\'t matched') : auth.register(username, password).then(function(userInfo) {
                auth.saveSession(userInfo);
                auth.showInfo('The registration is successful')
                displayHome(context);
            }).catch(function(error) {
                auth.handleError(error)
            });
        }
    });
    app.run();
});