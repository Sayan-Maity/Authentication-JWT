const express = require("express");
const router = express.Router();
const { publicPosts, privatePosts } = require("../DB");
const checkAuth = require("../middleware/checkAuth");

router.get("/public", (req, res) => {
  res.status(200).send(publicPosts);
});

router.get("/private", checkAuth, (req, res) => {
  res.status(200).send(privatePosts);
});

module.exports = router;
