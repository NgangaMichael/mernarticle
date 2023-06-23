const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    author: String,
    body: String,
    image: String
}, {timestamps: true})

module.exports = mongoose.model('Blog', blogSchema);