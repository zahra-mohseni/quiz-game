import { MongoClient } from "mongodb";
async function haandler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    console.log(data);
    const client = await MongoClient.connect(
      "mongodb+srv://mohseniz25:pzblyP3MTX8jFVN5@cluster0.df9aj2h.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db("quiz");
    const dataCollection = db.collection("authentication");
    const result = await dataCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json("data saved succesfully");
  } else if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://mohseniz25:pzblyP3MTX8jFVN5@cluster0.df9aj2h.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db("quiz");
    const dataCollection = db.collection("authentication");
    const result = await dataCollection.find({}).toArray();
    client.close();
    res.status(202).json({ message: "collected data successfuly", result });
    res.body = result;
  }
}

export default haandler;
