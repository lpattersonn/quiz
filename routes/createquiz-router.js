// Route for inserting a new quiz into the database

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("createquiz").catch((err) => {
      res.status(500).send("Could not complete action, please try agin");
      console.log(err.message);
    });
  });
  return router;
};
