const express = require("express");
const errorHandler = require("../../middleware/error");
const authHandler = require("../../middleware/auth");
const Product = require("../../models/product");
const createProductSchema = require("./validationSchema");

const router = express.Router();

router.get(
  "/",
  authHandler,
  errorHandler(async (req, res) => {
    const products = await Product.find();
    res.status(200).send(products);
  })
);

router.get(
  "/:productId",
  authHandler,
  errorHandler(async (req, res) => {
    const product = await Product.findOne({ _id: req.params.productId });

    res.status(200).send(product);
  })
);


router.post("/", authHandler, async (req, res) => {
  const payload = req.body;
  const { error } = createProductSchema(payload);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }
  let product = new Product(payload);

  product = await product.save();
  res.status(200).send({ product });
});

router.patch("/:productId", authHandler, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.productId, req.body);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:productId", authHandler, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.productId);

    if (!product) res.status(404).send("No user found!");
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
