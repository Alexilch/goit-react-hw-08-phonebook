import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import ContactList from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import { Bars } from  'react-loader-spinner'
import s from '../HomeView/HomeView.module.css';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const contacts = useSelector(contactsSelectors.getContacts);

  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  return (
    <div className={s.text}>
      <ContactForm contacts={contacts} />
      <Filter />
      {isLoadingContacts ? <Bars heigth="100" width="100" color="violet" arialLabel="loading-indicator" className='spinner'/> : <ContactList />}
    </div>
  );
}