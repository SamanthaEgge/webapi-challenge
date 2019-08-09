const express = require('express');
const choresRoutes = require('./chores/choresRouter.js')

const server = express();
server.use(express.json())

server.get('/', (req, res) => {
  res.send(`<h2>This server is initialized</h2>`)
});

server.use('/chores', choresRoutes)

module.exports = server;
