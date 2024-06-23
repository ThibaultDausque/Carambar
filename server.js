const express = require('express');
const app = express();
const PORT = 8080;
const jokeRoutes = require('./routes/joke.route')

app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('css'));
app.use(express.json());
app.use('/', jokeRoutes);

app.get('/', (req, res) => res.send('<h1>Hello Express</h1>'));
app.get('/joke', (req, res) => res.render('jokes'));
app.get('/add', (req, res) => res.render('add'));
app.get('/home',(req, res) => res.render('home'));

app.get("/hello", (req, res) => {
    res.json({ message: "Welcome to this application." });
});

app.listen(PORT, console.log('Server is running on port: ' + PORT));