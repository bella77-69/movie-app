const express = require("express");
const cors = require('cors');
const app = express();
PORT = 8080;

const commingSoonRoute = require('./routes/commingSoonRoute');
const mostPopularRoute = require('./routes/mostPopularRoute');
const top250Route = require('./routes/top250Route');

require ('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/movies/commingsoon', commingSoonRoute);
app.use('/movies/movies', mostPopularRoute);
app.use('/movies/top250', top250Route);

app.get('/movies', (req, res) => {
    res.json({message: "Welcome to my movie api",
routes: [
    {
        method: 'get',
        endpoint: '/movies',
    },
    {
        method: 'get',
        endpoint: '/movies/:id',
    },
    {
        method: 'get',
        endpoint: '/movies/commingsoon'
    },
    {
        method: 'get',
        endpoint: '/movies/commingsoon/:id',
    },
    {
        method: 'get',
        endpoint: '/movies/mostpopular'
    },
    {
        method: 'get',
        endpoint: '/movies/mostpopular/:id',
    },
    {
        method: 'get',
        endpoint: '/movies/top250'
    },
    {
        method: 'get',
        endpoint: '/movies/top250/:id',
    },
]})
})




app.listen(8080, () => {
    console.log("listening on port 8080...");
  });