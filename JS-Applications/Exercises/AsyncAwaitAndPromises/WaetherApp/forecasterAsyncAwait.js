function attachEvents() {

    let baseUrl = 'https://judgetests.firebaseio.com';

    const conditions = {
        'Sunny': '&#x2600;',
        'Partly sunny':	'&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;'
    }

    $('#submit').on('click', async() => {
        let requestObject = {
            url: `${baseUrl}/locations.json`,
            method: "GET"
        }
        try {
            const locations = await $.ajax(requestObject);
            getLocations(locations);
        } catch(e) {
            errorHandler(e);
        }
    });

    async function getLocations(locations) {
        let nameLocation = $('#location').val();
        let locationObj = locations.find((location) => nameLocation === location.name);
        let todayRequest = {};
        let upcomingRequest = {};
        try {
            if(locationObj) {
                todayRequest = {
                    url: `${baseUrl}/forecast/today/${locationObj.code}.json`,
                    method: "GET"
                }
        
                upcomingRequest = {
                    url: `${baseUrl}/forecast/upcoming/${locationObj.code}.json`,
                    method: "GET"
                }

                const [todayResponse, upcomingResponse] = await Promise.all([
                    $.ajax(todayRequest),
                    $.ajax(upcomingRequest)
                ]);
    
                renderToday(todayResponse);
                renderUpcomingDays(upcomingResponse);

            } else {
                throw new Error('No such location.')
            }
        } catch(e) {
            errorHandler(e);
        }
    }

    function errorHandler(e) {
        let forecast = $('#forecast');
        forecast.show();
        let upcomingContainer = $('#upcoming');
        let current = $('#current');
        upcomingContainer.empty();
        current.empty();
        current.append(e);
    }

    function renderToday(todayResponse) {
        let forecast = $('#forecast');
        forecast.show();
        let $conditions = $('.condition');
        $conditions.empty();
        let currentDay = $('#current');
        currentDay.empty();
        let label = $('<div>');
        label.addClass('label');
        label.text('Current conditions');
        currentDay.append(label);
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
        upcomingContainer.empty();
        let $upcomings = $('.upcoming');
        $upcomings.empty();
        let label = $('<div>');
        label.addClass('label');
        label.text('Three-day forecast');
        upcomingContainer.append(label);
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
