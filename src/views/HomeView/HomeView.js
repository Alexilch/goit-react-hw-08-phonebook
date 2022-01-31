import { NavLink } from 'react-router-dom';
import s from './HomeView.module.css';
import '../../images/hero2.jpg'

function Home() {
  return (
    <div className={s.hero}>
      <p className={s.title}>
        Please,  
        <NavLink to="/login" className={s.link}>
        log in
        </NavLink>{' '}
        to your phonebook or <br />
        <NavLink to="/register" className={s.link}>
          register 
        </NavLink>{' '}
        to create a new phonebook!
      </p>
    </div>
  );
}

export default Home;