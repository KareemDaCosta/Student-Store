const { BadRequestError } = require("../utils/errors")
const { storage } = require("../data/storage")

class Store {
    static async listProducts() {
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

    static async listOrders() {
        const orders = storage.get("purchases").value();
        return orders
    }

    static async recordOrder(order) {
    
        if (!order) {
            throw new BadRequestError(`No transaction sent.`)
        }
        const requiredFields = ["shoppingCart", "user"]
        requiredFields.forEach((field) => {
            if (!order.hasOwnProperty(field)) {
                throw new BadRequestError(`Field: "${field}" is required in transaction`)
            }
        })

        const user = order.user;
        const requiredUserFields = ["name", "email"];
        requiredUserFields.forEach((field) => {
            if (!user.hasOwnProperty(field)) {
                throw new BadRequestError(`User Field: "${field}" is required in transaction`)
            }
        })
        

        const cart = order.shoppingCart;

        var subTotalPrice = 0;

        if(!Array.isArray(cart)) {
            throw new BadRequestError(`ShoppingCart is not an array!`)
        }

        if(cart.length==0) {
            throw new BadRequestError("ShoppingCart is empty!")
        }

        const orderedProducts = new Set();
        let prevLength = 0;

        var receipt = "Receipt:\n"

        for(let i = 0; i < cart.length; i++) {
            if(Object.keys(cart[i]).length != 2) {
                throw new BadRequestError(`Length of Shopping Cart at index: ${i} is not equal to 2!`)
            }
            const requiredCartItemFields = ["itemId", "quantity"]
            requiredCartItemFields.forEach((field) => {
                if (!cart[i].hasOwnProperty(field)) {
                    throw new BadRequestError(`Shopping Cart at index: ${i}, Field: "${field}" is required in transaction`)
                }
                if(isNaN(cart[i][field])) {
                    throw new BadRequestError(`Shopping Cart at index: ${i}, Field: "${field} is not numeric`)
                }
            })

            orderedProducts.add(cart[i]["itemId"]);
            if(orderedProducts.size != prevLength+1) {
                throw new BadRequestError(`Duplicate product ${cart[i]["itemId"]}`)
            }
            prevLength = orderedProducts.size;
            const currentProduct = await Store.fetchProductById(cart[i]["itemId"]);
            if(currentProduct === undefined) {
                throw new BadRequestError(`${cart[i]["itemId"]} is an undefined product`)
            }
            subTotalPrice += currentProduct.price * cart[i]["quantity"]
            receipt += `${currentProduct.name}: ${cart[i]["quantity"]}\n`;
        }

        const orders = await Store.listOrders()
        const orderId = orders.length + 1;
        const createdAt = new Date().toISOString()

        subTotalPrice = subTotalPrice.toFixed(2)

        const totalPrice = (subTotalPrice * 1.0875).toFixed(2);

        receipt+=`Sub-Total: ${subTotalPrice}\n`
        receipt+=`Total: ${totalPrice}`

        const newOrder = { id: orderId,  name: order.user.name, email: order.user.email, order: order.shoppingCart, total: totalPrice, createdAt: createdAt, receipt: receipt};

        storage.get("purchases").push(newOrder).write()

        return newOrder;
        }
  }
  
  module.exports = Store