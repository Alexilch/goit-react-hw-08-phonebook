import { NavLink } from 'react-router-dom';
import ContactsIcon from '@mui/icons-material/Contacts';
import s from './HomeView.module.css';

function Home() {
  return (
    <div>
      <p className={s.text}>
        <ContactsIcon fontSize="large" />
        <br />
        <NavLink to="/login" className={s.link}>
          Log in
        </NavLink>{' '}
        to open the phone book or <br />
        <NavLink to="/register" className={s.link}>
          register a new profile
        </NavLink>{' '}
        to create a new phone book
      </p>
    </div>
  );
}

export default Home;