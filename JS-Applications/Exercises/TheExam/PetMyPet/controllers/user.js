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
        var password = ctx.params.password;
        
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
        if (ctx.params.username.length < 3 || ctx.params.password.length > 5) {

            userModel.register(ctx.params).done(function(data){
                storage.saveUser(data);
                notifications.showInfo('User registration successful.');            
                ctx.redirect('#/');
            });
        } else {
            notifications.showError('Username must be at least 3 symbols", "Password must be at least 6 symbols');
            return;
        }

    }

 // INITIALIZE-LOGIN-----------------------------------------------------------------------------------------------

    const initializeLogin = function(){
        let userInfo = storage.getData('userInfo');
// check the html id's and classes d-none is OK
        debugger
        if(userModel.isAuthorized()){
            
            $('#username').text(`Welcome, ${userInfo.username}`);
            $('.navbar-anonymous').remove();
        } else {
            $('.navbar-dashboard').remove();
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