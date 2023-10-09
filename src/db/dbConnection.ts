import mongoose from 'mongoose';
import pkg from 'pg';
const { Pool, Client } = pkg;

//functions to be called on the index depending on what kind of database the user will be using for development

// for establishing a mongodb connection
const startMongooseConnection = async (uri: string): Promise<void> => {
  try {
    const connection = await mongoose.connect(uri);
    if(connection) {
      console.log("Connected to Database");
      return;
    }
  } catch (err) {
    if(err instanceof Error) {
      console.error("Error: startMongooseConnnection Function");
      console.log(err);
      throw err.message;
    }
  }
};

// for establishing a postgreConnection
const startPostgreConnection = async (connParam: pkg.Client | pkg.Pool): Promise<void> => {
  try {
    let client: pkg.Client | pkg.Pool; // to accept either type of client or type of pol

    if(connParam instanceof pkg.Client) { // make a conditional assignment whether the connParam is a Client or a Poll
      client = connParam;
    } else {
      client = connParam;
    }
    // establish connection
    await client.connect();
    console.log("Connected to the database");
  } catch (err) {
    if(err instanceof Error) {
      console.error("Error: startPostgreConnection Function");
      console.log(err);
      throw err.message;
    }
  }
}

export { 
  startMongooseConnection,
  startPostgreConnection
};