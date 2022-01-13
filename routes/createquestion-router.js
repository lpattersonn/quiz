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
        db.query(`
        SELECT count(questions.*) as total_questions
        FROM questions
        WHERE quiz_id=$1;`
        , [req.body.quizid])
        .then((data) => {
          const questionTotal = Number(data.rows[0].total_questions);
          console.log(questionTotal)
          res.render("createquestion", {id: req.body.quizid, questionTotal});
        })
        .catch((err) => {
          console.log(err.message)
          res.status(500).send("Unable to complete action please try again")
        })
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).send("Unable to complete action please try again")
      });
  });
  return router;
};
