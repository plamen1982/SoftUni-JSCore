$(() => {
  const app = Sammy("#main", function() {
    this.use("Handlebars", "hbs");

    this.route("get", "/index.html", displayHome);
    this.route("get", "#/home", displayHome);

    this.route("get", "#/about", displayAbout);

    this.route("get", "#/login", displayLogin);
    this.route("post", "#/login", postLogin);

    this.route("get", "#/register", displayRegister);
    this.route("post", "#/register", postRegister);

    this.route("get", "#/logout", logout);

    this.route("get", "#/catalog", displayCatalogs);

    this.route("get", "#/create", displayCreateCatalog);
    this.route("post", "#/create", postCreateCatalog);

    this.route("get", "#/catalog/:id", displayDetailsTeam);

    this.route("get", "#/join/:teamId", joinTeam);

    this.route("get", "#/leave", leaveTeam);

    this.route("get", "#/edit/:teamId", displayEditTeam);
    this.route("post", "#/edit/:teamId", editTeam);
  });

  app.run();
});
