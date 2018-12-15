let teamService = (function () {

    function loadAllTeams() {
        return requester.get('appdata', 'teams');
    }

    function loadInfoForTeam(id) {
        return requester.get('appdata', 'teams/' + id);
    }

    function loadTeamMembers(teamId) {
        return requester.get('user', '?query={"teamId": "' + teamId + '"}')
    }

    function createTeam(data) {
        let newTeam = {};
        newTeam.name = data.name;
        newTeam.comment = data.comment;
        return requester.post('appdata', 'teams', newTeam);
    }

    function checkValidTeamInfo(editedInfo) {
        // some validation
        if (editedInfo.name === '') {
            notificationHandler.showError("Team name must be at least 3 symbols long!");
            return false;
        }
        if (editedInfo.comment === '') {
            notificationHandler.showError("Team description must be at least 5 symbols long!");
            return false;
        }
        return true
    }

    function editTeam(oldTeamInfo, editedInfo) {
        let teamInfo = oldTeamInfo;
        teamInfo.name = editedInfo.name;
        teamInfo.comment = editedInfo.comment;
        return requester.update('appdata', 'teams/' + teamInfo._id, teamInfo)
    }

    return {
        loadAllTeams,
        loadInfoForTeam,
        loadTeamMembers,
        createTeam,
        editTeam,
        checkValidTeamInfo
    }
})();