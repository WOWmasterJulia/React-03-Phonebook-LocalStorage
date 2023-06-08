import PropTypes from 'prop-types';
import {ContactItem} from '../ContactItem/ContactItem'
import css from './ContactList.module.css'

export const ContactList = ({ contacts, deleteItem }) => (
    <ul className={css.contacts_list}>
        {contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} deleteItem={deleteItem} />
        ))}
    </ul>
)

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteItem:PropTypes.func.isRequired,
}