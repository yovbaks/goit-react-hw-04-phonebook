import { Item, Contact, Button } from './ContactList.styled';
const ContactList = ({ contacts, onDeleteContact }) => (
  <ul style={{ padding: '0px' }}>
    {contacts && contacts.map(({ id, name, number }) => {
      return (
        <Item key={id}>
          <Contact>
            {name} : {number}
          </Contact>
          <Button type ="button" onClick={() => onDeleteContact(id)}>X</Button>
        </Item>
      );
    })}
  </ul>
);

export default ContactList;
