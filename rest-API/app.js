const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const multer = require('multer')

const mongoose = require('mongoose')
require('dotenv').config()
const MONGODB_URI =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`;


const feedRoutes = require('./routes/feed');
const authRoutes = require('./routes/auth');

const app = express();

const fileStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = ( req, file, cb ) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

app.use(bodyParser.json());

app.use(multer({ storage: fileStorage, fileFilter: fileFilter}).single('image'));

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use((req ,res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
      );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})



app.use('/feed', feedRoutes);
app.use('/auth', authRoutes);


app.use((error, req, res, next) => {
    console.log(error)
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data
    res.status(status).json({ message: message, data: data })
})

mongoose.connect(MONGODB_URI)
    .then(result => {
        app.listen(8080)
        
    })
    .catch(err => console.log(err))
