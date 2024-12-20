const express = require("express")
const app = express()

// first import ==> pass all static file using middle ware ==>

//! express router
const routePeople = require("./routes/people.js")
const routeAuth = require("./routes/auth.js")

//_ regular form

//* all static code
app.use(express.static("./methods-public"))

//* parse from data
app.use(express.urlencoded({ extended: false }))
//@ It is related to auth.js

//_ Route in Express

//* perse json
app.use(express.json())
//@ it is related to people.js ==> router.post

//* pass fixte route in middleware function
app.use("/api/people", routePeople)
app.use("/login", routeAuth)

app.listen(9000, () => {
  console.log("Server is listening on port 9000....")
})
