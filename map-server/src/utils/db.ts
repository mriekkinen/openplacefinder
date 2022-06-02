import { Sequelize } from 'sequelize-typescript';
import { OPEN_READONLY } from 'sqlite3';

import { DESCRIPTIONS_DB } from './config';

const path = `${__dirname}/../../${DESCRIPTIONS_DB}`;

export const sequelizeDisk = new Sequelize({
  database: 'main',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: path,
  dialectOptions: {
    readWriteMode: OPEN_READONLY
  },
});

export const sequelizeMemory = new Sequelize({
  database: 'main',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: ':memory:',
});

export const connectToDatabase = async () => {
  try {
    console.log(`opening db file: ${path}`);
    await sequelizeDisk.authenticate();
    await sequelizeMemory.authenticate();
    console.log('database connected');
  } catch (err) {
    console.log('connecting database failed');
    console.log(err);
    return process.exit(1);
  }

  return null;
};
