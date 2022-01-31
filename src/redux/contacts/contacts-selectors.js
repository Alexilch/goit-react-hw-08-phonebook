
const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;

const contactsSelectors = {
  getFilter,
  getContacts,
  getLoading
};
export default contactsSelectors;