const express = require("express")
const router = express.Router()
const ModifyProducts = require("../models/modify-products")

router.post("/", async (req, res, next) => {
    try {
      const product = req.body
      const newProduct = await ModifyProducts.recordProduct(product)
      res.status(201).json({ product: newProduct })
    } catch (err) {
      next(err)
    }
  })

  module.exports = router;