function solve() {
    
    let $departBtn = $('#depart');
    let $arriveBtn = $('#arrive');
    let infoBox = $('.info');
    let currentId = 'depot';
    let busInfo = {};

    let depart = () => {
        let url = `https://judgetests.firebaseio.com/schedule/${currentId}.json`;
        $.get(url).then((data) => {
            $departBtn.prop('disabled', true);
            $arriveBtn.prop('disabled', false);
            busInfo = data;
            infoBox.text(`Next stop ${busInfo.name}`);
            currentId = '';
            currentId = busInfo.next;
        });
    }

    let arrive = () => {
        $departBtn.prop('disabled', false);
        $arriveBtn.prop('disabled', true);
        infoBox.text(`Arriving at ${busInfo.name}`);
    }

    return {
      depart,
      arrive
    };
}

let result = solve();