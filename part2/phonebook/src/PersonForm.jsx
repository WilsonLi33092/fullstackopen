const PersonForm = ({handleNewPerson, handleInputChange, handleNumberChange, newName, newNumber}) => {
    return(
        <form action="" onSubmit = {handleNewPerson}>
        <div>
          name: <input type="text" onChange = {handleInputChange} value = {newName}/>
        </div>
        <div>
          number: <input type="number" onChange = {handleNumberChange} value = {newNumber}/>
        </div>
        <div>
          <button type = 'submit'>add</button>
        </div>
      </form>
    )
}

export default PersonForm