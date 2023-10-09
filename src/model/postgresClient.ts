import dotenv from 'dotenv';
import path from 'path';
import pkg, { PoolConfig } from 'pg';
import { PostgreConfig } from '../interfaces/Idatabases';
dotenv.config({path: path.resolve(__dirname,'../../.env')});

const { Pool, Client } = pkg;

const configuration: PostgreConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
  connectionString: process.env.DB_CONNECTION,
};

const pConfiguration: PoolConfig = {
  ...configuration,
  connectionTimeoutMillis: 1800000,
  idleTimeoutMillis: 10000,
}

export const pgUseClient: pkg.Client = new Client(configuration);
export const poolClient: pkg.Pool = new Pool(pConfiguration);


