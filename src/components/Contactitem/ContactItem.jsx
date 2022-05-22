import PropTypes from 'prop-types';
import s from '../Contactitem/Contactitem.module.css';
const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <>
    <div className={s.wrapper}>
      <a href="tel:{number}" className={s.link}>
        <p className={s.text}>{name}</p>
        <div>
          <p className={s.number}>{number}</p>
        </div>
      </a>
      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(id)}
        aria-label="delete contact"
      >
        Delete
      </button>
    </div>
  </>
);

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
