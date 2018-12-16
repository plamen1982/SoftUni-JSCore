// https://baas.kinvey.com/appdata/app_id/pets?query={"_acl.creator":"${user_id}"} - myPets
//https://baas.kinvey.com/appdata/app_id/pets/pet_id - deletePet
//https://baas.kinvey.com/appdata/app_id/pets/pet_id - editPet
//https://baas.kinvey.com/appdata/app_id/pets - createPet
//https://baas.kinvey.com/appdata/app_id/pets?query={}&sort={"likes": -1} - listAllPets

const petModel = (function() {
    
    const petUrl = `appdata/${storage.appKey}/pets`;

//ALL PETS----------------------------------------------------------

const allPets = function() {
    const url = petUrl + '?query={}';

    return requester.get(url);
}

//ADD PET----------------------------------------------------------

const add = function(params) {
    let pet = {
        "name": params.name,
        "description": params.description,
        "imageURL": params.imageURL,
        "category": params.category,
        "likes": params.likes,
    }
    
    return requester.post(petUrl, pet);

}

const getPet = function(petId) {

    const url = `${petUrl}/${petId}`;
    
    return requester.get(url)
}

//ADD PET----------------------------------------------------------

const upVote = function(petId) {
    const url = `${petUrl}/${petId}`;
    
    return requester.get(url).done(function(pet) {
        pet.likes = +pet.likes + 1;
        pet.likes += ""; 
       return requester.put(url, pet);
    })

}

//EDIT PET PUT----------------------------------------------------------

const edit = function(ctx) {

    const petId = ctx.params.id;
    const url = `${petUrl}/${petId}`;

    const pet = {
        "name": ctx.params.name,
        "description": ctx.params.description,
        "imageURL": ctx.params.imageURL,
        "category": ctx.params.category,
      };

    return requester.put(url, pet);
}


//POST DELETE POST----------------------------------------------------------

const deletePost = function(ctx) {
    debugger;

    const petId = ctx.params.id;
    const url = `${petUrl}/${petId}`;

    return requester.del(url);
}
    return {
        add,
        allPets,
        getPet,
        upVote,
        edit,
        deletePost,
    }
})();