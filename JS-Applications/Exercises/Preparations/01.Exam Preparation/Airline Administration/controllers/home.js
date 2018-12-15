const home = (function () {
    const index = function (ctx) {
        if (!userModel.isAuthorized()) {
            ctx.redirect('#/login');

            return;
        }
        ctx.partial('views/home/index.hbs');``

    };

    return {
        index
    };
}());