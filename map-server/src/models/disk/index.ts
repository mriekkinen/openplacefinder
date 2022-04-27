import { sequelizeDisk } from '../../utils/db';
import { Wikipage } from './Wikipage';

sequelizeDisk.addModels([Wikipage]);

Wikipage.removeAttribute('id');

export { Wikipage };
