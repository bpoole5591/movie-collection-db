require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
require('./database/models/User');
const passport = require('passport');
const config = require('./config/dev');
require('./services/passport');
const { json } = require('body-parser');
const massive = require('massive');
const control = require('./controller');

mongoose.connect(config.mongoURI);

const app = express();

app.use(express.static(`${__dirname}/../build`));
app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(console.log);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.post('/api/user', control.addUser);
app.post('/api/collection', control.collectionAdd);
app.get('/api/collection', control.fetchCollection);
app.delete('/api/collection/delmov/:googleID/:imdbID', control.deleteMovie);
app.delete('/api/collection/delcol/:googleID', control.deleteCollection);

const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// const PORT = process.env.PORT || 3005;

// app.listen(process.env.PORT || 3005);

// app.listen(PORT, () => console.log(`And we are LIVE on ${PORT}!`));
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
