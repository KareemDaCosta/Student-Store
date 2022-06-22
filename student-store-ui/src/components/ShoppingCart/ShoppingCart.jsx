import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart({shoppingPrice, isOpen, products, shoppingCart}) {
    var price = Math.round((shoppingPrice + Number.EPSILON) * 100) / 100
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
                <div key={`${products[item.itemId - 1].name}`}>
                    <div className="cart-product-name">
                    {products[item.itemId - 1].name}
                </div><div className="cart-product-quantity">
                        Quantity: {item.quantity}
                    </div>
                </div>
            ))}
            <div className="subtotal"><span className="subtotal">Sub-total: </span>${price}</div>
            <div className="total-price"><span className="Total">Total: </span>${Math.round((price*1.0875 + Number.EPSILON) * 100) / 100}</div>
        </div>
    )
}
