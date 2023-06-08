import { Component } from 'react';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { ContactFind } from './ContactFind/ContactFind';

export class App extends Component {
  state = {
    contacts: [],
    filter:'',
  }
// Запись контактов с проверкой на повторы 
  saveContact = item => {
    if (this.state.contacts.find(elem => elem.name === item.name)) {
      alert(`${item.name} is already in contacts.`)
    } else {
      this.state.contacts.push(item)
      this.setState({ contacts: this.state.contacts })
    }
  };
// Фильтр поиска контакта по имени
  findChange = evt => {
    this.setState({ filter: evt.currentTarget.value })
  };
// Удаление контакта из списка
  deleteItem = id => {
    const idContact = this.state.contacts.findIndex(contact => contact.id === id);
    this.setState({ contact: this.state.contacts.splice(idContact, 1) })
  };

// Считывание из Локал
componentDidMount() {
  const contactsData = JSON.parse(localStorage.getItem('contacts'));
  if (contactsData) {
    this.setState({ contacts: contactsData });
  }
}
// Запись в Локал
  componentDidUpdate(_, prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }




  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(elem => elem.name.toLowerCase().includes(filter.toLowerCase()));
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm getContact={this.saveContact} />
        <h2>Contacts</h2>
        <ContactFind find={filter} findChange={this.findChange} />
        <ContactList contacts={filteredContacts} deleteItem={this.deleteItem} />
      </div>
    )
  }
}



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
