import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  const contact = await readContacts();
  contact.push(createFakeContact());
  await writeContacts(contact);
};

addOneContact();
