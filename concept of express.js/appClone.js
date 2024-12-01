// const express = require("express")
// const app = express()
// const { people } = require("./data.js")

//_ regular form

//* all static code
app.use(express.static("./methods-public"))

//* parse from data
app.use(express.urlencoded({ extended: false }))

// app.post("/login", (req, res) => {
// // console.log(req.body); //# --> {name: "yusuf"}
//@ here name will set which write in input...
//   const { name } = req.body
//   if (name) {
//     res.status(200).send(`Welcome Mohammad ${name}`)
//   } else {
//     res.status(401).send("Confirm your name first")
//   }
//   // res.send("<h1>Posting</h1>")
// })

//_ javascript form

//* parse json
app.use(express.json())

//! GET Request
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people })
})

//! Post Request
//* click submit button (javascript form)
app.post("/api/people", (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide some value in it" })
  }
  res.status(201).json({ person: name })
})

//! another Post request :
app.post("/api/people/postman", (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide some value in it" })
  }

  //@ here people is come from data.js
  res.status(201).json({ data: [...people, name] })
})

//@ here previous code, app.get() and app.post() both of that url are same but method are different
//? app.get() --> I'm reading data from API people.
//? app.post() --> I'm actually trying to add data.

//! Put request
app.put("/api/people/:id", (req, res) => {
  //@ this is basically update our data
  const { id } = req.params
  const { name } = req.body
  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `no person with id ${id}` })
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

//! Delete
app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(9000, () => {
  console.log("Server is listening on port 9000....")
})
