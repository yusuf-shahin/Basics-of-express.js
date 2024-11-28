const express = require("express")
const app = express()
const { people } = require("./data.js")

//_ regular form

//* all static code
app.use(express.static("./methods-public"))

//* parse from data
app.use(express.urlencoded({ extended: false }))

app.post("/login", (req, res) => {
  // // console.log(req.body); //# --> {name: "yusuf"}
  const { name } = req.body
  if (name) {
    res.status(200).send(`Welcome Mohammad ${name}`)
  } else {
    res.status(401).send("Confirm your name first")
  }
  // res.send("<h1>Posting</h1>")
})

//_ javascript form

//* parse json
// app.use(express.json())

// app.get("/api/people", (req, res) => {
//   res.status(200).json({ success: true, data: people })
// })

//* click submit button (javascript form)
// app.post("/api/people", (req, res) => {
//   const { name } = req.body
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: "please provide name value" })
//   }
//   res.status(201).json({ success: true, person: name })
// })

// //! here previous code, app.get() and app.post() both of that url are same but method are different
// //? app.get() --> I'm reading data from API people.
// //? app.get() --> I'm actually trying to add data.

app.listen(9000, () => {
  console.log("Server is listening on port 9000....")
})
