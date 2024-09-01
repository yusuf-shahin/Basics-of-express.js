# Basics of Express.js

**Simple introduction of _HTTP module_ and _express js_ **

```js
//! ===============
//? express js :
//! ===============

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(9000, () => {
  console.log("Example app listening on port 9000");
});

// ! ===============
//? same thing using HTTP modules
// ! ===============

const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<h1>hello people</h1>");
  res.end();
});

server.listen(9000, () => {
  console.log("Example app listening on port 9000");
});
```

### Introduction to HTTP :-

![Alt](https://www.course-api.com/images/slides/slide-4.png)

- [Click This Article to learn HTTP modules in details](https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/)

_**HTTP-Basics**_

- http is a build module of node, it is avalavle in **node_modules** folder, so just import it in our project .
- `const http = require('http')`

**create a http server**

- `const server = http.createServer((req, res) => {})`

- We pass two peremeter in _**http.createServer()**_ method **require** and **request**

- listen(9000, () => comsole.log(message))

![Alt](https://www.course-api.com/images/slides/slide-5.png)

_**http.createServer() Example :-**_

```js
const http = require("http");
const server = http.createServer((req, res) => {
  console.log("user hit the server");
  //# every time when we refreash our browser, in console we see this message
  res.write("Hello this is my Home page");
  res.end();
});

server.listen(9000, () => {
  console.log("Example app listening on port 9000");
});
```

- **localhost:9000**

**Create a basic _HTTP Server_ :-**

```js
const server = http.createServer((req, res) => {
  // console.log(req.method); //# --> GET
  // console.log(req.url); //# --> /
  const url = req.url;

  // in url "http://localhost:5000/about/yusuf"
  // console.log(req.url); //# --> /about/yusuf

  // home page
  if (url === "/") {
    res.write("<h1>home page</h1>");
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.write("<h1>about page</h1>");
    res.end();
  }

  // 404
  else {
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(9000, () => {
  console.log("Example app listening on port 9000");
});
```

- **here, in _url_ if we write `http://localhost:9000/undefine` , borwser show us :-**

![Relative](./Image/not-found.jpeg)

**But in borwser network we find this :-**

![Relative](./Image/undefine-solved.jpeg)

- **Page not found , but still in _network_ everything is gonna ok**
- Here come the concept of _HTTP Headers_ .

**_HTTP Headers_**

- **writeHead()** property, introduced in Node.js v1.0. It is part of the 'http' module. It is **used to send a response header to the incoming request.** The status code represents a _**3-digit HTTP status code**_ (e.g., 404), and the headers parameter contains the response headers.

- [What is HTTP response status code ?](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

- `res.writeHead(200, { "content-type": "text/html" });`

- res.writeHead(3-digit HTTP status code, {"content-type": ...})

- **content-type**, could be _"text/html" , "text/css", "image/svg+xml", "text/javascript"_ .

```js
const server = http.createServer((req, res) => {
   res.writeHead(200, { "content-type": "text/html" });
   // res.end("<h1>home page</h1>") or -->
    res.write("<h1>home page</h1>");
    res.end();
  }
});
```

- In the browser [localhost:9000](http://localhost:9000/) , any url we pass like `http://localhost:9000/about` or `http://localhost:9000/info` . The server always show us **Hello, This is Home Page**

**_HTTP-Request-Object_**

- `console.log(req.url); //# --> /`

```js
const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.method); //# --> GET
  console.log(req.url); //# --> /

  // in url "http://localhost:9000/about/yusuf"
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

server.listen(9000);
```

- to see the information from browser
- _**inspect** ---> **network** --> **localhost**_

_**When browser find the url :-**_

![Relative](./Image/ok-file.jpeg)

_**When browser do not find the url :-**_

![Relative](./Image/error-file.jfif)

**[Simple HTTP module navbar project]**(https://github.com/yusuf-shahin/Basics-of-node-js/tree/main/simple%20http%20modules%20project)

## Expree JS

- [CLick here to learn express more](https://www.freecodecamp.org/news/express-explained-with-examples-installation-routing-middleware-and-more/)

- `npm init -y`
- `npm install express`

_**Import this in our project**_

```js
const express = require("express");
const app = express();
```

**in _app_ , we have a obj with banch of useful method**

- app.get
- app.post
- app.put
- app.delete
- app.all ()
- app.use
- app.listen

- [**Learn more to click this article**](https://www.freecodecamp.org/news/http-request-methods-explained/)

**In a image**
![Alt](https://www.course-api.com/images/slides/slide-6.png)

**Building a Server with Express and show it to browser :-**

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(9000, () => console.log("Example app listening on port 9000!"));
```

- `app.get` that is the HTTP method, that all browser perform by default .
- `get("path",callBack func);`
- inside callback function `(req,res) => res.send()`
- inside **send()** method we easily pass a _string_ or _HTML_ .
- same , If want to create a page **about** we just write
- `app.get("/about", (req, res) => res.send(<h1>about page</h1>));`

**If _url_ gonna wrong or anything , we can easily set our _app.all()_ method**

```js
app.all("*", (req, res) => {
  res.send("<h1>resource not found</h1>");
});
```

- we also send **status()** method before **send()**
- `res.status(404).send("<h1>resource not found</h1>");`
- inside **_status()_** we pass **HTTP status code**

**_Simple version of HTTP modules in Express_**

**Instead of this code :-**

```js
const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req.method); //# --> GET
  console.log(req.url); //# --> /

  // in url "http://localhost:9000/about/yusuf"
  // console.log(req.url); //# --> /about/yusuf

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

server.listen(9000);
```

**We can do this by using _Express_ :-**

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>About Page</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About Page</h1>");
});

// just like else
app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(9000, () => {
  console.log("server is listening on port 9000...");
});

app.listen(9000);
```

- we dont need to create a server like **HTTP** module.

- [**Express Project**](https://github.com/yusuf-shahin/Basics-of-express.js/tree/main/simple%20express-js%20project)

### JSON

**res.json([body])**

- Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.[stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

- The parameter can be any JSON type, including object, array, string, Boolean, number, or null, and you can also use it to convert other values to JSON.

```js
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  //# sent json file
  res.status(200).json([
    { name: "yusuf", age: 30 },
    { name: "nazmul", age: 25 },
  ]);
});

app.listen(9000, () => {
  console.log("Server is listening on port 9000....");
});
```

**_Also we gonna do this_**

**create json file name _data.js_**

```js
const products = [
  {
    id: 1,
    name: "albany sofa",
    image:
      "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
    price: 39.95,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
  {
    id: 2,
    name: "entertainment center",
    image:
      "https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg",
    price: 29.98,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
  {
    id: 3,
    name: "albany sectional",
    image:
      "https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg",
    price: 10.99,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
  {
    id: 4,
    name: "leather sofa",
    image:
      "https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg",
    price: 9.99,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
];
module.exports = { products };
```

**import that _data.js_ module and show them to browser**

```js
const express = require("express");
const app = express();
//# product in data.js
const { products } = require("./data");
app.get("/", (req, res) => {
  res.status(200).json(products);
});

app.listen(9000, () => {
  console.log("Server is listening on port 9000....");
});
```

**in browser we see this**
![Relative](./Image/show-json.jpeg)

- if inspect our _network_ tab --> _header_ --> _response header_ we can see that **Content-Type** is **json**

**We also modify the json file and show it to browser**

```js
const express = require("express");
const app = express();
//# product in data.js
const { products } = require("./data");
app.get("/", (req, res) => {
  //# sent html file :-
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
  //# create a anchor tag to show our json file
});

app.get("/api/products", (req, res) => {
  //# create a new modidy array of obj and name it show product...
  const newProducts = products.map((product) => {
    const { id, name, price } = product;
    //# return id, name, price as object...
    return { name, id, price };
  });
  res.status(200).send(newProducts);
});

app.listen(9000, () => {
  console.log("Server is listening on port 9000....");
});
```

**Providethe info about the one specific product**

_simple system to render the **single product**_

```js
app.get("/api/products/1", (req, res) => {
  const singleProduct = products.find((product) => {
    return product.id === 1;
  });
  res.status(200).send(singleProduct);
});
```

**_"/api/products/1"_ use this url , we can render this product in browser.**

![Relative](./Image/single-product.jpeg)

- everythings is okk!

#### _params property_

instead of hard coding this `"/api/products/1"` --> _"products/1"_ , _"products/2"_ , _"products/3"_ we setup **a route parameter**

**What are params in express js ?**

- params object **allows you to capture dynamic values from the URL path.** It is useful when you have route patterns with placeholders, such as “/users/:id” or “/products/:productId”.

- `app.get("/api/products/:productID", (req, res) => {})`
- like ":productID" we can set any name in here. Name dose not matter . in url after **"/api/products/"** what will we write . The value of :productID is automatically set.

**for example**

```js
app.get("/api/products/:productID", (req, res) => {
  // in url we write "/api/products/yusuf"

  // console.log(req.params) //# --> {productID : "yusuf"}
  // console.log(req.params.productID) //# --> "yusuf"

  //// same as
  // in url we write "/api/products/1"
  // console.log(req.params.productID) //# --> "1"
  //# value of :productID it always be a string .

  //* same thing in obj destructering
  const { productID } = req.params;
});
```

**set the productId we can get the product and render it to browser**

```js
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  //* if id dose not find
  if (!singleProduct) {
    return res.status(404).send("<h1>Product Does Not Exist</h1>");
  }

  return res.json(singleProduct);
});
```
