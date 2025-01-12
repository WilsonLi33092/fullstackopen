import { useState } from 'react'
import Name from './Name'
import Filter from './Filter'
import PersonForm from './PersonForm'

function App() {
  const[persons, setPersons] = useState([{name: 'Arto Hellas', number: 647}])
  const[newName , setNewName] = useState('')
  const[newNumber, setNewNumber] = useState('')
  const[newSearch, setNewSearch] = useState('')

  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    const check = [...persons]
    let newCheck = check.filter(person => person.name.startsWith(event.target.value)
    )
    setPersons(newCheck)

  }
  
  const handleNewPerson = (event) => {
    event.preventDefault();
    const check = [...persons]
    const newPerson = {
      key: newName,
      name: newName,
      number: newNumber
    }
    
    if(JSON.stringify(check).includes(JSON.stringify(newName))) {
      alert(`${newName}` + ' is already added to the phonebook.')
    } else {
      setPersons(persons.concat(newPerson))
    }
    setNewName('')
    setNewNumber('')

  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchChange = {handleSearchChange}/>
      <h2>Add a new</h2>
      <PersonForm handleNewPerson = {handleNewPerson} handleInputChange = {handleInputChange} handleNumberChange = {handleNumberChange} newName = {newName} newNumber = {newNumber}/>
      <h2>Numbers</h2>
      <Name key = {persons} people = {persons}/>
    </div>
  )
}

export default App
