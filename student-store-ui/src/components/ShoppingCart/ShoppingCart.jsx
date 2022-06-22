import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart({shoppingPrice, isOpen, products, shoppingCart}) {
    console.log('shoppingCart: ', shoppingCart);
    var price = shoppingPrice%.01
    if(shoppingCart.length==0) {
        return (
            <div className="shopping-cart">
                <h1 className="notification">No items added to cart yet. Start shopping now!</h1>
            </div>
        )
    }
    return(
        <div className="shopping-cart">
            {shoppingCart.map( item => (
                <><div className="cart-product-name">
                    ${products[item.itemId - 1]}
                </div>
                <div className="cart-product-quantity">
                    Quantity: ${item.quantity}
                </div></>
            ))}
            <div className="total-price">${price}</div>
        </div>
    )
}
