import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const readContacts = async () => {
  try {
    return JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  } catch (error) {
    console.log(error);
  }
};
