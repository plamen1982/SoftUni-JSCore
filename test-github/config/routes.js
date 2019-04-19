const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {

    //--------------------------------------------------------------Visitors

    app.get('/', controllers.home.index);

    app.get('/register', restrictedPages.isAnonymous, controllers.user.registerGet);
    app.post('/register', restrictedPages.isAnonymous, controllers.user.registerPost);

    app.get('/login', restrictedPages.isAnonymous, controllers.user.loginGet);
    app.post('/login', restrictedPages.isAnonymous, controllers.user.loginPost);
    
    app.post('/logout', restrictedPages.isAuthed, controllers.user.logout);

    //--------------------------------------------------------------Users

    // app.get('/user/course-details', restrictedPages.isAuthed, controllers.user.courseDetailsGet);
    // app.post('/user/course-details/:courseId', restrictedPages.isAuthed, controllers.user.courseDetailsPost);

    // app.get('/user/enroll-course/:courseId', restrictedPages.isAuthed, controllers.user.allTeams);
    // app.post('/user/all-teams', restrictedPages.isAuthed, controllers.user.allTeams);
    
    //--------------------------------------------------------------Admins

    app.get('/admin/create-course', restrictedPages.hasRole('Admin'), controllers.admin.createCourseGet);
    app.post('/admin/create-course', restrictedPages.hasRole('Admin'), controllers.admin.createCoursePost);

    app.get('/admin/edit-course/:courseId', restrictedPages.hasRole('Admin'), controllers.admin.editCourseGet);
    app.post('/admin/edit-course/:courseId', restrictedPages.hasRole('Admin'), controllers.admin.editCoursePost);

    // app.get('/admin/create-team', restrictedPages.hasRole('Admin'), controllers.admin.createTeamGet);
    // app.post('/admin/create-team', restrictedPages.hasRole('Admin'), controllers.admin.createTeamPost);

    // app.get('/admin/distribute-projects', restrictedPages.hasRole('Admin'), controllers.admin.distributeProjectsGet);
    // app.post('/admin/distribute-projects', restrictedPages.hasRole('Admin'), controllers.admin.distributeProjectsPost);

    // app.get('/admin/distribute-teams', restrictedPages.hasRole('Admin'), controllers.admin.distributeTeamsGet);
    // app.post('/admin/distribute-teams', restrictedPages.hasRole('Admin'), controllers.admin.distributeTeamsPost);

    //--------------------------------------------------------------Others

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};