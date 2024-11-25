const express = require("express")
const path = require("path")

const app = express()

// setup static and middleware
// app.use(express.static("./public"))

console.log(__dirname)

app.get("/style", (req, res) => {
  //@ __dirname --> (server-app.js)

  //* we get the file using this path ,
  // res.sendFile(path.resolve(__dirname, "public", "./index.html"))
  //#   show vanilla html code
  res.sendFile(path.resolve(__dirname, "public", "./style.css"))
  //#   just css code
  //@   adding to static assets
  //?   SSR
})

app.all("*", (req, res) => {
  res.status(404).send("resource not found")
})

app.listen(9000, () => {
  console.log("server is listening on port 9000....")
})
