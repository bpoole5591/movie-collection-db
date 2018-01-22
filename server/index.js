require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const config = require('./config');
require('./models/User');
require('./services/passport');

mongoose.connect(config.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 2592000000, // 30 * 24 * 60 * 60 * 1000
    keys: [config.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
