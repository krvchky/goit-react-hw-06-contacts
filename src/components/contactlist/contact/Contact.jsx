import { FiUser, FiPhone } from "react-icons/fi";
import style from "./Contact.module.css";  
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contactsSlice';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={style.contactItem}> 
      <div>
        <FiUser />
        {contact.name}
      </div>
      <div>
        <FiPhone />
        {contact.number}
      </div>
      <div className={style.containerBtn}>
        <button className={style.deleteButton} onClick={() => dispatch(deleteContact(contact.id))}>
          delete
        </button>
      </div>
    </div>
  );
}
