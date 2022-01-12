// Route for inserting a new quiz into the database

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    db.query(
      `
        INSERT INTO quizzes (user_id, subject, description, public)
        VALUES ($1, $2, $3, $4);
        `,
      [
        req.session.user_id,
        req.body.subject,
        req.body.description,
        req.body.public_private,
      ]
    )
      .then((body) => {
        console.log(req.body)
       res.render("createquestion")
       })
  });
  return router;
};
