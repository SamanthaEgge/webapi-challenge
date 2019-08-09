// const express = require('express');

// const router = express.Router();
// const db = require('./choresDb')
// const peopleDb = require('../people/peopleDb')

//// Get a list of chores
// db.get('/', (request, response) => {
//   console.log(db.get)
//   console.log(response)
//   console.log(peopleDb.id)
// })
router.get('/', (request, response) => {
  console.log(peopleDb)
  
  db.get()
    response.json(response)
    // .then(chores => {
    //   console.log(chores)
    //   response.status(200).json(chores) ????????????????????????????????????????
    // })
    // .catch(error => {
    //   console.log(error)
    //   response.status(500).json({ message: 'could not communicate with server' })
    // })
})


// //// Get chores by user
// router.get('/chores/:id', (request, response) => {
//   const id = request.params.id
//   db.getChoresById(id)
//     response.json(response)
// })


// ///// Middleware
// // Check to determine if user exists
// function validatePerson(request, response, next) {
//   const id = request.params.id
//   console.log('validation id check', request.params.id)
//   peopleIds = []
//   // peopleDb.map(people => {
//   //   peopleIds.push(people.id)
//   // })
//   peopleIds.map(people => {
//     if (people.id === id) {
      
//     }
//   })

// }

// module.exports = router;