let userManager = (function () {
    function handleLogin(dataForLogin) {
        // some validation
        if (dataForLogin.username == '') {
            notificationHandler.showError("Please enter valid username");
            return;
        }
        if (dataForLogin.password == '') {
            notificationHandler.showError("Please enter your password");
            return;
        }

        return authenticator.login(dataForLogin);
    }

    function handleLogout() {
        authenticator.logout();
        sessionHandler.destroySessionForUser();
        notificationHandler.showInfo("You successfully logged out!");
        viewController.manageHeader();
    }

    function handleRegister(dataForRegister) {
        // some validation
        if (dataForRegister.username == '') {
            notificationHandler.showError("Username must be at least 3 alphanumeric symbols");
            return;
        }
        if (dataForRegister.password == '') {
            notificationHandler.showError("Password must be at least 3 symbols long");
            return;
        }
        if (dataForRegister.password !== dataForRegister.repeatPassword) {
            notificationHandler.showError("The passwords you entered don't match");
            return;
        }

        // delete unnecessary property that should not be in the database
        delete dataForRegister.repeatPassword;

        // return promise
        return authenticator.register(dataForRegister);

    }

    function successLogin(data) {
        sessionHandler.saveSessionForUser(data._kmd.authtoken, data._id, data.username, data.teamId);
        notificationHandler.showInfo("Hello " + sessionHandler.getUsername());
        viewController.manageHeader();
    }

    function handleChangingTeam(userDataFromDb, teamId) {
        let userData = userDataFromDb;
        userData.teamId = teamId;
        return requester.update('user', sessionHandler.getUserId(), userData);
    }

    return {
        handleLogin,
        handleLogout,
        handleRegister,
        successLogin,
        handleChangingTeam
    }


})();