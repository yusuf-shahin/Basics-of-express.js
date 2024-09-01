const express = require("express");
const app = express();
//# product in data.js
const { products } = require("./data");
app.get("/", (req, res) => {
  //# sent html file :-
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, price } = product;
    //# return id, name, price as object...
    return { name, id, price };
  });
  res.status(200).send(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  //? like ":productID" we can set any name in here. Name dose not matter . after "/api/products/" what  will we write . The value of :productID is automatically set.

  //! for example :-
  // in url we write "/api/products/yusuf"
  console.log(req.params.productID);

  // console.log(req.params) //# --> {productID : "yusuf"}
  // console.log(req.params.productID) //# --> "yusuf"

  //// same as
  // in url we write "/api/products/1"
  // console.log(req.params.productID) //# --> "1"
  //# value of :productID it always a string

  //* obj destructering
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  //* if id dose not find
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }

  return res.json(singleProduct);
});

app.listen(9000, () => {
  console.log("Server is listening on port 9000....");
});
