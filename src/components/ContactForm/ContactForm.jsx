import s from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleGetValue = e => {
    const prop = e.currentTarget.name;
    this.setState({ [prop]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label>
          Name
          <input
            className={s.namefirst}
            value={this.state.name}
            onChange={this.handleGetValue}
            placeholder="Rosie Simpson"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.inputc}>
          Number
          <input
            className={s.namesecond}
            value={this.state.number}
            onChange={this.handleGetValue}
            placeholder="459-12-56"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={s.button} type="submit" aria-label="button-submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
