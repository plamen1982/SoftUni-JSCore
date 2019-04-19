const Course = require("../models/Course");

module.exports = { 
    createCourseGet: (req, res) => {
        res.render('admin/create-course');        
    },
    createCoursePost: (req, res) => {
        const { title, description, imageUrl } = req.body;
        const isPublic = req.body.isPublic;
        const userIdString = req.user._id;
        console.log(userIdString)
        let isPublicForDB;

        if(isPublic === 'on') {
            isPublicForDB = true;
        } else {
            isPublicForDB
        }
        const objCreateCourseForDB = {
            title, 
            description,
            imageUrl,
            isPublicForDB,
            usersEnrolled: []
        }
        objCreateCourseForDB.usersEnrolled.push(userIdString);
        Course.create(objCreateCourseForDB).then(savedCourse => { 
            console.log("savedCourse", savedCourse);  
            res.redirect('/')
        })
    },
    editCourseGet: async (req, res) => {
        const { courseId } = req.params;
        const currentCourse = await Course.findById(courseId);
        res.render('admin/edit-course', { currentCourse });        
    },
    editCoursePost: async (req, res) => {
        const { courseId } = req.params;
        const { title, description, imageUrl } = req.body;
        const isPublic = req.body.isPublic;

        let isPublicForDB;

        if(isPublic === 'on') {
            isPublicForDB = true;
        } else {
            isPublicForDB
        }
        const objEditCourseForDB = {
            title, 
            description,
            imageUrl,
            isPublicForDB,
        }
        console.log("objEditCourseForDB", objEditCourseForDB);

        try {
            const courseToBeUpdated = await Course.findById(courseId);
            console.log("courseToBeUpdated", courseToBeUpdated);
            courseToBeUpdated.title = title;
            courseToBeUpdated.description = description;
            courseToBeUpdated.isPublic = isPublicForDB;
            const savedObject = await courseToBeUpdated.save();
            console.log(savedObject);
            res.redirect('/')
        } catch(error) {
            console.log(error)
        }
    }
    // createTeamGet: (req, res) => {
    //     res.render('admin/create-team');        
    // },
    // createTeamPost: (req, res) => {

    // },
    // distributeProjectsGet: (req, res) => {
    //     res.render('admin/distribute-projects');
    // },
    // distributeProjectsPost: (req, res) => {

    // },
    // distributeTeamsGet: (req, res) => {
    //     res.render('admin/distribute-teams');
    // },
    // distributeTeamsPost: (req, res) => {

    // },
}