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
  }
  
  module.exports = Store