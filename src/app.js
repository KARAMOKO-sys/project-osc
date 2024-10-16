// src/app.js
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
//const bootstrap = require('bootstrap');


const app = express();

// Middleware de logging
app.use(morgan('dev'));

// Configurer Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Définir le répertoire des vues
app.set('views', path.join(__dirname, 'views'));

// Servir des fichiers statiques à partir du répertoire 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Middleware pour parsing JSON
app.use(express.json());

// Routes
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
