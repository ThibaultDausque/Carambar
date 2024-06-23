const JokeSchema = require('../models/joke.model');

const createJoke = async (req, res) => {
    try {
        const joke = await JokeSchema.create(req.body);
        res.status(200).json(joke);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getOneJoke = async (req, res) => {
    try {
        const joke = await JokeSchema.findById(req.params.id);
        if (!joke) {
            return res.status(404).send();
        }
        res.send(joke);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAll = async (req, res) => {
    const jokes = await JokeSchema.findAll();
    if (!jokes) {
        return res.status(404).send();
    } 
    res.render('jokes', { jokes });
}

module.exports = { createJoke, getOneJoke, getAll };