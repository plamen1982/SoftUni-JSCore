const Course = require("../models/Course");

module.exports = {
    compareObjects: function(a,b){
        if(a.usersEnrolled.length > b.usersEnrolled.length){
            return -1;
        }
        if(a.usersEnrolled.length < b.usersEnrolled.length){
            return 1;
        }
        if(a.usersEnrolled.length > b.usersEnrolled.length){
            return -1;
        }
        if(a.usersEnrolled.length < b.usersEnrolled.length){
            return 1;
        }
        return b.usersEnrolled.length - a.usersEnrolled.length;
    },
    index: async (req, res) => {
        const allCourses = await Course
        .find({})
        const topThreeCourses = allCourses.sort(this.compareObjects).slice(0,3);
        res.render('home/index', { topThreeCourses, allCourses } );
    }
};