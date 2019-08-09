const express = require('express');

const server = express();
server.use(express.json())

const peopleArray = [
  { id: 1,
  name: 'Frodo Baggins',
  chores: [] }, // 1
  { id: 2,
    name: 'Samwise Gamgee',
    chores: [] }, // 2
  { id: 3,
    name: 'Meriadoc Brandybuck',
    chores: [] }, // 3
  { id: 4,
    name: 'Peregrin Took',
    chores: [] }, // 4
  { id: 5,
    name: 'Mithrandir',
    chores: [] }, // 5
  { id: 6,
    name: 'Boromir',
    chores: [] }, // 6
  { id: 7,
    name: 'Legolas',
    chores: [] }, // 7
  { id: 8,
    name: 'Gimli',
    chores: [] }, // 8
  { id: 9,
    name: 'Aragorn',
    chores: [] }, // 9
]

const choresArray = [
  {
    id: 1,  /// created
    people_id: 1,  ///required
    description: 'Heres my first chore!',  /// required
    notes: 'heres an optional note',  /// optional
    completed: false  /// false on creation
  },
  {
    id: 2,  /// created
    people_id: 1,  ///required
    description: 'Heres my second chore!',  /// required
    notes: 'heres an optional note',  /// optional
    completed: false  /// false on creation
  },
  {
    id: 3,  /// created
    people_id: 2,  ///required
    description: 'Heres my third chore!',  /// required
    notes: '',  /// optional
    completed: false  /// false on creation
  }
]

function getChores() {
  return choresArray
}

function getChoresById(peopID) {
  const filteredChores = []
  filteredChores = choresArray.filter(chore => chore.people_id === peopID)
  console.log(filteredChores)

  return filteredChores

}

server.get('/', (req, res) => {
  res.send(`<h2>This server is initialized</h2>`)
});

//// Get a list of chores
server.get('/chores', (request, response) => {
  const chores = getChores()
  response.status(200).response.json(chores)
    // .then(chores => {
    //   console.log(chores)
    //   response.status(200).json(chores) ????????????????????????????????????????
    // })
    // .catch(error => {
    //   console.log(error)
    //   response.status(500).json({ message: 'could not communicate with server' })
    // })
})


//// Get chores by user
server.get('/chores/:id', validatePerson, (request, response) => {
  const id = request.params.id
  db.getChoresById(id)
    response.json(response)
})


// ///// Middleware
// Check to determine if user exists
function validatePerson(request, response, next) {
  const urlid = request.params.id
  console.log('validation id check', request.params.id)
  let selectedPerson = null
  peopleArray.map(people => {
    if (id === urlid) {
      selectedPerson = people
    }
  })
  if (selectedPerson) {
    next()
  } else {
    response.status(404).response.json({ message: 'user not found' })
  }
}



module.exports = server;
