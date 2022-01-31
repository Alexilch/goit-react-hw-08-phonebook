
const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;


// const getTotalContactsCount = state => {
//   const contacts = getAllContacts(state);
//   return contacts.length;
// };

const contactsSelectors = {
  getFilter,
  getContacts,
  getLoading
};
export default contactsSelectors;