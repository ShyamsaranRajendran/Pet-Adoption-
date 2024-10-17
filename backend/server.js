const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/database');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const cors = require('cors');
const expressMessages = require('express-messages');
    

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected successfully');
});

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Routes
const pages = require('./routes/pages.js');




app.use('/',pages);


// Server start
const port = 3000;
app.listen(port, function () {
  console.log('Server is running on port ' + port);
});
