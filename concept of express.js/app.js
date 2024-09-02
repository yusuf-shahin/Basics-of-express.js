const express = require("express");
const app = express();

//  req ==> middleware ==> res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // res.send("middleware teasting")
  next();
};

app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/image", (req, res) => {
  res.send("image");
});
app.get("/api/test", (req, res) => {
  res.send("test");
});
app.get("/api/product", (req, res) => {
  res.send("product");
});

app.listen(9000, () => {
  console.log("Server is listening on port 9000....");
});
