const flight = (function() {
    // ADD FLIGHT ----------------------------------------------------------
    const addGet = function(ctx) {
        if(!userModel.isAuthorized()) {
            ctx.redirect('#/login');
        }
        ctx.partial('views/flight/add.hbs');
    }

    const addPost = function(ctx) {
        
        if(!ctx.params.destination || !ctx.params.orgin || !ctx.params.departureDate || !ctx.params.departureTime || !ctx.params.seats || !ctx.params.cost || !ctx.params.img) {
            notifications.showError('Please fill the fields!');
            return;
        }

        flightModel.add(ctx.params).done(function() {
            notifications.showInfo('Flight added successfully!');
            ctx.redirect('#/');
        });
    }

    return {
        addGet,
        addPost,
    }
})();