const express = require("express");
const app = express();
// const logger = require("./logger");
// const authorize = require("./authorize");

const logger = (req, res, next) => {
  console.log("This is logger func...");
  next();
};

const authorize = (req, res, next) => {
  console.log("This is authorize func...");
  next();
};

//  req => middleware => res
app.use([logger, authorize]);
// api/home/about/products
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(9000, () => {
  console.log("Server is listening on port 9000....");
});
