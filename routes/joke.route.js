const express = require("express");
const router = express.Router();

const { createJoke, getOneJoke, getAll} = require("../controllers/joke.controller");

router.route("/jokeForm").post(createJoke);
router.route("/jokes/:id").get(getOneJoke);
router.route("/joke").get(getAll);


module.exports = router;