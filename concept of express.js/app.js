const express = require("express")
const app = express()

//! data
const { people } = require("./data.js")

//! express router
const routePeople = require("./routes/people.js")
const routeAuth = require("./routes/auth.js")

//_ regular form

//* all static code
app.use(express.static("./methods-public"))

//* parse from data
app.use(express.urlencoded({ extended: false }))

//_ Route in Express

//* perse json
app.use(express.json())

//* pass fixte route in middleware function
app.use("/api/people", routePeople)
app.use("/login", routeAuth)

app.listen(9000, () => {
  console.log("Server is listening on port 9000....")
})
