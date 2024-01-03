import { MongoClient, ObjectId } from "mongodb";
import { useEffect } from "react";
async function haandler(req, res) {
  if (req.method === "POST") {
    const newData = req.body;
    console.log(newData);
    if (
      newData.name.trim() === "" ||
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
      const newUser = await db.collection("authentication").insertOne(newData);

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
  if (req.method === "PUT") {
    const data = req.body;
    console.log(data);
    if (
      data.email.includes("@") &&
      data.email.trim().length > 0 &&
      data.password.trim().length > 0
    ) {
      const client = await MongoClient.connect(
        "mongodb+srv://mohseniz25:PLsUGaAZOK6qkYsM@cluster0.sbiuujd.mongodb.net/quiz?retryWrites=true&w=majority"
      );
      const db = client.db();
      const collectionUser = await db
        .collection("authentication")
        .findOne({ email: data.email, password: data.password });

      if (collectionUser) {
        let user = {
          id: collectionUser._id.toString(),
          name: collectionUser.name,
          email: collectionUser.email,
          password: collectionUser.password,
          score: collectionUser.score,
        };
        res.status(203).json({
          message: "connected to collection",
          data: user,
        });
      } else {
        res.status(206).json({ message: "username or email is wrong" });
      }
      console.log(collectionUser);
      client.close();
    }
  }
}

export default haandler;
