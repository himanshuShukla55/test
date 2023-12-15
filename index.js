import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/api", (req, res) => {
  res.status(200).send("Welcome");
});

app.listen(PORT, () => {
  console.log("server is listening on port: ", PORT);
});
