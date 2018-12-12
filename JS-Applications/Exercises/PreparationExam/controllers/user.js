const user = (function(){
    const getLogin = function(ctx){
        ctx.partial('views/user/login.hbs');
    };

    const postLogin = function(ctx){
        var username = ctx.params.username;
        var password = ctx.params.password;
        
        userModel.login(username, password).done(function(data){
            storage.saveUser(data);
            notification.info('Logged In');                      
            ctx.redirect('#/');
        }).fail(function() {
            notification.error('Username/Password is incorrect!');
        });
    };

    const logout = function(ctx){
        userModel.logout().done(function(){
            storage.deleteUser();
            notification.info('Logout successful');            
            ctx.redirect('#/login');
        });
    }

    const getRegister = function(ctx) {
        ctx.partial('views/user/register.hbs');
    };

    const postRegister = function(ctx) {
        userModel.register(ctx.params).done(function(data){
            storage.saveUser(data);
            notification.info('Registration successful');
            ctx.redirect('#/home');
        });
    }

    const initializeLogin = function(){
        if(userModel.isAuthorized()){
            let userInfo = storage.getData('userInfo');
            $('#userViewName').text(userInfo.username);
            $('#logoutContainer').removeClass('d-none');
            $('.hidden-when-logged-in').addClass('d-none');
        } else {
            $('#logoutContainer').addClass('d-none');
            $('.hidden-when-logged-in').removeClass('d-none');
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