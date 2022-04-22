const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
var passport = require('passport')

const UserRouter = require('./routes/user');

//connecting to database
mongoose.connect('mongodb+srv://root:root@cluster0.xe2ma.mongodb.net/CLS-RH', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));

app.use(bodyParser.json());




// CORS Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '/')));
app.use(passport.initialize());
//app.use(passport.session());
require('./config/passport')(passport)
app.use('/api/user', UserRouter);


module.exports = app;