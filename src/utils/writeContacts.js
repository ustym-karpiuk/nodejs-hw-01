import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const writeContacts = async (updatedContacts) => {
  try {
    if (updatedContacts.length === 0) {
      await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
      return;
    }
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};
