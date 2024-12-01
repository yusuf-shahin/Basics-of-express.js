const express = require("express")
const router = express.Router()

router.post("/", (req, res) => {
  // console.log(req.body); //# --> {name: "yusuf"}
  // @ here name will set which write in input...
  const { name } = req.body
  if (name) {
    res.status(200).send(`Welcome Mohammad ${name}`)
  } else {
    res.status(401).send("Confirm your name first")
  }
  // res.send("<h1>Posting</h1>")
})

module.exports = router
