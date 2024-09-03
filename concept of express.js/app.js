const express = require("express");
const app = express();
const { products } = require("./data.js");

app.get("/api/v1/id", (req, res) => {
  // console.log(req.query);

  const { name } = req.query;
  console.log(name);

  //# create a new array by spread operator .
  let sortedProducts = [...products];

  // if (search) {
  //   sortedProducts = sortedProducts.filter((product) => {
  //     return product.name.startsWith(search);
  //   });
  // }

  // if (limit) {
  //   sortedProducts = sortedProducts.slice(0, Number(limit));
  // }
  // if (sortedProducts.length < 1) {
  //   // res.status(200).send('no products matched your search');
  //   return res.status(200).json({ sucess: true, data: [] });
  // }

  res.status(200).json(sortedProducts);
});

app.listen(9000, () => {
  console.log("Server is listening on port 9000....");
});
