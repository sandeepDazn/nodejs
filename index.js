const express = require("express");

const app = express();

app.get("/testing", (req, res) => {
  res.send("hello sandeep world");
});

app.get("/", (req, res) => {
  // testing
  res.send("welcome page")
});

app.listen(8080, () => {
  console.log(`server is running in port 8080`)
});
