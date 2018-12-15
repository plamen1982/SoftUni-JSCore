
// -------------------- Notification handler -----------------------------------------------------------------------
//  has method for showing error
// and for showing information in the DOM

let notificationHandler = (function () {
    // HTML Elements that are constantly in the DOM (not part of templates)
    let errorBox = $('#errorBox'),
        infoBox = $('#infoBox'),
        loadingBox = $('#loadingBox');


    // attach listener for ajax calls to the document
    $(document).on({
        ajaxStart: ()=>loadingBox.show(),
        ajaxStop: ()=>loadingBox.fadeOut()
    });

    function showError(message) {
        errorBox.find('span.notification-text').text(message);
        errorBox.find('span.close-symbol').on('click', function (e) {
            $(e.target).parent().fadeOut();
        });
        errorBox.show();
    }

    function showInfo(message) {
        infoBox.text(message);
        infoBox.show();
        setTimeout(function () {
            infoBox.fadeOut();
        }, 3000)
    }

    // function that handles errors that are result of unsuccessful promise --------------------------------------------
    function handleError(err) {
        console.dir(err)
        // showError(err.responseJSON.description);
    }

    return {
        showError,
        showInfo,
        handleError
    }
})();
// -------------------- END Notification handler -------------------------------------------------------------------

