let viewController = (function () {
    function manageHeader() {
        // to the context that will be passed to the template we add property isAuthenticated
        // so that we can define what links to show in the menu
        let context = {
            // isAuthenticated: sessionHandler.isAuthenticated(),
            // not needed if you register helper
            username: sessionHandler.getUsername()
        };

        requester.getTemplate('header', 'common')
            .then(function (template) {
                // Use Handlebars to load the templates
                let templatePartial = Handlebars.compile(template);
                $('header').empty().append(templatePartial(context));

            })
            .catch(notificationHandler.handleError);
    }

    function manageFooter() {
        // to the context that will be passed to the template we add property isAuthenticated
        // so that we can define what links to show in the menu
        // let context = {};

        requester.getTemplate('footer', 'common')
            .then(function (template) {
                // Use Handlebars to load the templates
                let templatePartial = Handlebars.compile(template);
                $('footer').empty().append(templatePartial());

            })
            .catch(notificationHandler.handleError);
    }

    return {
        manageHeader,
        manageFooter
    }
})();