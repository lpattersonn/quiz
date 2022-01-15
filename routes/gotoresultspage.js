const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log(req.query.search);
    res.render("resultspage");
  });

  return router;
};
