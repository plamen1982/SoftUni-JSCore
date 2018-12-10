(() => {
    function editTeam(context) {

        let teamName = context.params.name;
        let teamComment = context.params.comment;
        let teamId = context.params.teamId;

        teamsService.edit(teamId, teamName, teamComment)
            .then(function () {
                auth.showInfo("Team was edited correctly!");
                displayCatalogs(context);
            }).catch(auth.handleError);
    }
    
    function displayEditTeam(context) {
      context.loggedIn = !!sessionStorage.getItem("authtoken");
      context.username = sessionStorage.getItem("username");
      
        let teamId = context.params.teamId;
        teamsService.loadTeamDetails(teamId)
          .then(function(teamInfo) {
              context.teamId = teamId;
              context.name = teamInfo.name;
              context.comment = teamInfo.comment;

              context.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                editForm: `./templates/edit/editForm.hbs`
              }).then(function() {
                this.partial('./templates/edit/editPage.hbs');
              })
          });
    }

    function leaveTeam(context) {
      teamsService.leaveTeam().then((userInfo) => {
        auth.saveSession(userInfo);
        auth.showInfo('You leaved the team!');
        displayCatalogs(context);
      })
    }

    function displayHome(context) {
      context.loggedIn = !!sessionStorage.getItem("authtoken");
      context.username = sessionStorage.getItem("username");
      context.teamId = !!sessionStorage.getItem("teamId");

      context.loadPartials({
        header: "./templates/common/header.hbs",
        footer: "./templates/common/footer.hbs"
      })
        .then(function(context) {
          this.partial("./templates/home/home.hbs");
        })
        .catch(function(error) {
          auth.handleError(error);
        });
    }

    function displayAbout(context) {
      context.loggedIn = sessionStorage.getItem("authtoken") !== null;
      context.username = sessionStorage.getItem("username");

      context.loadPartials({
        header: "./templates/common/header.hbs",
        footer: "./templates/common/footer.hbs"
      })
        .then(function(context) {
          this.partial("./templates/about/about.hbs");
        })
        .catch(auth.handleError);
    }

    function displayLogin(context) {
      context.loggedIn = !!sessionStorage.getItem("authtoken");
      context.username = sessionStorage.getItem("username");

      context.loadPartials({
        header: "./templates/common/header.hbs",
        footer: "./templates/common/footer.hbs",
        loginForm: "./templates/login/loginForm.hbs"
      })
        .then(function(context) {
          this.partial("./templates/login/loginPage.hbs");
        })
        .catch(auth.handleError);
    }

    function postLogin(context) {
      let username = context.params.username;
      let password = context.params.password;

      auth
        .login(username, password)
        .then(userInfo => {
          auth.saveSession(userInfo);
          auth.showInfo("Successful login");
          this.redirect("#/home");
        })
        .catch(auth.handleError);
    }

    function displayRegister(context) {
      context.loggedIn = sessionStorage.getItem("authtoken") !== null;
      context.username = sessionStorage.getItem("username");

      context.loadPartials({
        header: "./templates/common/header.hbs",
        footer: "./templates/common/footer.hbs",
        registerForm: "./templates/register/registerForm.hbs"
      })
        .then(function() {
          this.partial("./templates/register/registerPage.hbs");
        })
        .catch(auth.handleError);
    }

    function postRegister(context) {
      let username = context.params.username;
      let password = context.params.password;
      let repeatPassword = context.params.repeatPassword;

      password !== repeatPassword
        ? auth.showError("The given passwords doesn't matched")
        : auth
            .register(username, password)
            .then(userInfo => {
              auth.saveSession(userInfo);
              auth.showInfo("Successful registration");
              displayHome(context);
            })
            .catch(auth.handleError);
    }

    function logout(context) {
      auth
        .logout()
        .then(() => {
          sessionStorage.clear();
          auth.showInfo("Successful logout");
          context.redirect("#/home");
        })
        .catch(auth.handleError);
    }

    function displayCatalogs(context) {
      context.loggedIn = sessionStorage.getItem("authtoken") !== null;
      context.username = sessionStorage.getItem("username");


      teamsService.loadTeams()
      .then(function (teams) {
          context.hasNoTeam = sessionStorage.getItem("teamId") === null
              || sessionStorage.getItem("teamId") === "undefined";
          context.teams = teams.reverse();
          context.loadPartials({
              header: "./templates/common/header.hbs",
              footer: "./templates/common/footer.hbs",
              team: "./templates/catalog/team.hbs"
          }).then(function () {
              this.partial("./templates/catalog/teamCatalog.hbs")
          })
      })
    }

    function displayCreateCatalog(context) {
      context.loggedIn = !!sessionStorage.getItem("authtoken");
      context.username = sessionStorage.getItem("username");

      this.loadPartials({
        header: "./templates/common/header.hbs",
        footer: "./templates/common/footer.hbs",
        createForm: "./templates/create/createForm.hbs"
      }).then(function() {
        this.partial("./templates/create/createPage.hbs");
      });
    }

    function postCreateCatalog(context) {
      let teamName = context.params.name;
      let teamComment = context.params.comment;
      teamsService
        .createTeam(teamName, teamComment)
        .then(team => {
          auth.showInfo(`\'${team.name}\' team was created`);
          this.redirect("#/catalog");
        })
        .catch(auth.handleError);
    }

    function displayDetailsTeam(context) {

      let id = context.params.id;
      teamsService.loadTeamDetails(id)
          .then(function (teamInfo) {
              context.loggedIn = sessionStorage.getItem("authtoken") !== null;
              context.username = sessionStorage.getItem("username");
              context.teamId = id;
              context.name = teamInfo.name;
              context.comment = teamInfo.comment;
              context.isOnTeam = teamInfo._id === sessionStorage.getItem("teamId");
              context.isAuthor = teamInfo._acl.creator === sessionStorage.getItem("userId");
              context.loadPartials({
                  header: "./templates/common/header.hbs",
                  footer: "./templates/common/footer.hbs",
                  teamControls: './templates/catalog/teamControls.hbs',
              }).then(function () {
                  this.partial('./templates/catalog/details.hbs')
              })

          }).catch(auth.handleError)
    }

    function joinTeam(context) {
      let teamId = context.params.teamId;

      teamsService.joinTeam(teamId)
          .then((userInfo) => {
              auth.saveSession(userInfo);
              auth.showInfo("Joined team!")
              displayCatalogs(context);
          }).catch(auth.handleError)
  }
})();