project-osc/
├── node_modules/
├── public/
│   ├── css/
│   ├── images/
│   ├── js/
├── src/
│   ├── config/
│   │   └── config.js
│   ├── controllers/
│   │   └── userController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── services/
│   │   └── userService.js
│   ├── utils/
│   │   └── logger.js
│   ├── views/
│   |   ├── layouts/
│   │   |    └── main.handlebars
│   |   └── home.handlebars
│   ├── app.js
│   └── server.js
├── test/
│   ├── userController.test.js
├── .env
├── .gitignore
├── package.json
└── README.md

src/
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   └── home.handlebars


Commande pour installer et créer un projet express:
- npm install -g express-generator
- express your-express-project
- Commande pour initier un projet node: npm install
- Commande installer le gestion de package de node: npm init -y
npm install validator
npm install dotenv


- https://fr.airbnb.com/s/experiences/online
- https://www.nike.com/
- https://www.hubspot.com/
=========================Important====================================
- https://www.sap.com/africa/index.html?url_id=auto_hp_redirect_africa
- https://www.ibm.com/fr-fr

Commande pour exécuter le projet express: node ./src/server.js
-------------------------------------- Lorsque les données deviennent important --------------------------------------
// src/data/content.json
{
  "homePage": {
    "title": "Home Page",
    "message": "Welcome to our application! This is a larger piece of text that will be inserted into the template. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
}


// src/controllers/homeController.js
const fs = require('fs');
const path = require('path');

exports.getHomePage = (req, res, next) => {
  try {
    const content = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/content.json'), 'utf8'));
    res.render('home', content.homePage);
  } catch (err) {
    next(err);
  }
};
