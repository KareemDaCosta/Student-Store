const express = require("express")
const router = express.Router()
const Store = require("../models/store")

router.get("/", async (req, res, next) => {
    try {
        const products = await Store.listProducts()
        res.status(200).json({ products })
    }
    catch(err) {
        next(err)
    }
})

router.get("/:productId", async (req, res, next) => {
    try {
      const productId = req.params.productId
      const product = await Store.fetchProductById(productId)
      if (!product) {
        throw new NotFoundError("Product not found")
      }
      res.status(200).json({ product })
    } catch (err) {
      next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
      const order = req.body
      console.log('order: ', order);
      const newOrder = await Store.recordOrder(order)
      res.status(201).json({ purchase: newOrder })
    } catch (err) {
      next(err)
    }
  })

module.exports=router;