const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    text: {
        type: String,
        required: true
    }
});

module.exports = Task = mongoose.model('task', PostSchema);