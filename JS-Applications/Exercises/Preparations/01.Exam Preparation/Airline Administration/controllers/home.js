const home = (function () {
    const index = function (ctx) {
        if (!userModel.isAuthorized()) {
            ctx.redirect('#/login');

            return;
        }

    };

    return {
        index
    };
}());