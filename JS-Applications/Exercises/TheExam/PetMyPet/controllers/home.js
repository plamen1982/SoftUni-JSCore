const home = (function () {
    const index = function (ctx) {
        if (!userModel.isAuthorized()) {
            ctx.redirect('#/');

            return;
        }
        const userId = storage.getData('userInfo').id;

        petModel.allPets()
            .done(function(pets) {
                let otherPets = pets.filter(pet => pet._acl.creator !== userId);
                ctx.pets = otherPets;
                ctx.partial('views/home/index.hbs');
                
            });  

    };

    return {
        index,
    };
}());