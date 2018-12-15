// --------------------- Requester ---------------------------------------------------------------------------------
//    has constants in itself
//    has methods that wrap the ajax requests and return promise

let requester = (function () {
    let constants = {
        baseUrl: 'https://baas.kinvey.com/',
        appKey: 'kid_SynoHt-_b',
        appSecret: '21140da8921b496bbf60d978afcfb153',
        templatesPath: './templates/',
        templateExtension: '.hbs'
    };

    function getAuth(type) {
        if (type == 'basic') {
            return "Basic " + btoa(constants.appKey + ":" + constants.appSecret)
        }
        return "Kinvey " + sessionHandler.getAuthToken();
    }

    function get(module, endpoint="", authType="") {
        return $.ajax({
            method: "GET",
            url: constants.baseUrl + module + "/" + constants.appKey + "/" + endpoint,
            headers: {
                'Authorization': getAuth(authType),
            }
        })
    }

    function post(module, endpoint, data, authType) {
        return $.ajax({
            method: "POST",
            url: constants.baseUrl + module + "/" + constants.appKey + "/" + endpoint,
            headers: {
                'Authorization': getAuth(authType),
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        })
    }

    function update(module, endpoint, data, authType) {
        return $.ajax({
            method: "PUT",
            url: constants.baseUrl + module + "/" + constants.appKey + "/" + endpoint,
            headers: {
                'Authorization': getAuth(authType),
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        })
    }

    function del(module, endpoint, authType) {
        return $.ajax({
            method: "DELETE",
            url: constants.baseUrl + module + "/" + constants.appKey + "/" + endpoint,
            headers: {
                'Authorization': getAuth(authType),
                'Content-Type': 'application/json'
            }
        })
    }

    function getTemplate(templateName, subfolderPath="") {
        subfolderPath = subfolderPath.length>0 ? subfolderPath+"/" : subfolderPath;
        return $.get(constants.templatesPath + subfolderPath + templateName + constants.templateExtension);
    }

    return {
        get,
        post,
        update,
        del,
        getTemplate
    }
})();
// --------------------- END Requester -----------------------------------------------------------------------------
