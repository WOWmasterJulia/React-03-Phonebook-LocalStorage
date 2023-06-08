import PropTypes from 'prop-types';
import css from './ContactFind.module.css'
import { nanoid } from "nanoid";

const inputId = nanoid();

export const ContactFind = ({find, findChange}) => (
    <>
        <label  className={css.find_label} htmlFor={inputId}>Find contacts by name</label>
        <input
            id={inputId}
            className={css.find_input}
            type="text"
            name="find"
            value={find}
            placeholder="Find name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={findChange}
        />
    </>
)

ContactFind.propTypes = {
    find: PropTypes.string.isRequired,
    findChange: PropTypes.func.isRequired,
}