import express, { Request, Response } from 'express';
import { Op } from 'sequelize';

import { Description } from '../models/memory';

const router = express.Router();

router.get('/:key=:value', (req: Request, res: Response) => {
  const key = req.params.key;
  const value = req.params.value === '*' ? null : req.params.value;

  getDescription(key, value)
    .then(description => {
      if (!description) {
        return res.status(404).end();
      }

      return res.json({ key, value, description });
    })
    .catch(err => {
      console.log('Error:', err);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      res.json({ error: err });
    });
});

const getDescription = async (key: string, value: string | null) => {
  if (!value) {
    const row = await Description.findOne({
      where: {
        [Op.and]: {
          key,
          value: { [Op.is]: null }
        }
      }
    });

    return row?.description;
  }

  const row = await Description.findOne({
    where: {
      [Op.and]: {
        key,
        value
      }
    }
  });

  return row?.description;
};

export default router;
