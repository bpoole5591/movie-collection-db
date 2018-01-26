module.exports = {
  addUser: (req, res) => {
    const db = req.app.get('db');
    const { googleID, firstName } = req.body;
    // console.log('{ googleID, firstName }: ', { googleID, firstName });
    db
      .check_user([googleID])
      .then(response => {
        if (!response.length) {
          db.add_user([googleID, firstName]).then(data => res.json(data[0]));
        }
      })
      .catch(console.log);
  },

  collectionAdd: (req, res) => {
    const db = req.app.get('db');
    const { googleID, imdbID } = req.body;
    db
      .add_Movie_To_Collection([googleID, imdbID])
      .then(response => res.json(response))
      .catch(console.log);
  },

  fetchCollection: (req, res) => {
    const db = req.app.get('db');
    const { googleId } = req.user;
    db
      .view_shelf([googleId])
      .then(response => {
        return res.json(response);
      })
      .catch(console.log);
  },
};
