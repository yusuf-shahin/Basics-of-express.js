const express = require("express");
const app = express();
const { people } = require("./data.js");

//* all static code
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  // console.log(req.body); //# --> {name: "yusuf"}
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome Mohammad ${name}`);
  } else {
    res.status(401).send("Confirm your name first");
  }
});

app.listen(9000, () => {
  console.log("Server is listening on port 9000....");
});

// app.get("/api/people", (req, res) => {
//   res.status(200).json({ success: true, data: people });
// });
