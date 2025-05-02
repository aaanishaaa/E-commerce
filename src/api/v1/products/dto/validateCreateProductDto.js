const validateCreateProductDto = (req, res, next) => {
  try {
    console.log("Validating create product request!");
    const { title, price, stock } = req.body;

    // Validate title
    if (
      typeof title !== "string" ||
      title.trim().length < 2
    ) {
      throw new Error("Invalid Title");
    }

    // Validate price
    if (
      price === undefined ||
      price === null ||
      isNaN(Number(price)) ||
      Number(price) < 0
    ) {
      throw new Error("Invalid Price");
    }

    // Validate stock (optional)
    if (
      stock !== undefined &&
      stock !== null &&
      (isNaN(Number(stock)) || Number(stock) < 0)
    ) {
      throw new Error("Invalid Stock");
    }

    next();
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = { validateCreateProductDto };
