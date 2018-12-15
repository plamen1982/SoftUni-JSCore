const flight = (function() {
// ADD FLIGHT GET----------------------------------------------------------
    const addGet = function(ctx) {
        if(!userModel.isAuthorized()) {
            ctx.redirect('#/login');
        }
        ctx.partial('views/flight/add.hbs');
    }

// ADD FLIGHT POST----------------------------------------------------------
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

// DETAILS GET ----------------------------------------------------------
    const details = function(ctx) {
        const flightId = ctx.params.flightId;
        flightModel.getFlight(flightId)
            .done(function(flight) {
                if (!flight) {
                    ctx.redirect('#/');
                    return;
                }
                if (flight._acl.creator !== storage.getData('userInfo').id) {
                    flight.display = 'none';
                } else {
                    ctx.flight = flight;
                    ctx.partial('views/flight/details.hbs');
                }

            });
    }

    return {
        addGet,
        addPost,
        details,
    }
})();