const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    description: {
        type: Schema.Types.String,
        required: true,
        maxlength: 50
    },
    imageUrl: {
        type: Schema.Types.String,
        required: true
    },
    isPublic: {
        type: Schema.Types.Boolean,
        default: false
    },
    lectures: [{
        type: Schema.Types.ObjectId,
        ref: "Lecture"
    }],
    usersEnrolled: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],

});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;