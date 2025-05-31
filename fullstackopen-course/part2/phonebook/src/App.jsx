import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{name: 'Arto Hellas', number: 98320909}]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addNewRecord = (event) => {
    event.preventDefault();

    if(persons.some(person => person.name == newName)){
      window.alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat({name: newName, number: newNumber}))
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewRecord}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <tbody>
          {persons.map(person => 
            <tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App