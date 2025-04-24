require('dotenv').config();
require("./src/config/db.js");
const express = require("express");
const morgan = require("morgan");
const {
  productRouter,
} = require("./src/api/v1/products/routes/product-routes.js");
const PORT = 2201;
const app = express();
// console.log(process.env);
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/products", productRouter);
app.listen(PORT, () => {
  console.log(`App is running on ` + PORT);
});
