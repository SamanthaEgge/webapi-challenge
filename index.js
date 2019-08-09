// require('dotenv').config();

const server = require('./server.js');


const port = process.env.PORT || 8000;
const greeting = "Hi, Samantha!";

server.listen(port, () => {
  console.log(
    `\n*** ${greeting} Server Running on ${port} ***\n`
  );
});