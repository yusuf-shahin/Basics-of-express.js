const express = require("express")
const router = express.Router()

//* import people
const { people } = require("../data")

//! GET Request
router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people })
})

//! Post Request
//* click submit button (javascript form)
router.post("/", (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide some value in it" })
  }
  res.status(201).json({ person: name })
})

//! another Post request :
router.post("/postman", (req, res) => {
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
router.put("/:id", (req, res) => {
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
router.delete("{/:id", (req, res) => {
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

module.exports = router
