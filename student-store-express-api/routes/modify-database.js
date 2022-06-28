const express = require("express")
const router = express.Router()
const ModifyDatabase = require("../models/modify-database")

router.post("/", async (req, res, next) => {
    try {
      const product = req.body
      const newProduct = await ModifyDatabase.recordProduct(product)
      res.status(201).json({ product: newProduct })
    } catch (err) {
      next(err)
    }
  })

  module.exports = router;