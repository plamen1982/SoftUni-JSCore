$(function () {

    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

// ------------- HOME PAGE ---------------------------
        this.get('index.html', function (context) {
            context.teamId = sessionHandler.getUserTeamId();
            context.partial('./templates/home/home.hbs')
        });
        this.get('#/home', function (context) {
            context.teamId = sessionHandler.getUserTeamId();
            context.partial('./templates/home/home.hbs')
        });

// ------------- ABOUT PAGE ---------------------------
        this.get('#/about', function () {
            this.partial('./templates/about/about.hbs')
        });

// ------------- LOGIN PAGE ---------------------------
        this.get("#/login", function () {
            this.loadPartials({
                loginForm: './templates/userAuthentication/login/loginForm.hbs'
            }).then(function () {
                this.partial('./templates/userAuthentication/login/loginPage.hbs')
            })
        });

        this.post('#/login', function (context) {
            // console.dir(context);
            let dataUser = context.params;
            // returns promise
            userManager.handleLogin(dataUser)
                .then(function (data) {
                    userManager.successLogin(data);
                    context.redirect('#/home')
                })
                .catch(notificationHandler.handleError);
        });

// // ------------- REGISTER PAGE ---------------------------
        this.get('#/register', function () {
            this.loadPartials({
                registerForm: './templates/userAuthentication/register/registerForm.hbs'
            }).then(function () {
                this.partial('./templates/userAuthentication/register/registerPage.hbs');
            });
        });

        this.post('#/register', function (context) {
            let dataUser = context.params;
            userManager.handleRegister(dataUser)
                .then(function (data) {
                    userManager.successLogin(data);
                    context.redirect('#/home')
                })
                .catch(notificationHandler.handleError);
        });

// // ------------- LOGOUT ---------------------------
        this.get('#/logout', function () {
            userManager.handleLogout();
            this.redirect('#/home')
        });


// // ------------- CATALOG PAGE ---------------------------

        this.get('#/catalog', function (context) {
            // console.dir(teamService.loadAllTeams())
            teamService.loadAllTeams()
                .then(function (teams) {
                    context.teams = teams;

                    context.loadPartials({
                        team: './templates/catalog/team.hbs'
                    }).then(function () {
                        this.partial('./templates/catalog/teamCatalog.hbs')
                    })
                })
                .catch(notificationHandler.handleError)
        });

// // ------------- TEAM DETAILS PAGE ---------------------------
        this.get('#/catalog/:id', function (context) {
            displayTeamDetails(context, context.params.id.slice(1));
            // let teamId = context.params.id.slice(1);
            // let teamMemberPromise = teamService.loadTeamMembers(teamId);
            // let infoForTeamPromise = teamService.loadInfoForTeam(teamId);
            // Promise.all([teamMemberPromise, infoForTeamPromise])
            //     .then(function ([teamMembers, infoForTeam]) {
            //         context.team = infoForTeam;
            //         context.members = teamMembers;
            //         context.user = {
            //             id: sessionHandler.getUserId(),
            //             teamId: sessionHandler.getUserTeamId()
            //         };
            //         context.loadPartials({
            //             teamControls: './templates/catalog/teamControls.hbs',
            //             teamMember: './templates/catalog/teamMember.hbs'
            //         }).then(function () {
            //             this.partial('./templates/catalog/details.hbs')
            //         })
            //
            //     })
            //     .catch(notificationHandler.handleError);
        });
// // ------------- JOIN a TEAM ---------------------------
        this.get('#/join/:id', function (context) {
            let teamId = context.params.id.slice(1);
            requester.get('user', sessionHandler.getUserId())
                .then(function (data) {
                    let userData = data;
                    userData.teamId = teamId;
                    requester.update('user', sessionHandler.getUserId(), userData)

                    // Promise.all([userManager.handleChangingTeam(data, teamId)])
                        .then(function () {
                            sessionHandler.updateSessionItemForUser('teamId', teamId);
                            context.redirect('#/catalog/:' + teamId);
                            displayTeamDetails(context, teamId);
                            notificationHandler.showInfo("You successfully joined this team!")
                        })
                        .catch(notificationHandler.handleError);
                })
                .catch(notificationHandler.handleError);
        });

// // ------------- LEAVE a TEAM ---------------------------
        this.get('#/leave', function (context) {
            requester.get('user', sessionHandler.getUserId())
                .then(function (data) {
                    let userData = data;
                    userData.teamId = "";
                    requester.update('user', sessionHandler.getUserId(), userData)
                    // Promise.all([userManager.handleChangingTeam(data, "")])
                        .then(function () {
                            sessionHandler.updateSessionItemForUser('teamId', "");
                            context.redirect('#/catalog');
                            notificationHandler.showInfo("You successfully left this team! You are currently not a member of a team.")
                        })
                        .catch(notificationHandler.handleError);
                })
                .catch(notificationHandler.handleError);
        });

// // ------------- CREATE a TEAM ---------------------------

        this.get('#/create', function () {
            this.loadPartials({
                createForm: './templates/create/createForm.hbs'
            }).then(function () {
                this.partial('./templates/create/createPage.hbs')
            });
        });

        this.post('#/create', function (context) {
            let bool = teamService.checkValidTeamInfo(context.params);

            if (bool) {
                Promise.all([teamService.createTeam(context.params), requester.get('user', sessionHandler.getUserId())])
                    .then(function ([team, data]) {
                        notificationHandler.showInfo("You successfully created team " + context.params.name);
                        userManager.handleChangingTeam(data, team._id)
                            .then(function (data) {
                                sessionHandler.updateSessionItemForUser('teamId', team._id);
                                displayTeamDetails(context, team._id);
                                context.redirect('#/catalog/:' + team._id);
                            })
                            .catch(notificationHandler.handleError)
                    })
                    .catch(notificationHandler.handleError)
            }


        });

// // ------------- EDIT a TEAM ---------------------------

        this.get('#/edit/:id', function (context) {
            let teamId = context.params.id.slice(1);

            // Promise.all([teamService.loadInfoForTeam(teamId)])
            //     .then(function ([teamInfo]) {
            teamService.loadInfoForTeam(teamId)
                .then(function (teamInfo) {
                    context.team = teamInfo;
                    context.loadPartials({
                        editForm: './templates/edit/editForm.hbs'
                    }).then(function () {
                        this.partial('./templates/edit/editPage.hbs')
                    }).catch(notificationHandler.handleError)
                })
        });

        this.post('#/edit/:id', function (context) {

            let bool = teamService.checkValidTeamInfo(context.params);

            if (bool) {
                let teamId = context.params.id.slice(1);
                teamService.loadInfoForTeam(teamId)
                    .then(function (data) {
                        teamService.editTeam(data, context.params)
                            .then(function () {
                                notificationHandler.showInfo("You successfully edited team " + context.params.name);
                                displayTeamDetails(context, teamId);
                                context.redirect('#/catalog/:' + teamId);
                            })
                    })
            }
        })

    });

    function displayTeamDetails(context, teamId) {
        let teamMemberPromise = teamService.loadTeamMembers(teamId);
        let infoForTeamPromise = teamService.loadInfoForTeam(teamId);
        Promise.all([teamMemberPromise, infoForTeamPromise])
            .then(function ([teamMembers, infoForTeam]) {
                context.team = infoForTeam;
                context.members = teamMembers;
                // console.dir(teamMembers);
                context.user = {
                    id: sessionHandler.getUserId(),
                    teamId: sessionHandler.getUserTeamId()
                };
                // console.dir(infoForTeam);
                // console.dir(context);
                context.loadPartials({
                    teamControls: './templates/catalog/teamControls.hbs',
                    teamMember: './templates/catalog/teamMember.hbs'
                }).then(function () {
                    this.partial('./templates/catalog/details.hbs')
                })

            })
            .catch(notificationHandler.handleError);
    }

    viewController.manageHeader();
    viewController.manageFooter();
    app.run();


});