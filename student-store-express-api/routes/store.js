const express = require("express")
const router = express.Router()
const Store = require("../models/store")


router.get("/", async (req, res) => {
    try {
        const products = await Store.listProducts()
        res.status(200).json({ products })
    }
    catch(err) {
        next(err)
    }
})

module.exports=router;