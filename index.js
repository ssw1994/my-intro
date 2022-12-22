import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import env from "dotenv";
import connect from "./server/utils/connection.js";
env.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors);
app.use(bodyParser.json());
connect();
app.get("/", (req, res) => {
  res.send("Server running on : " + port);
});

app.listen(port, () => {
  console.log("Server started.....");
});
