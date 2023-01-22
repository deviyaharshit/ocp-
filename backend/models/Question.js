const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuestionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Question = mongoose.model('question', QuestionSchema);
//   User.createIndexes();
module.exports = Question;
