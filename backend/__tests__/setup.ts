import createTypeormConn from '../src/database';

beforeAll(async () => {
  const conn = await createTypeormConn();
  // await conn.runMigrations();
});
