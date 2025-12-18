import express from "express";
import connectDB from "./src/db.js";

const app = express();

// connect databse

connectDB();

app.get("/", (req, res) => {
  res.send("Server started ==> hello");
});

const port = 3000 || 4000;

app.listen(port, () => {
  console.log("Server running at : ", port);
});
