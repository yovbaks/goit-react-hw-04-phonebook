import { useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { value } = event.currentTarget;
    event.currentTarget.name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contacts</Button>
      </Form>
    </div>
  );
};

export default ContactForm;

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//     id: '',
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state.name, this.state.number);
//     this.reset();
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     // const { contacts,filter } = this.state;

//     return (
//       <div>
//         <Form onSubmit={this.handleSubmit}>
//           <Label>
//             Name
//             <Input
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </Label>
//           <Label>
//             Number
//             <Input
//               type="tel"
//               name="number"
//               value={this.state.number}
//               onChange={this.handleChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </Label>
//           <Button type="submit">Add contacts</Button>
//         </Form>
//       </div>
//     );
//   }
// }

// export default ContactForm;
