import express from "express";
import { dbConnection } from "./DB/database.js";
import dotenv from "dotenv/config.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.get("/test", (req, res) => {
  res.send('YEST THIS IS WORKING yess')
});


app.listen(parseInt(process.env.PORT), () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
