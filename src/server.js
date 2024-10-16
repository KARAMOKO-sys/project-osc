//server.js
const app = require('./app');
const http = require('http');
// Supprimez cette ligne si elle est présente
//const bootstrap = require('bootstrap');

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

