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

  deleteMovie: (req, res) => {
    const db = req.app.get('db');
    console.log('req.params:', req.params);
    const googleId = req.params.googleID;
    const imdbID = req.params.imdbID;
    console.log('googleid:', googleId);
    db
      .delete_from_shelf([googleId, imdbID])
      .then(response => res.json(response))
      .catch(console.log);
  },

  deleteCollection: (req, res) => {
    const db = req.app.get('db');
    console.log('req.params:', req.params);
    const googleId = req.params.googleID;
    console.log('googleid:', googleId);
    db
      .delete_collection([googleId])
      .then(response => res.json(response))
      .catch(console.log);
  },
};
