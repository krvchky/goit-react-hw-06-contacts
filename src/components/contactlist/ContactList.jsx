import Contact from "./contact/Contact";
import style from "./ContactList.module.css";
import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';
import {selectContacts} from '../../redux/contactsSlice.js'

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={style.contactList}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}
