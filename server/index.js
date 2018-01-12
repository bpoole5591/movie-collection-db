// modules
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const { json } = require('body-parser');
const cors = require('cors');
const session = require('express-session');


// imported files 
const config = require('./config');
// const controller = require('./controller');

// constants
const { AUTH_DOMAIN, CLIENT_ID, CLIENT_SECRET } = config;
const { PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
/////////////
// EXPRESS //
/////////////

const app = (module.exports = express());

// app.use(express.static(`../build`))

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(console.log);

// middleware
app.use(json());
app.use(cors());

/////////////
// SESSION //
/////////////

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 525600 * 60 * 1000
    }
  })
);

////////////////////
// AUTH0/Firebase //
////////////////////


  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyDEf0ByNL77PY9IuKGOzX_V2alJxVmUjWU",
  //   authDomain: "themoviecollectiondatabase.firebaseapp.com",
  //   databaseURL: "https://themoviecollectiondatabase.firebaseio.com",
  //   projectId: "themoviecollectiondatabase",
  //   storageBucket: "",
  //   messagingSenderId: "803657737220"
  // };
  // const fire = firebase.initializeApp(config);


//////////////////////////////
// AUTHENTICATION ENDPOINTS //
//////////////////////////////


///////////////
// ENDPOINTS //
///////////////

////////////
// LISTEN //
////////////

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
