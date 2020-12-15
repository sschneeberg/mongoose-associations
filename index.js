require('dotenv').config();
const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const app = express();
app.use(express.urlencoded({ extended: true }));

const db = mongoose.connection;

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(process.env.PORT || 3000, console.log('starting server'));
