const flight = (function() {
    // ADD FLIGHT ----------------------------------------------------------
    const addGet = function(ctx) {
        if(!userModel.isAuthorized()) {
            ctx.redirect('#/login');
        }
        ctx.partial('views/flight/add.hbs');
    }

    const addPost = function(ctx) {
        
        if(!ctx.params.destination || !ctx.params.origin || !ctx.params.cost || !ctx.params.seats) {
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