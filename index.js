const express = require('express'),
  morgan = require('morgan');

const app = express();

app.use(morgan('common'));

let topMovies = [
  {
    title: 'Hot Rod'
  },
  {
    title: 'The Other Guys'
  },
  {
    title: 'The Matrix'
  },
  {
    title: 'John Wick'
  },
  {
    title: 'Drive'
  },
  {
    title: 'The Big Lebowski'
  },
  {
    title: 'O, Brother, Where Art Thou?'
  },
  {
    title: 'Back to the Future'
  },
  {
    title: 'There Will Be Blood'
  },
  {
    title: 'The Assassination of Jesse James by the Coward Robert Ford'
  },
];

app.get('/', (req, res) => {
  res.send('Welcome to myFlix');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
