import { getConnectionOptions, createConnection, Connection } from 'typeorm';

export default async (): Promise<Connection> => {
  console.log('ENVIROMENT', process.env.NODE_ENV);

  const db = process.env.NODE_ENV === 'test' ? 'test' : 'default'
  const connectionOptions = await getConnectionOptions(db);
  return createConnection({ ...connectionOptions, name: 'default' });
};
