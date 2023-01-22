const mongoose = require("mongoose");
const { Schema } = mongoose;

const CodeSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    question: {
        type: String,
        required: true
    },
    usercode: {
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

const Code = mongoose.model('code', CodeSchema);
//   User.createIndexes();
module.exports = Code;
