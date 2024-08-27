# Basics of Express.js

**What Is Express JS?**

- Express is a node js web application framework that provides broad features for building web and mobile applications. It is used **to build a single page, multipage, and hybrid web application.** It's a layer built on the top of the Node js that helps manage servers and routes.

![Alt](https://www.course-api.com/images/slides/slide-4.png)

### HTTP basics :-

- http is a build module of node, it is avalavle ==innode_modules== folder, so just import it in our project .
  `const http = require('http')`

**create a http server**
`const server = http.createServer((req, res) => {})`

- We pass two peremeter in _http.createServer()_ method ==require== and ==request==

![Alt](https://www.course-api.com/images/slides/slide-5.png)

**See the server in browser, .listen() method. What is .lesten() method?**

- listen() is an inbuilt application programming interface of the class Server within the HTTP module which is used to start the server by accepting new connections. Syntax: const ==server.listen(5000)== .

```js
const http = require("http");
const server = http.createServer((req, res) => {
  console.log("user hit the server");
  res.end("Home Page");
});

server.listen(5000);
```

```js
const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url;
  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>home page</h1>");
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(5000);
```
