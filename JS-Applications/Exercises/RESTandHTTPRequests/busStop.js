function getInfo() {
    let stopId = $('#stopId').val();
    let url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;
    let $stopName = $('#stopName');
    let $buses = $('#buses');

    $.get(url)
        .then((data) => {
            const { buses, name } = data;
            $stopName.text(name);
            Object.keys(buses).sort((a, b) => a > b).forEach((busNumber) => {
                let li = $('<li>');
                li.text(`Bus ${busNumber} arrives in ${buses[busNumber]} minutes`);
                $buses.append(li);
            });
        })
        .fail(() => {
            $stopName.text('Error');
        });
}