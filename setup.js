import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { repertoires } from './repertoire/page'
dotenv.config();

const setup = async () => {
    console.log(repertoires)
  let client;

  try {
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();

    const hasData = await client
      .db('pianist')
      .collection('repertoires')
      .countDocuments();

    if (hasData) {
      console.log('Database already exists with data');
      client.close();
      return;
    }

    const records = repertoires

    const insert = await client
      .db('pianist')
      .collection('repertoires')
      .insertOne(records);

    if (insert.acknowledged) {
      console.log('Successfully inserted records');
    }
  } catch (error) {
    return 'Database is not ready yet';
  } finally {
    if (client) {
      await client.close();
    }
  }
};

try {
  setup();
} catch {
  console.warn('Database is not ready yet. Skipping seeding...');
}

export { setup };