const user = (function(){

 // LOGIN-----------------------------------------------------------------------------------------------
   
    const getLogin = function(ctx){
        if (userModel.isAuthorized()) {
            ctx.redirect('#/');
        }
        ctx.partial('views/user/login.hbs');
    };

    const postLogin = function(ctx){
        var username = ctx.params.username;
        var password = ctx.params.pass;
        
        userModel.login(username, password).done(function(data){
            storage.saveUser(data);
            notifications.showInfo('Login successful!');            
            ctx.redirect('#/');
        });
    };

 // LOGOUT-----------------------------------------------------------------------------------------------

    const logout = function(ctx){
        userModel.logout().done(function(){
            storage.deleteUser();
            notifications.showInfo('Logout successful!');            

            ctx.redirect('#/');
        });
    }

 // REGISTER-----------------------------------------------------------------------------------------------

    const getRegister = function(ctx) {
        if (userModel.isAuthorized()) {
            ctx.redirect('#/');
        }
        ctx.partial('views/user/register.hbs');
    };

    const postRegister = function(ctx) {
        if (ctx.params.username.length < 5 || !ctx.params.pass || ctx.params.pass !== ctx.params.checkPass) {
            notifications.showError('Username should be atleast 5 characters long and passwords must match!');
            return;
        }
        userModel.register(ctx.params).done(function(data){
            storage.saveUser(data);
            notifications.showInfo('Register successful!');            
            ctx.redirect('#/');
        });
    }

 // INITIALIZE-LOGIN-----------------------------------------------------------------------------------------------

    const initializeLogin = function(){
        let userInfo = storage.getData('userInfo');
// check the html id's and classes d-none is OK
        if(userModel.isAuthorized()){
            $('#welcomeUsername').text(userInfo.username);
            $('#logoutContainer').removeClass('d-none');
            $('.guestNav').addClass('d-none');
        } else {
            $('#logoutContainer').addClass('d-none');
            $('.guestNav').removeClass('d-none');
        }
    };

    return {
        getLogin,
        postLogin,
        logout,
        getRegister,
        postRegister,
        initializeLogin
    };
}());