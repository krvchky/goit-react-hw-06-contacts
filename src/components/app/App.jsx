import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactlist/ContactList";
import SearchBox from "../searchBox/SearchBox";
import style from './App.module.css';

export default function App() {
  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
