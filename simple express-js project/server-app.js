const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  //# __dirname --> (server-app.js)
  // res.sendFile(path.resolve(__dirname, "./index.html"));
  //! move "./index.html" --> "./public"
  //#   adding to static assets
  //?   SSR
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
