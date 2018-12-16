const app = Sammy('#container', function(){
    this.use('Handlebars', 'hbs');
    this.before({except: {}}, function() {

        user.initializeLogin();
    });

    this.get('#/', pet.allPets);
    this.get('#/login', user.getLogin);
    this.post('#/login', user.postLogin);
    this.get('#/logout', user.logout);
    this.get('#/register', user.getRegister);
    this.post('#/register', user.postRegister);
    this.get('#/addPet', pet.addGet);
    this.post('#/addPet', pet.addPost);
    this.get('#/myPets', pet.myPets);
    this.get('#/dashboard', pet.allPets);
    this.get('#/edit/:id', pet.editGet);
    this.put('#/edit/:id', pet.editPost);
    this.get('#/details/:id', pet.details);
    this.get('#/upVote/:id', pet.upVote);
    this.get('#/sortByCategories/:category', pet.sortByCategory);
    this.get('#/delete/:id', pet.deletePost);

});

$(function(){
    app.run('#/');
});