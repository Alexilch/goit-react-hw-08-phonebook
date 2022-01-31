import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import Authorization from '../Authorization';
import LoginMenu from '../LoginMenu';
import { authSelectors } from '../../redux/authorization';
import s from './AppBar.module.css';

function AppBar({ children }) {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  return (
    <header className={s.header}>
      {children}
      <NavLink to="/contacts" className={s.link} activeClassName={s.current}>
        <PhoneIcon />
        <span className={s.text}>Phonebook</span>
      </NavLink>
      {isLoggedIn ? <LoginMenu name="" /> : <Authorization />}
    </header>
  );
}

export default AppBar;