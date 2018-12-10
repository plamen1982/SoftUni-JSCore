$(() => {
  const app = Sammy("#main", function() {
    this.use("Handlebars", "hbs");

    this.route("get", "/index.html", Ctrl.displayHome);
    this.route("get", "#/home", Ctrl.displayHome);

    this.route("get", "#/about", Ctrl.displayAbout);

    this.route("get", "#/login", Ctrl.displayLogin);
    this.route("post", "#/login", Ctrl.postLogin);

    this.route("get", "#/register", Ctrl.displayRegister);
    this.route("post", "#/register", Ctrl.postRegister);

    this.route("get", "#/logout", Ctrl.logout);

    this.route("get", "#/catalog", Ctrl.displayCatalogs);

    this.route("get", "#/create", Ctrl.displayCreateCatalog);
    this.route("post", "#/create", Ctrl.postCreateCatalog);

    this.route("get", "#/catalog/:id", Ctrl.displayDetailsTeam);

    this.route("get", "#/join/:teamId", Ctrl.joinTeam);

    this.route("get", "#/leave", Ctrl.leaveTeam);

    this.route("get", "#/edit/:teamId", Ctrl.displayEditTeam);
    this.route("post", "#/edit/:teamId", Ctrl.editTeam);
  });

  app.run();
});
