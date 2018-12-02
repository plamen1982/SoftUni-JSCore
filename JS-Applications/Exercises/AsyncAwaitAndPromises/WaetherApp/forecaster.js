function attachEvents() {

    let baseUrl = 'https://judgetests.firebaseio.com';

    const conditions = {
        'Sunny': '&#x2600;',
        'Partly sunny':	'&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;'
    }

    let $submit = $('#submit').on('click', () => {
        let requestObject = {
            url: `${baseUrl}/locations.json`,
            method: "GET",
            success: getLocations,
            error: errorHandler
        }
        $.ajax(requestObject);

    });

    function getLocations(locations) {
        let nameLocation = $('#location').val();
        let locationObj = locations.find((location) => nameLocation === location.name);
        let todayRequest = {};
        let upcomingRequest = {};
        try {
            if(locationObj) {
                todayRequest = {
                    url: `${baseUrl}/forecast/today/${locationObj.code}.json`,
                    method: "GET",
                    error: errorHandler
                }
        
                upcomingRequest = {
                    url: `${baseUrl}/forecast/upcoming/${locationObj.code}.json`,
                    method: "GET"
                }
            } else {
                throw new Error('No such location.')
            }
        } catch(e) {
            let forecast = $('#forecast');
            forecast.text(e);
            forecast.show();
        }

        Promise.all([
            $.ajax(todayRequest),
            $.ajax(upcomingRequest)
        ]).then(([todayResponse, upcomingResponse]) => {
            renderToday(todayResponse);
            renderUpcomingDays(upcomingResponse);
        });
    }

    function errorHandler() {
        alert(e)
    }

    function renderToday(todayResponse) {
        let forecast = $('#forecast');
        forecast.show();
        let $conditions = $('.condition');
        $conditions.empty();
        let currentDay = $('#current');
        let conditionsContainer = $('<span>');
        conditionsContainer.addClass('condition');
        let symbol = `<span class="condition symbol">${conditions[todayResponse.forecast.condition]}</span>`;
        let location = `<span class="forecast-data">${todayResponse.name}</span>`;
        let temperature = `<span class="forecast-data">${todayResponse.forecast.low}&#176;/${todayResponse.forecast.high}&#176;</span>`;
        let condition = `<span class="forecast-data">${todayResponse.forecast.condition}</span>`;
        conditionsContainer.append(location);
        conditionsContainer.append(temperature);
        conditionsContainer.append(condition);
        currentDay.append(symbol);
        currentDay.append(conditionsContainer);

    }

    function renderUpcomingDays(upcomingDays) {
        let upcomingContainer = $('#upcoming');
        let $upcomings = $('.upcoming');
        $upcomings.empty();
        upcomingDays.forecast.forEach(upcomingDay => {
            let upcomings = $('<span>');
            upcomings.addClass('upcoming');
            let symbol = `<span class="condition symbol">${conditions[upcomingDay.condition]}</span>`;
            let temperature = `<span class="forecast-data">${upcomingDay.low}&#176;/${upcomingDay.high}&#176;</span>`;
            let condition = `<span class="forecast-data">${upcomingDay.condition}</span>`;
            upcomings.append(symbol);
            upcomings.append(temperature);
            upcomings.append(condition);
            upcomingContainer.append(upcomings);
        });
    }
}


// <div id="content">
//   <div id="request">
//     <input id="location" class='bl' type="text">
//     <input id="submit" class="bl" type="button" value="Get Weather">
//   </div>
//   <div id="forecast" style="display:none">
//     <div id="current">
//       <div class="label">Current conditions</div>
//     </div>
//     <div id="upcoming">
//       <div class="label">Three-day forecast</div>
//     </div>
//   </div>
// </div>