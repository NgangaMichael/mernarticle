const express = require('express');
const app = express();
const cors = require('cors');
const blogRoute = require('./routes/blogroute');
const database = require('./database/database');
const path = require('path');

// to allow all origins 
// app.use(cors())

// to allow specific origin 
app.use(
    cors({
        origin: 'http://localhost:3000',
    })
);
database();
app.use(express.json());
// Serve static files
app.use('/blogImages', express.static(path.join(__dirname, 'public/blogImages')));
app.use(blogRoute);

app.listen(5000, () => {
    console.log('Server has started');
});