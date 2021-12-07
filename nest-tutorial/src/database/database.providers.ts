import { createConnection } from 'typeorm';
import { DATABASE_CONNECTION } from './database.constants';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'todak',
        password: 'todak',
        database: 'postgres',
        entities: [__dirname + '/../**/*.entitiy{.ts,.js}'],
        synchronize: true,
      }),
  },
];
