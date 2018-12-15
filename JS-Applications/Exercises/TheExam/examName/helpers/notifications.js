const notifications = (function () {
    $(document).on({
        ajaxStart: function () {
            $('#loadingBox').show();
        },
        ajaxStop: function () {
            $('#loadingBox').hide();
        }
    })
    $('#infoBox', '#errorBox').on('click', function () {
        $(this).fadeOut();
    })

    function showInfo(message) {
        $('#infoBox').show();
        $('#infoBox > span').text(message);
        $('#infoBox').on('click', function () {
            $(this).fadeOut();
        })
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 3000)
        
    }

    function showError(error) {
        $('#errorBox').show();
        $('#errorBox > span').text(error);
        $('#errorBox').on('click', function () {
            $(this).fadeOut();
        })
        setTimeout(function () {
            $('#errorBox').fadeOut();
        }, 3000)
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    return {
        showInfo, showError, handleAjaxError
    }
}());