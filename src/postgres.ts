import { Pool } from 'pg';

export class DBConnector {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      host: 'db', // This should match the service name in docker-compose
      database: 'polymer',
      password: '', // Use secure passwords and environment variables for production
      port: 5432,
    });
  }

  public async query(text: string, params?: any[]) {
    const res = await this.pool.query(text, params);
    return res;
  }
}
