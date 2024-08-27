# Basics of Express.js

**What Is Express JS?**

- Express is a node js web application framework that provides broad features for building web and mobile applications. It is used **to build a single page, multipage, and hybrid web application.** It's a layer built on the top of the Node js that helps manage servers and routes.

![Alt](https://www.course-api.com/images/slides/slide-4.png)

### HTTP basics :-

- [Article...](https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/)

- http is a build module of node, it is avalavle **innode_modules** folder, so just import it in our project .
  `const http = require('http')`

**create a http server**
`const server = http.createServer((req, res) => {})`

- We pass two peremeter in _http.createServer()_ method **require** and **request**

![Alt](https://www.course-api.com/images/slides/slide-5.png)

**See the server in browser, .listen() method. What is .lesten() method?**

- listen() is an inbuilt application programming interface of the class Server within the HTTP module which is used to start the server by accepting new connections. Syntax: const **server.listen(5000)** .

```js
const http = require("http");
const server = http.createServer((req, res) => {
  console.log("user hit the server");
  res.end("Hello, This is Home Page");
});

server.listen(5000);
```

**_HTTP-Headers_**

- writeHead()` property, introduced in Node. js v1. 0, is part of the 'http' module. It is **used to send a response header to the incoming request.** The status code represents a 3-digit HTTP status code (e.g., 404), and the headers parameter contains the response headers.
- [What is HIIP response status code ?](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).
- `res.writeHead(200, { "content-type": "text/html" });`

```js
const server = http.createServer((req, res) => {
   res.writeHead(200, { "content-type": "text/html" });
   // res.end("<h1>home page</h1>") or -->
    res.write("<h1>home page</h1>");
    res.end();
  }
});
```

- In the server [localhost:5000](http://localhost:5000/) , any url we pass like `http://localhost:5000/about` or `http://localhost:5000/info` . The server always show us **"Hello, This is Home Page"**

**_HTTP-Request-Object_**

- `console.log(req.url); //# --> /`

```js
const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.method); //# --> GET
  console.log(req.url); //# --> /

  // in url "http://localhost:5000/about/yusuf"
  // console.log(req.url); //# --> /about/yusuf

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

- to see the information from browser
- _**inspect**--->**network**-->**localhost**_
