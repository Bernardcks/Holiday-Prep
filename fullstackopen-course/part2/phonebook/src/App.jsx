import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSearch(event.target.value);
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

  const searched = persons.filter(person => 
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handler={handleFilterChange}/>
      <h2>add a new</h2>
      {/* cringe -> change to new object */}
      <PersonForm 
        onSubmit={addNewRecord} 
        newName={newName} 
        onChangeName={handleNameChange} 
        newNumber={newNumber} 
        onChangeNumber={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={searched}/>
    </div>
  )
}

export default App