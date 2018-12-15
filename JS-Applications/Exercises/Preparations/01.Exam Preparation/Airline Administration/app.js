const app = Sammy('#container', function(){
    this.use('Handlebars', 'hbs');
    this.before({except: {}}, function() {
        user.initializeLogin();
    });

    this.get('#/', home.index);
    this.get('#/login', user.getLogin);
    this.post('#/login', user.postLogin);
    this.get('#/logout', user.logout);
    this.get('#/register', user.getRegister);
    this.post('#/register', user.postRegister);
    this.post('#/register', user.postRegister);
    this.get('#/flight/add', flight.addGet);
    this.post('#/flight/add', flight.addPost);
    this.get('#/flights/:flightId', flight.details);
    this.get('#/edit/:flightId', flight.editGet);
    this.put('#/edit/:flightId', flight.editPut);
    this.get('#/delete/:flightId', flight.deleteGet);
    this.post('#/delete/:flightId', flight.deletePost);
    this.get('#/myFlights', flight.myFlights);
});

$(function(){
    app.run('#/');
});