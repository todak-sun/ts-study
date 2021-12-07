import { Connection } from 'typeorm';
import { CatsEntity } from './cats.entitiy';
import { CATS_REPOSITORY } from './cats.constants';
import { DATABASE_CONNECTION } from '../database/database.constants';

export const catsProviders = [
  {
    provide: CATS_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(CatsEntity),
    inject: [DATABASE_CONNECTION],
  },
];
