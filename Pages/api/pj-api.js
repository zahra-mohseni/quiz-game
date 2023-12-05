import axios from "axios";
import { json } from "stream/consumers";
import { MongoClient } from "mongodb";
async function haandler(req, res) {
  if (req.method === "POST") {
    const newData = req.body;
    console.log(newData);

    const client = await MongoClient.connect(
      "mongodb+srv://mohseniz25:PLsUGaAZOK6qkYsM@cluster0.sbiuujd.mongodb.net/quiz?retryWrites=true&w=majority"
    );
    const db = client.db();
    const collection = await db.collection("authentication").insertOne(newData);
    console.log(collection);
    client.close();
    res.status(200).json({ message: "connected", responsedData: newData });
  }
}

export default haandler;
