// Route for inserting a new quiz into the database

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`
    SELECT quizzes.subject, quizzes.description, quizzes.public, quizzes.id as quizid
    FROM quizzes
    JOIN users ON users.id=user_id
    WHERE users.id = $1;`, [req.session.user_id])
      .then((data) =>  {
        res.render('myquiz', data);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/public", (req, res) => {
    console.log("+++++", req.body)
    const public = req.body.public
    const quizid = parseInt(req.body.quizid)
    console.log("XXXXXXXXXXX+++++",public, quizid )
    db.query(`
      UPDATE quizzes set public = $1 WHERE id = $2 RETURNING *;`, [public, quizid])
      .then((data) =>  {
        console.log("DATA===========", data.rows)
        res.send({ quiz: data.rows[0] });
      })
      .catch(err => {
        console.log(err.message)
        res.status(500).json({ error: err.message });
      });
  });

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

// Route for inserting a new quiz into the database

// const express = require('express');
// const router  = express.Router();

// module.exports = (db) => {
//   router.get("/", (req, res) => {
//     db.query(`
//     SELECT quizzes.subject, quizzes.description
//     FROM quizzes
//     JOIN users ON users.id=user_id
//     WHERE users.id = $1;`, [req.session.user_id])
//       .then((data) =>  {
//         res.render('myquiz', data);
//       })
//       .catch(err => {
//         res.status(500).json({ error: err.message });
//       });
//   });
//   return router;
// };
