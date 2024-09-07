const express = require("express");
const app = express();

//* middleware func
const logger = (req, res, next) => {
  console.log(req.user);
  next();
};

// middleware func
const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "yusuf") {
    req.user = { name: "shahin", id: 19 };
    req.userDetails = {
      name: "Yusuf Shahin",
      job: "Web Developer",
      location: "Noakhali",
    };
    console.log(req.url);
    next();
  } else {
    res.status(401).send("Unauthorize");
  }
};

//* static app
// app.use(express.static('./public'))
// app.use(morgan("tiny"));

app.use([authorize, logger]);

//? get() method :-

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  console.log(req.userDetails);

  res.send("About Yusuf Shahin");
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
