(function () {
    Handlebars.registerHelper('ifCond', function(a, operator, b, opts) {
        var bool = false;
        switch(operator) {
            case '==':
                bool = a == b;
                break;
            case '>':
                bool = a > b;
                break;
            case '<':
                bool = a < b;
                break;
            default:
                throw "Unknown operator " + operator;
        }

        if (bool) {
            return opts.fn(this);
        } else {
            return opts.inverse(this);
        }
    });

    Handlebars.registerHelper("isAuthenticated", function (opts) {
        if(sessionHandler.getAuthToken()!== null){
            return opts.fn(this);
        }
        return opts.inverse(this);
    });

    Handlebars.registerHelper('hasTeam', function (opts) {
        if(sessionHandler.getUserTeamId() !== "undefined"
        && sessionHandler.getUserTeamId() !== ""){
            return opts.fn(this);
        }
        return opts.inverse(this);
    });


})();