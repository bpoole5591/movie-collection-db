require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
require('./database/models/User');
const passport = require('passport');
const config = require('./config/dev');
require('./services/passport');
const bodyParser = require('body-parser');
const massive = require('massive');
const control = require('./controller');

mongoose.connect(config.mongoURI);

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(console.log(error));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log(`And we are LIVE on ${PORT}!`));
