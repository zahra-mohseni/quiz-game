import { MongoClient } from "mongodb";
async function Handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
  }
  const client = await MongoClient.connect(
    "mongodb+srv://mohseniz25:Zahra1996@cluster0.df9aj2h.mongodb.net/quiz-pj?retryWrites=true&w=majority"
  );
  const db = client.db();
  const collection = db.collection("authentication");
  const result = collection.insertOne({});
  client.close();
  res.status(201).json({ message: "authentication done successfully" });
}
