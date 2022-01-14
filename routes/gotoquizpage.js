const { promiseImpl } = require("ejs");
const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    console.log(req.query.subject);
    // let subjectValue = req.query.subject;
    // let descriptionValue = req.query.description;
    /*
    Retreive an array of questions
    const newArr = [{
      question: HTML,
      answer: Hyper Text Markup Language,
      options: ["Option1","Option2", "Option2"]
    }];
    */
    // First qu
    return db.query(
      `
     SELECT question, answer, id
     FROM questions
     WHERE questions.quiz_id = $1;`,
      [req.params.id]
    )
      // db.query(`SELECT * FROM quizzes INNER JOIN questions ON quizzes.id=quiz_id WHERE (quizzes.subject ILIKE '%${subjectValue}%') AND (quizzes.description ILIKE '%${descriptionValue}%');`)
      .then((result) => {
        const data = {
          questions: []
        };
        const dbpromises = result.rows.map((question) => {
          return db
            .query(
              `
       SELECT answer
       FROM questions
       WHERE questions.id != $1
       LIMIT 2;`,
              [question.id]
            )
            .then((res) => {
              const options = [...res.rows, { answer: question.answer }];
              data.questions.push({ ...question, options});
            });
        });
        // Ensure all promise resolved before calling res.render
        // Promise.all() returns a single promise for multiple promises only resolved when multiple promises have been resolved
        Promise.all(dbpromises)
          .then(() => {
            res.render("quizpage", data);
            console.log(data.questions);
          })
          .catch((err) => {
            res.status(500).send("error please try again");
            console.log(err.message);
          });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
