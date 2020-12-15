const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: Date
});

const blogpstSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    comments: [commentSchema]
});

const BlogPost = mongoose.model('BlogPost', blogpstSchema);

module.exports = BlogPost;
