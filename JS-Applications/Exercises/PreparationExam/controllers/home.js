 const home = (function(){
    const index = function(ctx) {
        ctx.partial('views/home/index.hbs');
    };

    return {
        index
    };
}());