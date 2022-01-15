const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log(req.body.search);
    let searchValue = req.query.search;
    return db
      .query(
        `
    SELECT subject, description, id, public
    FROM quizzes
    WHERE subject ILIKE '%' || $1 || '%'
    OR description ILIKE '%' || $2 || '%'
    AND public = true;`,
        [req.body.search, req.body.search]
      )
      .then((data) => {
        console.log(data);
        res.render("searchresults", data);
      })
      .catch((err) => {
        res.status(500).send("Please try again");
        console.log(err.message);
      });
  });

  return router;
};
