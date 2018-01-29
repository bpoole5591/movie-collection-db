const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('http://brian-poole.com/dashboard');
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    console.log('req.user: ', req.user);
    return res.json(req.user);
  });
};

// Authentication data stored in MongoDB hosted at this address =>
// https://mlab.com/databases/themoviecollectiondatabase/collections/users

// App is currently hosted on Heroku @ https://limitless-eyrie-90014.herokuapp.com/
// The hosting dashboard is @ dashboard.heroku.com
// The Heroku .git repository for the app is @ https://git.heroku.com/limitless-eyrie-90014.git
