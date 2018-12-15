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
    return {
        add,
        publicFlights,
        getFlight,
    }
})();