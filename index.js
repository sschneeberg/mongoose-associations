require('dotenv').config();
const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const BlogPost = require('./models/blog');

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/blog', (req, res) => {
    BlogPost.find().then((found) => {
        res.status(200).json({ posts: found });
    });
});

app.post('/blog', (req, res) => {
    BlogPost.create(req.body).then((post) => {
        res.status(201).json({ post });
    });
});

app.post('/comment', (req, res) => {
    BlogPost.findOne().then((post) => {
        post.comments.push(req.body);
        res.status(201).json({ comment: req.body, post: post });
    });
});

app.listen(process.env.PORT || 3000, console.log('starting server'));
