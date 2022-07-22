import { useState, useEffect, useMemo } from 'react';

import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { AppContainer } from './App.styled';

export const App = () => {

  const [contacts, setContacts] = useState(
		() => JSON.parse(window.localStorage.getItem('contacts')) ?? []
	);
	const [filter, setFilter] = useState('');

	const deleteContact = id => {
		setContacts(contacts.filter(contact => contact.id !== id));
	};

	const addContact = (name, number) => {
		const contact = {
			id: nanoid(),
			name,
			number,
		};

		const findContact = contacts.find(contact =>
			contact.name.toLowerCase().includes(name.toLowerCase())
		);

		findContact
			? alert(`${name} is already in contact`)
			: setContacts([contact, ...contacts]);
	};

	const changeFilter = event => {
		setFilter(event.currentTarget.value);
	};
	const visibleContacts = useMemo(() => {
		const normalizeFilter = filter.toLowerCase();

		if (contacts.length !== 0) {
			return contacts.filter(contact =>
				contact.name.toLowerCase().includes(normalizeFilter)
			);
		}
		return;
	}, [filter]) // eslint-disable-line

	useEffect(() => {
		const contacts = window.localStorage.getItem('contacts');
		const parsedContacts = JSON.parse(contacts);

		if (parsedContacts) setContacts(parsedContacts);
	}, []);

	useEffect(() => {
		window.localStorage.setItem('contacts', JSON.stringify(contacts));
	}, [contacts]);

  return (
    <>
      <AppContainer>
        <h2>Phonebook</h2>

        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>

        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </AppContainer>
    </>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   addContact = (name, number, id) => {
//     console.log(name, number, id);
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     const findContact = this.state.contacts.find(contact =>
//       contact.name.toLowerCase().includes(name.toLowerCase())
//     );

//     findContact
//       ? alert(`${name} is already in contact`)
//       : this.setState(({ contacts }) => ({
//           contacts: [contact, ...contacts],
//         }));
//   };

//   formSubmitHandler = data => {
//     console.log(data);
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts);
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   render() {
//     const { contacts, filter } = this.state;

//     const normalizeFilter = filter.toLowerCase();
//     const visibleContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeFilter)
//     );

//     return (
//       <>
//         <AppContainer>
//           <h2>Phonebook</h2>

//           <ContactForm onSubmit={this.addContact} />

//           <h2>Contacts</h2>

//           <Filter value={filter} onChange={this.changeFilter} />
//           <ContactList
//             contacts={visibleContacts}
//             onDeleteContact={this.deleteContact}
//           />
//         </AppContainer>
//       </>
//     );
//   }
// }
