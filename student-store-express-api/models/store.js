const { BadRequestError } = require("../utils/errors")
const { storage } = require("../data/storage")

class Store {
    static async listProducts() {
      // list all items in the transactions array
      const products = storage.get("products").value();
      return products
    }
  
    static async fetchProductById(productId) {
      const product = storage
        .get("products")
        .find({ id: Number(productId) })
        .value()
      return product;
    }
  
    static async recordProduct(product) {
      // create a new transaction
  
      if (!product) {
        throw new BadRequestError(`No transaction sent.`)
      }
      const requiredFields = ["name", "category", "image", "source", "description", "price"]
      requiredFields.forEach((field) => {
        if (!product[field] && product[field] !== 0) {
          throw new BadRequestError(`Field: "${field}" is required in transaction`)
        }
      })
  
      const products = await Store.listProducts()
      const productId = products.length + 1
      const postedAt = new Date().toISOString()
  
      const newProduct = { id: productId, postedAt, ...product }
  
      storage.get("products").push(newProduct).write()
  
      return newProduct
    }
  }
  
  module.exports = Store