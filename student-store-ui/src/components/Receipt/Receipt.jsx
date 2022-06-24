import * as React from "react"
import "./Receipt.css"

export default function Receipt({receipt, products, count}) {
    return (
        <div className="receipt">
            <h2 className="receipt-header">Receipt {count=="" ? "" : ` ${count}`}</h2>
            <div className="orderer-information">
                <div className="orderer-name">{receipt.checkoutForm.name}</div>
                <div className="orderer-email">{receipt.checkoutForm.email}</div>
            </div>
            {receipt.shoppingCart.map( item => (
                <div className="cart-product-item" key={`${products[item.itemId - 1].name}`}>
                    <div className="cart-product-name">
                        {products[item.itemId - 1].name}
                    </div>
                    <div className="cart-product-quantity">
                            Quantity: {item.quantity}
                    </div>
                </div>
            ))}
            <div className="subtotal"><span className="subtotal">Sub-total: </span>${receipt.price}</div>
            <div className="total-price"><span className="Total">Total: </span>${Math.round((receipt.price*1.0875 + Number.EPSILON) * 100) / 100}</div>
        </div>
    )
}