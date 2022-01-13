const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get('/',(req,res)=> {
    console.log(req.query.subject);
    let subjectValue = req.query.subject;
    let descriptionValue = req.query.description;
    db.query(`SELECT * FROM quizzes INNER JOIN questions ON quizzes.id=quiz_id WHERE (quizzes.subject ILIKE '%${subjectValue}%') AND (quizzes.description ILIKE '%${descriptionValue}%');`)
    .then(data => {
      console.log(data.rows)
      res.render('quizpage', data);
    }).catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });

  return router;
 }
