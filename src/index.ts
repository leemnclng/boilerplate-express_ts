import dotenv from 'dotenv';
import express, { Application } from 'express'
import { startPostgreConnection } from './db/dbConnection';
import authRouter from './routes/authRoute';
import { poolClient } from './model/postgresClient';
dotenv.config();

const app: Application = express();
const PORT: number | string = process.env.PORT || 5003;

app.use('/auth',authRouter);

app.listen(PORT,(): void => {
  // startMongooseConnection(process.env.MONGODB_URL || '');
  startPostgreConnection(poolClient);
  console.log(`Server is running at localhost:${PORT}`);
})

const sampQuery = async(): Promise<any> => {
  const result = await poolClient.query('SELECT * FROM actor LIMIT 5');
  console.log(result);
}


sampQuery();