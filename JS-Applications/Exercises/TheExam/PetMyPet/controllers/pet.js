const pet = (function() {

// ADD PET GET----------------------------------------------------------

    const addGet = function(ctx) {
        if(!userModel.isAuthorized()) {
            ctx.redirect('#/');

            return;
        }

        ctx.partial('views/pets/addPet.hbs');
    }

// ADD PET POST----------------------------------------------------------

    const addPost = function(ctx) {
        // {name: "teamMecho11", description: "bla bla bla", imageURL: "http://via.placeholder.com/350x150", category: "Cat"}
        if(!ctx.params.name || !ctx.params.description || !ctx.params.imageURL || !ctx.params.category) {
            notifications.showError('Please fill the fields!');

            return;
        }

        const pet = {
            name: ctx.params.name,
            description: ctx.params.description,
            imageURL: ctx.params.imageURL,
            category: ctx.params.category,
            likes: 0,
        }

        petModel.add(pet).done(function() {
            notifications.showInfo('Pet created.');
            ctx.redirect('#/');
        });
    }

    const myPets = function(ctx) {
        const userId = storage.getData('userInfo').id;

        petModel.allPets()
            .done(function(pets) {
                let myPets = pets.filter(pet => pet._acl.creator === userId);
                ctx.pets = myPets;
                ctx.partial('views/pets/myPets.hbs');

                return;
            });  
    }

    // ALL PETS ---------------------------------------------------------------

    const allPets = function(ctx) {
        if (!userModel.isAuthorized()) {
            ctx.redirect('#/');

            return;
        }

        let userInfo = storage.getData('userInfo');
        // check the html id's and classes d-none is OK
                if(userModel.isAuthorized()){
                    $('#username').text(`Welcome, ${userInfo.username}`);
                    $('.navbar-anonymous').hide();
                    $('.navbar-dashboard').show();
                } else {
                    $('.navbar-dashboard').hide();
                    $('.navbar-anonymous').show();
                }

        const userId = storage.getData('userInfo').id;

        petModel.allPets()
            .done(function(pets) {
                let otherPets = pets.filter(pet => pet._acl.creator !== userId);
  
                otherPets.sort((a, b) => Number(b.likes) - Number(a.likes));

                ctx.pets = otherPets;
                
                ctx.partial('views/pets/dashboard.hbs');
                
                return;
            });  
    }


    const sortByCategory = function(ctx) {
        const category = ctx.params.category;
        const userId = storage.getData('userInfo').id;

        petModel.allPets()
            .done(function(pets) {
                let otherPets = pets.filter(pet => pet._acl.creator !== userId);
  
                otherPets.sort((a, b) => Number(b.likes) - Number(a.likes));

                let petsByCategory;

                if(category !== 'all') {
                    
                   petsByCategory = otherPets.filter((pet) => pet.category == category);

                   ctx.pets = petsByCategory;
                
                   ctx.partial('views/pets/dashboard.hbs');

                   return;
                } 

                ctx.pets = otherPets;
                

                ctx.partial('views/pets/dashboard.hbs');
                
                return;
            });
    }

    // DETAILS GET ----------------------------------------------------------

    const details = function(ctx) {
        const petId = ctx.params.id;
        petModel.getPet(petId)
            .done(function(pet) {

                if (!pet) {
                    ctx.redirect('#/');

                    return;
                }
                ctx.pet = pet;
                ctx.partial('views/pets/detailsOtherPet.hbs');

                return;
            });
    }

    const upVote = function(ctx) {
        const petId = ctx.params.id;

        petModel.upVote(petId).done(function(updatedPet) {
            notifications.showInfo('up vote!');   

            ctx.redirect('#/');
                
            return;
        })
    }

    // EDIT GET ----------------------------------------------------------

    const editGet = function(ctx) {
        const petId = ctx.params.id;
        petModel.getPet(petId)
            .done(function(pet) {

                ctx.pet = pet;
                ctx.partial('views/pets/detailsMyPet.hbs');
            })
    }

    const editPost = function(ctx) {

        petModel.edit(ctx)
            .done(function() {
                notifications.showInfo('Pet edited succesfully!');
                ctx.redirect('#/');

                return;
            });
    }

    const deletePost = function(ctx) {

        petModel.deletePost(ctx)
            .done(function() {
                notifications.showInfo('You delete the pet successfuly');
                ctx.redirect('#/');
            });
    }

        return {
            addGet,
            addPost,
            myPets,
            allPets,
            details,
            sortByCategory,
            upVote,
            editGet,
            editPost,
            deletePost,
        }
    })();