import { sequelizeMemory } from '../../utils/db';
import { Description } from './Description';

sequelizeMemory.addModels([Description]);

//Description.removeAttribute('id');

export { Description };
