// Route for inserting a new quiz into the database

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    db.query(
      `
        INSERT INTO questions (quiz_id, question, answer)
        VALUES ($1, $2, $3) RETURNING *;`,
      [req.body.quizid, req.body.question, req.body.answer]
    )
      .then((body) => {
        console.log(body.rows);
        res.render("createquestion", {id: req.body.quizid});
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
