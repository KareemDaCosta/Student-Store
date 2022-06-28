const express = require("express")
const router = express.Router()
const Orders = require("../models/orders")
const { NotFoundError } = require("../utils/errors")


router.get("/", async (req, res, next) => {
    try {
        const orders = await Orders.listOrders()
        res.status(200).json({ orders })
    }
    catch(err) {
        next(err)
    }
})

router.get("/page/:page", async (req, res, next) => {
    try {
        const pageNumber = req.params.page
        const orders = await Orders.listOrdersByPage(pageNumber-1)
        res.status(200).json({ orders })
    }
    catch(err) {
        next(err)
    }
})

router.get("/:orderId", async (req, res, next) => {
    try {
      const orderId = req.params.orderId
      const order = await Orders.fetchProductById(orderId)
      if (!order) {
        throw new NotFoundError("Order not found")
      }
      res.status(200).json({ order })
    } catch (err) {
      next(err)
    }
})

module.exports=router;