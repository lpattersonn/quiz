// Route For Receiving All Quiz From Database

const express = require('express');
const router  = express.Router();

// const allQuiz = require('../query/allquiz-query.js')

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM quizzes WHERE quizzes.public = TRUE;`)
      .then(data => {
        const quizzes = data;
        console.log(quizzes);
        res.render('index', quizzes);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
