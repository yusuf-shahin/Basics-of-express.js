# Navbar project using Express js

- as _express_ is a third pirty module. so , first we need to install it.

- `npm init -y`
- `npm install express`
- create .gitignore file --> `/node_modules`

**import express from _node-modules_**

```js
const express = require("express")
const app = express()

app.listen(5000)
```

- import path from _node-modules_ `const path = require("path");`
- What is path modules ? [Click here](https://github.com/yusuf-shahin/Basics-of-node-js?tab=readme-ov-file#what-is-path-module-)

- [Click here to learn details...](https://mirzaleka.medium.com/working-with-paths-in-node-js-447cd0f2ec56)

**Routing**

- [Express routing in details](https://expressjs.com/en/guide/routing.html)

```js
const express = require("express")
const path = require("path")

const app = express()

app.get("/index", (req, res) => {
  //@ here we basically send the file to create the root
  res.sendFile(path.resolve(__dirname, "public", "./index.html"))
  //#  show vanilla html code
  //   res.sendFile(path.resolve(__dirname, "public", "./style.css"))
  //#  just css code
  //@  adding to static assets
  //?  SSR
})

app.all("*", (req, res) => {
  res.status(404).send("resource not found")
})

app.listen(5000, () => {
  console.log("server is listening on port 5000....")
})
```

- **`path.resolve(__dirname, "public", "./index.html")`** in this code we create the path
- send the response of file --> `index.html` from server .

- `style.css` , `logo.svg` , `browser-app.js` we dont get them .

**For that reason the result in browser**

![Relative](./image/error-browser.jpeg)

**the network**

![Relative](./image/error-network.jpeg.jpeg)

- So we must want to get `style.css` , `logo.svg` , `browser-app.js` those path .

**_create a folder name "public"_**

- copy `style.css` , `logo.svg` , `browser-app.js`
- past thats all file in **public** folder

**_setup static and middleware_**

- `app.use(express.static("./public"));`
- here **app.use()** method is setting up for _middleware_ .
- **static** asset meaning the server does not need to change it.
- the example of **static** asset is _image file , style file , javascript file_ .

### The whole code is :-

```js
const express = require("express")
const path = require("path")

const app = express()

// setup static and middleware
app.use(express.static("./public"))

app.get("/", (req, res) => {
  //# __dirname --> (server-app.js)
  res.sendFile(path.resolve(__dirname, "./index.html"))
})

app.all("*", (req, res) => {
  res.status(404).send("resource not found")
})

app.listen(5000, () => {
  console.log("server is listening on port 5000....")
})
```

**Another approach**

- **as index.html is a static file, we can move this to public folder .**

- `"./index.html"` file --> `"./public"` folder

- everything is gonna okk

**The new code is :-**

```js
const express = require("express")
const path = require("path")

const app = express()

// setup static and middleware
app.use(express.static("./public"))

app.all("*", (req, res) => {
  res.status(404).send("resource not found")
})

app.listen(5000, () => {
  console.log("server is listening on port 5000....")
})
```
