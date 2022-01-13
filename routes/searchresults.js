const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get('/',(req,res)=> {
    console.log(req.query.search);
    let searchValue = req.query.search;
    db.query(`SELECT * FROM quizzes WHERE (quizzes.description ILIKE '%${searchValue}%') OR (quizzes.subject ILIKE '%${searchValue}%') ;`)
    .then(data => {
        // const rows = data.rows;
      res.render('searchresults', data);
    }).catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });

  return router;
 }
