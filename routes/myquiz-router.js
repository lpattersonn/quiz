// Route for inserting a new quiz into the database

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`
    SELECT quizzes.subject, quizzes.description
    FROM quizzes
    JOIN users ON users.id=user_id
    WHERE users.id = $1;`, [req.session.user_id])
      .then((data) =>  {
        console.log(data);
        res.render('myquiz', data);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
