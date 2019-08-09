const express = require('express');

const router = express.Router();
const db = require('./choresDb')
const peopleDb = require('../people/peopleDb')

//// Get a list of chores
router.get('/', (request, response) => {
  console.log(peopleDb)
  db.get()
    response.status(200).response.json(choresArray)
    // .then(chores => {
    //   console.log(chores)
    //   response.status(200).json(chores)
    // })
    // .catch(error => {
    //   console.log(error)
    //   response.status(500).json({ message: 'could not communicate with server' })
    // })
})

//// Get chores by user
// router.get('/chores/:id', (request, response) => {

// })

module.exports = router;