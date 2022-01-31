import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';

import { Switch } from 'react-router-dom';
import { authOperations, authSelectors } from './redux/authorization';
// import CircularProgress from '@mui/material/CircularProgress';
import './App.css';

// import { nanoid } from 'nanoid';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { Bars } from  'react-loader-spinner'
// import { error } from '@pnotify/core';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

// import ContactForm from './components/ContactForm';
// import ContactLIst from './components/ContactList';
// import Filter from './components/Filter/Filter';
// import Title from './components/Title/Title';
import AppBar from './components/AppBar';
import Home from './views/HomeView/HomeView';

import PublicRoute from  './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'
import Container from './components/Container';


const Login = lazy(() =>
  import('./views/LoginView/LoginView.js' /* webpackChunkName: "login-page" */),
);
const SignUp = lazy(() =>
  import('./views/SignUpView/SignUpView.js' /* webpackChunkName: "signup-page" */),
);
const Contacts = lazy(() =>
  import('./views/ContactsView/ContactsView.js' /* webpackChunkName: "contacts-page" */),
);

const App = () => {
 
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.fetchCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
     <Container>
     <AppBar/>
     {isFetchingCurrentUser ? (
       <Bars heigth="100" width="100" color="violet" arialLabel="loading-indicator" className='spinner'/>
     ) : (
       <Switch>
         <PublicRoute path="/" exact redirectTo="/contacts" restricted>
           <Home/>
         </PublicRoute>

         <Suspense
           fallback={
             <div className='wrapp'>
               <Bars heigth="100" width="100" color="violet" arialLabel="loading-indicator" className='spinner'/>
             </div>
           }
         >
           <PublicRoute path="/login" redirectTo="/contacts" restricted>
             <Login />
           </PublicRoute>
           <PublicRoute path="/register" redirectTo="/contacts" restricted>
             <SignUp />
           </PublicRoute>
           <PrivateRoute path="/contacts" redirectTo="/login">
             <Contacts />
           </PrivateRoute>
         </Suspense>
       </Switch>
     )}
   </Container>
 );

};

export default App;
