const { productModel } = require("../../../../models/product-schema.js");

const createProductController = async (req, res) => {
  try {
    const obj = req.body;
    const newProduct = await productModel.create(obj);
    
    res.status(201).json({
      status: "success",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    console.log(err);
    console.log(err.code);

    if (err.name === "MongoServerError" && err.code === 11000) {
      res.status(400).json({
        status: "fail",
        error: err.message,
      });
    } else {
      res.status(500).json({
        status: "fail",
        message: "Internal Server Error",
      });
    }
  }
};

module.exports = {
  createProductController,
};
