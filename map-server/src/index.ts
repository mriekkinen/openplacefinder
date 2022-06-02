import express from 'express';
import morgan from 'morgan';
import { Op } from 'sequelize';

import { PORT } from './utils/config';
import { connectToDatabase } from './utils/db';
import { Wikipage } from './models/disk';
import { Description } from './models/memory';
import overpassRouter from './routes/overpass';
import descriptionRouter from './routes/descriptions';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.text());
app.use(express.static('frontend'));

app.use('/api/overpass', overpassRouter);
app.use('/api/descriptions', descriptionRouter);

app.use((_req, res) => {
  res.status(404).json({ error: 'Unknown endpoint' });
});

const populateSearch = async () => {
  const pages = await Wikipage.findAll({
    attributes: ['key', 'value', 'description'],
    where: {
      [Op.and]: {
        lang: 'en',
        description: { [Op.ne]: null }
      }
    }
  });

  await Description.sync({ alter: true, logging: false });

  await Description.bulkCreate(pages.map(p => ({
    key: p.key,
    value: p.value,
    description: p.description
  })), {
    validate: true,
    logging: false
  });
};

const start = async () => {
  await connectToDatabase();
  await populateSearch();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start().catch(e => console.log(e));
