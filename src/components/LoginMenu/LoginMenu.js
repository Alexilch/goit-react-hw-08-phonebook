import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/authorization';
import LogoutIcon from '@mui/icons-material/Logout';
import s from './LoginMenu.module.css';

function LoginMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);



  return (
    <div className={s.container}>
      <span className={s.text}>Welcome, {name ? name : 'User'}!</span>
      <button
        type="button"
        className={s.btn}
        onClick={() => dispatch(authOperations.logOut())}
      >
        <LogoutIcon fontSize="small" />
        Log out
      </button>
    </div>
  );
}

export default LoginMenu;