const flightModel = function() {
    let flightUrl = `appdata/${storage.appKey}/flights`;
    const add= function(params) {
        let data = {           
            "destination": params.destination,
            "origin":params.origin,
            "departure":params.departureDate,
            "seats":params.seats,
            "cost":params.cost,
            "image":params.img,
            "isPublished": !!params.public
        }
    }
}();