const express = require('express'),
  bodyParser = require('body-parser'),
  uuid = require('uuid');

const app = express();

app.use(bodyParser.json());

app.get('/movies', (req, res) => {
  res.send('Successful GET request returning list of all movies');
});

app.get('/movie', (req, res) => {
  res.send('Successful GET request returning JSON object of movie selected by user');
});

app.get('/movie/genre', (req, res) => {
  res.send('Successful GET request returning genre of movie');
});

app.get('/movie/description', (req, res) => {
  res.send('Successful GET request returning description of movie');
});

app.get('/movie/director', (req, res) => {
  res.send('Successful GET request returning name of movie director');
});

app.get('/movie/imageUrl', (req, res) => {
  res.send('Successful GET request returning movie image URL');
});

app.get('/genres', (req, res) => {
  res.send('Successful GET request returning list of all movie genres');
});

app.get('/directors', (req, res) => {
  res.send('Successful GET request returning list of all movie directors');
});

app.post('/register', (req, res) => {
  res.send('Successful POST request creating new user account');
});

app.get('/account', (req, res) => {
  res.send('Successful GET request returning JSON object holding user account information');
});

app.put('/account/favorites/add', (req, res) => {
  res.send('Successful PUT request adding JSON object holding movie information');
});

app.delete('/account/unregister', (req, res) => {
  res.send('Successful DELETE request remving user account');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080');
});
