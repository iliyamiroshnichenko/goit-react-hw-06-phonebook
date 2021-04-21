import { useState, useEffect } from 'react';
import shortid from 'shortid';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

// const initialContacts = [
//   { id: 'id-1', name: 'Илья Мирошниченко', number: '+380993533451' },
//   { id: 'id-2', name: 'Илон Маск', number: '+123456789147' },
//   { id: 'id-3', name: 'Марк Цукерберг', number: '+198453489753' },
//   { id: 'id-4', name: 'Александр Репета', number: '+380503533999' },
// ];

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const normalizedName = name.toLowerCase();
    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    setContacts(prState => [newContact, ...prState]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId =>
    setContacts(prState => prState.filter(({ id }) => id !== contactId));

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}

export default App;
