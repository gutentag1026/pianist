import mongoose from "mongoose";
const { MongoClient } = require("mongodb");
// track the connection
let isConnected = false;
const uri = "mongodb+srv://huanghuang5087:jA34ChhD8TShRNDF@cluster0.pjerkr2.mongodb.net/?retryWrites=true&w=majority"
export const connectToDataBase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB connected already");
    return;
  }
  try {
    await mongoose.connect(uri);
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};




export async function run() {
  const client = new MongoClient(uri);
  try {
   
    const database = client.db('sample_airbnb');
    const samples = database.collection('listingsAndReviews');

    // Query for a movie that has the title 'Back to the Future'
    const query = {
      _id:
      "10006546" };
    const sample = await samples.findOne(query);

    console.log(sample);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
