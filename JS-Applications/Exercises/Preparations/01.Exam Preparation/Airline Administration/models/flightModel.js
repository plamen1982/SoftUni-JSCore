const flightModel = (function() {
    const flightUrl = `appdata/${storage.appKey}/flights`;
//ADD FLIGHT ----------------------------------------------------------
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
//PUBLIC FLIGHTS ----------------------------------------------------------
    const publicFlights = function() {
        const url = flightUrl + '?query={"isPublished":true}';
        return requester.get(url);
    }

    return {
        add,
        publicFlights,
    }
})();