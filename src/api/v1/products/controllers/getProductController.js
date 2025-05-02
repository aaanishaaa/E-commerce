const { productModel } = require("../../../../models/product-schema.js");
const getProductController = async (req, res) => {
  try {
    console.log("request received");

    const products = await productModel.find();

    await new Promise((resolve) => {
      setTimeout(() => {
        console.log("Timeout done");
        resolve();
      }, 3000); // 3 seconds
    });
    
    
    res.status(200).json({
      status: "success",
      message: "Fetched products successfully",
      data: {
        products: products,
      },
    });
  } catch (error) {
    console.error("Error in getProductController:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch products",
    });
  }
};

module.exports = { getProductController };
