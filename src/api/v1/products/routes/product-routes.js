const express = require('express');
const { getProductController } = require('../controllers/getProductController.js');
const { createProductController } = require('../controllers/postProductControllers.js');

const productRouter = express.Router();

productRouter.get("/", getProductController);   
productRouter.post("/", createProductController); 

module.exports = {
    productRouter,
};
