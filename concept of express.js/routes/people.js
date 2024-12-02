const express = require("express")
const router = express.Router()
//@ in route basically we store our all request

//* import people
const { people } = require("../data")
const {
  getPeople,
  updatePeople,
  createPeople,
  createPeoplePostman,
  deletePeople,
} = require("../controller/peopleSetup")

//! GET Request
// router.get("/", getPeople)

//! Post Request
//* click submit button (javascript form)
// router.post("/", createPeople)

//! another Post request :
// router.post("/postman", createPeoplePostman)

//@ here previous code, app.get() and app.post() both of that url are same but method are different
//? app.get() --> I'm reading data from API people.
//? app.post() --> I'm actually trying to add data.

//! Put request
// router.put("/:id", updatePeople)

//! Delete
// router.delete("/:id", deletePeople)

router.route("/").get(getPeople).post(createPeople)
router.route("/postman").post(createPeoplePostman)
router.route("/:id").put(updatePeople).delete(deletePeople)

module.exports = router
