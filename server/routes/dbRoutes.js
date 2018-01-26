const control = require('../controller');

module.exports = app => {
  app.post('/api/user', control.addUser);
};
