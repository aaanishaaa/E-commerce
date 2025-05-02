require('dotenv').config();
require("./src/config/db.js");
const express = require("express");
const morgan = require("morgan");
const cors=require("cors");
const {
  productRouter,
} = require("./src/api/v1/products/routes/product-routes.js");
const { authRouter } = require('./src/api/v1/auth/routes/authRoutes.js');
const PORT = 2201;
const app = express();
app.use(cors());
// console.log(process.env);
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/products", productRouter);
app.use("/api/v1/auth",authRouter);
app.listen(PORT, () => {
  console.log(`App is running on ` + PORT);
});
