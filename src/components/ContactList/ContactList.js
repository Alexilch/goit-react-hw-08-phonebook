import s from './ContacnList.module.css';
import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactList = () => {
  const dispatch = useDispatch();
  const onDelete = id => dispatch(contactsOperations.deleteContact(id));
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);

  function filtration(value) {
    if (value === '') {
      return contacts;
    } else {
      return contacts.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(value);
      });
    }
  }
  return (
    <ol className={s.contactlist}>
      {filtration(filter).map(contact => (
        <li key={contact.id} id={contact.id} className={s.contactlistitem}>
          <div className={s.itemcontentwrap}>
            <span className={s.contactname}>{contact.name}</span>
            <span className={s.contactnumber}>{contact.number}</span>
            <IconButton>
              <DeleteIcon
                onClick={() => onDelete(contact.id)}
                className={s.deletebutton}
              />
            </IconButton>
          </div>
        </li>
      ))}
    </ol>
  );
};
export default ContactList