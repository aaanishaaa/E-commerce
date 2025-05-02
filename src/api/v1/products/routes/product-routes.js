const express = require('express');
const { getProductController } = require('../controllers/getProductController.js');
const { createProductController } = require('../controllers/postProductControllers.js');
const {validateCreateProductDto} = require('../dto/validateCreateProductDto.js');
const productRouter = express.Router();

productRouter.get("/", getProductController);   
productRouter.post("/",validateCreateProductDto, createProductController); 

module.exports = {
    productRouter,
};
