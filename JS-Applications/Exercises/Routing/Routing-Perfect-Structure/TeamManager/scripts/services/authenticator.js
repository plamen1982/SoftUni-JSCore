// ------------------------- Authenticator -------------------------------------------------------------------------
//     has methods for login, logout and register (they depend on the requester)

let authenticator = (function () {
    function login(data) {
        return requester.post('user', 'login', data, 'basic')
    }

    function logout() {
        return requester.post('user', '_logout')
    }

    function register(data) {
        return requester.post('user', '', data, 'basic');
    }

    return {
        login,
        logout,
        register
    }
})();

// ------------------------- END Authenticator ---------------------------------------------------------------------

