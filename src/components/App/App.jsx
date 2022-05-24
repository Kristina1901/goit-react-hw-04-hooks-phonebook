import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from '../Section/Section';
import Container from '../Container/Container';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContacList/ContactList';
import s from '../App/App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const repeatCheck = newName => {
    return contacts.find(({ name }) => name.toLowerCase() === newName);
  };
  const showNotification = name => {
    alert(`${name} is already in contacts`);
  };
  const addContact = ({ name, number }) => {
    if (!repeatCheck(name.toLowerCase())) {
      const contact = {
        id: uuidv4(),
        name,
        number,
      };
      setContacts(prevContacts => [...prevContacts, contact]);
      return;
    }
    showNotification(name);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const setFilterValue = e => {
    setFilter(e.currentTarget.value.trim());
  };

  const getResultSearch = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  return (
    <>
      <header>
        <Container>
          <h1 className={s.title}>Phonebook</h1>
        </Container>
      </header>
      <Section nameForClass={'section'}>
        <div>
          <ContactForm onSubmit={addContact} />
        </div>
      </Section>
      <Section nameForClass={'sectionList'}>
        <div className={s.wrapper}>
          <h2 className={s.contact}>Filter Contacts</h2>
          <Filter name={filter} onChange={setFilterValue} />
          <h2 className={s.contact}>Contacts</h2>
          {contacts[0] && getResultSearch()[0] ? (
            <ContactList
              contacts={getResultSearch()}
              onDeleteContact={deleteContact}
            />
          ) : (
            <p className={s.text}>There’s nothing here yet...</p>
          )}
        </div>
      </Section>
    </>
  );
};

export default App;
