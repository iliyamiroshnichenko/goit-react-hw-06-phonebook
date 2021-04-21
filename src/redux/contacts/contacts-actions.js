import types from './contacts-types';
import shortid from 'shortid';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };
