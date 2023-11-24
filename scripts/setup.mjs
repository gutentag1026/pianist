import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const setup = async () => {
  let client;

  try {
    console.log(process.env.MONGODB_URI);
    const client = await ent.connect(process.env.MONGODB_URI)
    console.log(client);
    const db = client.db();

    const collection = db.collection('sample_airbnb.listingsAndReviews');

    const result = collection.find({ beds: { $gt: 1 } });

    console.log(result);

    client.close();
//     console.log(process.env.MONGODB_URI)
    
//     client = new MongoClient(process.env.MONGODB_URI);

//     await client.connect();
// console.log('connect')
//     const hasData = await client
//       .db('gutentag1026')
//       .collection('sample_airbnb')
//       .countDocuments();
// console.log('hasData')
//     if (hasData) {
//       console.log('Database already exists with data');
//       client.close();
//       return;
//     }

    // const records = [...Array(10)].map(() => {
    //   const [fName, lName] = faker.name.findName().split(' ');
    //   const username = faker.internet.userName(fName, lName);
    //   const email = faker.internet.email(fName, lName);
    //   const image = faker.image.people(640, 480, true);

    //   return {
    //     name: `${fName} ${lName}`,
    //     username,
    //     email,
    //     image,
    //     followers: 0,
    //     emailVerified: null
    //   };
    // });

    // const insert = await client
    //   .db('test')
    //   .collection('users')
    //   .insertMany(records);

    // if (insert.acknowledged) {
    //   console.log('Successfully inserted records');
    // }
  } catch (error) {
    return 'Database is not ready yet';
  } finally {
    if (client) {
        console.log('close')
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