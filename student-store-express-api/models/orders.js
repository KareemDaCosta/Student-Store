const { storage } = require("../data/storage")

const pageJump = 20;

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

    static async listOrdersByPage(page) {
        const order = storage.get("purchases").value().filter((item, i) => (
            i >= page*pageJump && i < (page+1)*pageJump
        ));
        return order;
    }
    
}

module.exports = Orders