const { storage } = require("../data/storage")

class Orders {
    static async listOrders() {
      const orders = storage.get("purchases").value();
      return orders;
    }
  
    static async fetchProductById(orderId) {
      const order = storage
        .get("purchases")
        .find({ id: Number(orderId) })
        .value()
      return order;
    }
}

module.exports = Orders