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
