const flightModel = (function() {
    
    const flightUrl = `appdata/${storage.appKey}/flights`;

//ADD FLIGHT POST----------------------------------------------------------

    const add = function(params) {
        let flight = {
            "destination": params.destination,
            "origin": params.origin,
            "departure": params.departure,
            "time": params.time,
            "seats": params.seats,
            "cost":params.cost,
            "image": params.img,
            "isPublished": !!params.public
        }

        return requester.post(flightUrl, flight);
    }

//PUBLIC FLIGHTS GET----------------------------------------------------------

    const publicFlights = function() {
        const url = flightUrl + '?query={"isPublished":true}';

        return requester.get(url);
    }

//GET FLIGHT GET----------------------------------------------------------

    const getFlight = function(flightId) {
        const url = `${flightUrl}/${flightId}`;

        return requester.get(url);
    }

//EDIT FLIGHT PUT----------------------------------------------------------

    const edit = function(params) {
        const url = `${flightUrl}/${params.flightId}`;

        const flight = {
            "destination": params.destination,
            "origin": params.origin,
            "departure": params.departure,
            "time": params.time,
            "seats": params.seats,
            "cost":params.cost,
            "image": params.img,
            "isPublished": !!params.public
          };

        return requester.put(url, flight);
    }

//GET MY FLIGHTS----------------------------------------------------------

    const myFlights = function(userId) {
        const url = `${flightUrl}?query={"_acl.creator":"${userId}"}`;

        return requester.get(url);
    }

//POST DELETE POST----------------------------------------------------------

    const deletePost = function(flightId) {
        const url = `${flightUrl}/${flightId}`;

        return requester.del(url);
    }

    return {
        add,
        publicFlights,
        getFlight,
        edit,
        myFlights,
        deletePost,
    }
})();