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

function get() {
  return choresArray
}

function getChoresById() {
  return console.log('getting set up')
}

module.exports = {
  get,
  getChoresById
}