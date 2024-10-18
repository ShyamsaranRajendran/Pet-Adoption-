const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const cors = require('cors');
const path= require('path');
const expressMessages = require('express-messages');

// Connect to MongoDB
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: 'your_secret_key', 
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 3600000 }
}));

app.use(flash());
app.use(express.static(path.join(__dirname, 'public'))); 

// Routes
const pages = require('./routes/pages');
const pet = require('./routes/pet');
const userRoutes = require('./routes/user');

app.use('/', pages);
app.use('/pet',pet);
app.use('/user', userRoutes); 

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
