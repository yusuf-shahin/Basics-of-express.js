# Difference between params and query strings params

### params

- we created the whole path in **app.get()** method

for example :-

```js
const express = require("express");
const app = express();

app.get("/products/:productId", (req, res) => {
  // console.log(req.params.productId);
  const { productId } = req.params;
  console.log(productId);
  res.status(200).send("hello I am params");
});

app.listen(9000, () => {
  console.log("server on listening on 9000");
});
```

- in url --> `localhost9000/products/3`
- in console we get the value `3` as string .
- _params_ return a obj . In that obj, key name is created inside `get()` method after set the _url path_ , in here _params_ is **productId**.
- always always use `:` _colon mark_ before initiate _params_ propety inside **get()** method.

### query string parameters

- (url parameters)

**In _query string parameters_ everything is gonna selected from browser url.**
For example :-

```js
const express = require("express");
const app = express();

app.get("/products/", (req, res) => {
  // console.log(req.query.productId);
  const { productId } = req.query;
  console.log(productId);
  res.status(200).send("hello I am query string parameters");
});

app.listen(9000, () => {
  console.log("server on listening on 9000");
});
```

- url --> `http://localhost:9000/products/?productId=3`
- in console we get the value `3` as string .
- _query string paramiters_ return a obj . In that obj, key name is dynamically created in **url** after `?` mark .
- in url we write `productId=3` , here **productId** is the key and its value is **3**
