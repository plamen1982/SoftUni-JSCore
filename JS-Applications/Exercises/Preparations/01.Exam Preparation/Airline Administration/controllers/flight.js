const flight = (function() {

// ADD FLIGHT GET----------------------------------------------------------

    const addGet = function(ctx) {
        if(!userModel.isAuthorized()) {
            ctx.redirect('#/login');

            return;
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

// EDIT GET ----------------------------------------------------------

    const editGet = function(ctx) {
        const flightId = ctx.params.flightId;
        flightModel.getFlight(flightId)
            .done(function(flight) {
                if(flight._acl.creator !==storage.getData('userInfo').id) {
                    notifications.showError('You can only edit your own flights');
                    ctx.redirect('#/flight' + flight._id);

                    return;
                }

                ctx.flight = flight;
                ctx.partial('views/flight/edit.hbs');
            })
    }

// EDIT PUT ----------------------------------------------------------

    const editPut = function(ctx) {
        const flightId = ctx.params.flightId;
        if (!ctx.params.destination || !ctx.params.origin || !ctx.params.cost || !ctx.params.seats) {
            notifications.showError('Please fill the fields!');

            return;
        }

        flightModel.edit(ctx.params)
            .done(function() {
                notifications.showInfo('Flight edited succesfully!')
                ctx.redirect(`#/flights/${flightId}`);
            });
    }

// MYFLIGHTS GET ----------------------------------------------------------

    const myFlights = function(ctx) {
    
        if(!userModel.isAuthorized()) {
            ctx.redirect('#/login');

            return;
        }

        const userId = storage.getData('userInfo').id;
        flightModel.myFlights(userId)
            .done(function(flights) {
                ctx.flights = flights;
                ctx.partial('views/flight/myFlights.hbs');
            })

    }

// DELETE POST ----------------------------------------------------------

    const deletePost = function(ctx) {
        const flightId = ctx.params.flightId;
        flightModel.deletePost(flightId)
            .done(function() {
                notifications.showInfo('You delete the flight successfuly');
                ctx.redirect('#/');
            });
    }

    return {
        addGet,
        addPost,
        details,
        editGet,
        editPut,
        deletePost,
        myFlights,
    }
})();