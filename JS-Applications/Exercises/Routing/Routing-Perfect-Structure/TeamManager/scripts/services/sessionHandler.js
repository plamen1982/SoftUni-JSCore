// ----------------------- Session handler -------------------------------------------------------------------------
//    has methods that wrap session build-in browser functionality (localStorage)

let sessionHandler = (function () {
    function getAuthToken() {
        return localStorage.getItem('authToken');
    }

    function getUsername() {
        return localStorage.username;
    }

    function getUserId() {
        return localStorage.getItem('userId');
    }

    function isAuthenticated() {
        return getAuthToken() !== null;
    }

    function getUserTeamId() {
        return localStorage.getItem('teamId');
    }

    function updateSessionItemForUser(itemName, newValue) {
        localStorage.setItem(itemName, newValue);
    }


    function saveSessionForUser(authToken, userId, username, teamId) {
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('userId', userId);
        localStorage.setItem('username', username);
        localStorage.setItem('teamId', teamId)
    }

    function destroySessionForUser() {
        localStorage.clear();
    }

    return {
        getAuthToken,
        saveSessionForUser,
        destroySessionForUser,
        getUsername,
        getUserId,
        isAuthenticated,
        getUserTeamId,
        updateSessionItemForUser
    }
})();
// ----------------------- END Session handler ---------------------------------------------------------------------
