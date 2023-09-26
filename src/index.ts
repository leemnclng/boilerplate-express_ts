import * as dotenv from 'dotenv';
import express, { Application } from 'express'
import { startMongooseConnection } from './db/dbConnection';
import authRouter from './routes/authRoute';

dotenv.config();

const app: Application = express();
const PORT: number | string = process.env.PORT || 5003;

app.use('/auth',authRouter);

app.listen(PORT,(): void => {
  startMongooseConnection(process.env.MONGODB_URL || '');
  console.log(`Server is running at localhost:${PORT}`);
})