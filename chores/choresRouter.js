import peopleArray from '../people/peopleDb'

const express = require('express');

const router = express.Router();
const db = require('./choresDb')

console.log(peopleArray)

//// Get a list of chores
router.get('/chores', (request, response) => {
  db.get()
    .then(chores => {
      response.status(200).json(chores)
    })
    .catch(error => {
      console.log(error)
      response.status(500).json({ message: 'could not communicate with server' })
    })
})

//// Get chores by user
// router.get('/chores/:id', (request, response) => {

// })