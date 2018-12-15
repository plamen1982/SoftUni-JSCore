const home = (function () {
    const index = function (ctx) {
        if (!userModel.isAuthorized()) {
            ctx.redirect('#/login');

            return;
        }
        
        flightModel.publicFlights()
                .done(function(flights) {
                    ctx.flights = flights;
                    ctx.partial('views/home/index.hbs');
                })
        
    };

    return {
        index
    };
}());