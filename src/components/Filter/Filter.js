import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';

const Filter= () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  return (
    <label className={s.filterlabel}>
      Find contacts by name:
      <input type="search" value={value} onChange={e => dispatch(changeFilter(e.target.value))}></input>
    </label>
  );
}

export default Filter;

Filter.popTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
