import AddContact from './AddContact';
import { Component } from 'react';
import ListOfContacts from './ListOfContacts';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };
  addBookChild = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <AddContact addContact={this.addBookChild} />
        <ListOfContacts contacts={this.state}/>
      </>
    );
  }
}
