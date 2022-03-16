const { addVotesQuery, removeVotesQuery, checkvote } = require('../../database/queries');
const postVotes = (req, res, next) => {
  const { user_id } = req;
  const { id } = req.body;

  checkvote({ user_id, id })
    .then((result) => {
      if (result.rowCount === 1) {
        let isvote = true;
        if (result.rows[0].isvote) {
          isvote = false;
        }
        removeVotesQuery({ user_id, id, isvote });
        res.json({ msg: 'reset vote' });
      } else {
        let isvote = true;
        addVotesQuery({ user_id, id, isvote });
        res.json({ msg: 'add vote' });
      }
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = { postVotes };
