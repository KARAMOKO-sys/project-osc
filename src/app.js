//app.js
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const userRoutes = require('./routes/userRoutes');
const morgan = require('morgan');

// Middleware de logging
app.use(morgan('dev'));

// Configure Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Définir le répertoire des vues
app.set('views', path.join(__dirname, 'views'));

// Servir des fichiers statiques à partir du répertoire 'public'
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());
app.use('/api/users', userRoutes);

// Route pour rendre une vue Handlebars
app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page', message: 'Welcome to our application!' });
});

// Middleware pour gérer les erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
