const { BadRequestError } = require("../utils/errors")
const { storage } = require("../data/storage")
const Store = require("./store.js")

const adminPassword = "password"

class ModifyDatabase {
  
    static async recordProduct(product) {
      // create a new transaction
  
      if (!product) {
        throw new BadRequestError(`No transaction sent.`)
      }
      const requiredFields = ["password", "name", "category", "image", "source", "description", "price"]
      requiredFields.forEach((field) => {
        if (!product[field] && product[field] !== 0) {
          throw new BadRequestError(`Field: "${field}" is required in transaction`)
        }
      })
      if(product.password!=adminPassword) {
        throw new BadRequestError('Incorrect admin password')
      }

      delete(product.password);
  
      const products = await Store.listProducts()
      const productId = products.length + 1
      const postedAt = new Date().toISOString()
  
      const newProduct = { id: productId, postedAt, ...product }
  
      storage.get("products").push(newProduct).write()
  
      return newProduct
    }
  }
  
  module.exports = ModifyDatabase