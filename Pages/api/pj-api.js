import { MongoClient } from "mongodb";
import { useEffect } from "react";
async function haandler(req, res) {
  if (req.method === "POST") {
    const newData = req.body;
    console.log(newData);
    if (
      newData.name.trim().length === "" ||
      !newData.email.includes("@") ||
      newData.password.length < 6
    ) {
      res.status(202).json({
        message: "make sure your entry data is correct ",
      });
    } else {
      const client = await MongoClient.connect(
        "mongodb+srv://mohseniz25:PLsUGaAZOK6qkYsM@cluster0.sbiuujd.mongodb.net/quiz?retryWrites=true&w=majority"
      );
      const db = client.db();
      const newUser = await db
        .collection("authentication")
        .insertOne({ newData });

      const signUpedUser = {
        id: newUser.insertedId.toString(),
        name: newData.name,
        email: newData.email,
        password: newData.password,
        score: newData.score,
      };
      client.close();
      res.status(200).json({
        message: "connected",
        responsedData: signUpedUser,
        token: signUpedUser.id,
      });
    }
  }
}

export default haandler;
