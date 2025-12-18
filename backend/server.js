import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server started ==> hello");
});

const port = 3000 || 4000;

app.listen(port, () => {
  console.log("Server running at : ", port);
});
