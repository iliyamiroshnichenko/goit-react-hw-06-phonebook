import { useState, useEffect } from 'react';
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
  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   setContacts(parsedContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
