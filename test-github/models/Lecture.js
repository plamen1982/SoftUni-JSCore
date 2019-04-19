const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lectureSchema = new Schema({
    title: {
        type: Schema.Types.String,
        required: true
    },
    videoUrl: {
        type: Schema.Types.String,
        required: true
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: "Project"
    }
});

const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;