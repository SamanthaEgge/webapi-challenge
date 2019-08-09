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

//////Async functions to use
// Check to see if new chore meets required values
function validateChore(newChore) {
  console.log('this is newChore in validation', newChore)
  if (newChore.description) {
    if (newChore.people_id) {
      return 'validateChore Passed?'
    } else {
      response.status(500).response.json({ message: 'inlcude a people_id for this chore'})
    }
  } else {
    response.status(500).response.json({ message: 'please include a description for a new chore' })
  }
}

function manipulateNewChore(chore) {
  const lastChore = choresArray.pop()
  const lastID = parseInt(lastChore.id)
  console.log('we hit manipulateNewChore')
  let manipulateChore = chore
  console.log(manipulateChore)
  console.log(lastID)
  console.log('testing', lastID + 1)
  if (manipulateChore.notes) {
    return manipulateChore = {
      ...chore,
      id: lastID+1,
      completed: false,
    }
  } else {
    return manipulateChore = {
      ...chore,
      id: lastID+1,
      completed: false,
      notes: ''
    }
  }
}

function getChores() {
  return choresArray
}

function getChoresById(peopID) {
  let filteredChores = []
  // filteredChores = choresArray.filter(chore => chore.people_id === peopID)
  choresArray.map(chore => {
    console.log(chore.people_id)
    console.log(peopID)
    choreManip = chore.people_id.toString()
    if (choreManip === peopID) {
      filteredChores.push(chore)
      console.log('chore check??', chore)
    }
  })

  return filteredChores

}

async function createChore(chore) {
  console.log('this is chore in createChore', chore)
  try {
    const validation = await validateChore(chore)
    console.log('validation in createChore', validation)
    const structuredChore = await manipulateNewChore(chore)
    console.log('this is structuredChore in createChore', structuredChore)
    return structuredChore
  } catch (e) {
    console.log('something broke')
  }
}

server.get('/', (req, res) => {
  res.send(`<h2>This server is initialized</h2>`)
});

//// Get a list of chores
server.get('/chores', (request, response) => {
  const chores = getChores()
  console.log('checking to see if chores has something', chores)
  response.status(200).json(chores)
})


//// Get chores by user
server.get('/chores/:id', (request, response) => {
  const id = request.params.id
  const choresbyID = getChoresById(id)
  console.log(choresArray.filter(chore => chore.people_id === id))

  response.status(200).json(choresbyID)
})

server.post('/chores', (request, response) => {
  const addedChore = request.body
  const createaChore = createChore(addedChore)
  response.status(202).json(createaChore)
})

module.exports = server;











// ///// Middleware
// Check to determine if user exists
// function validatePerson(request, response, next) {
//   const urlid = request.params.id
//   console.log('validation id check', request.params.id)
//   let selectedPerson = null
//   peopleArray.map(people => {
//     if (people.id === urlid) {
//       selectedPerson = people
//     }
//   })
//   if (selectedPerson) {
//     console.log('selectedPerson', selectedPerson)
//     next()
//   } else {
//     response.status(404).response.json({ message: 'user not found' })
//   }
// }
