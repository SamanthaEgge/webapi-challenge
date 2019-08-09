// const peopleDb = require('../people/peopleDb')

// const choresArray = [
//   {
//     id: 1,  /// created
//     people_id: 1,  ///required
//     description: 'Heres my first chore!',  /// required
//     notes: 'heres an optional note',  /// optional
//     completed: false  /// false on creation
//   },
//   {
//     id: 2,  /// created
//     people_id: 1,  ///required
//     description: 'Heres my second chore!',  /// required
//     notes: 'heres an optional note',  /// optional
//     completed: false  /// false on creation
//   },
//   {
//     id: 3,  /// created
//     people_id: 2,  ///required
//     description: 'Heres my third chore!',  /// required
//     notes: '',  /// optional
//     completed: false  /// false on creation
//   }
// ]

// function get() {
//   return choresArray
// }

// function getChoresById(peopID) {
//   const filteredChores = []
//   filteredChores = choresArray.filter(chore => chore.people_id === peopID)
//   console.log(filteredChores)

//   return filteredChores

// }

// module.exports = {
//   get,
//   getChoresById
// }