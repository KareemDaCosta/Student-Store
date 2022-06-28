import * as React from "react"
import "./Receipt.css"

export default function Receipt({receipt, products, count}) {
    return (
        <div className="receipt">
            <h2 className="receipt-header">Receipt {count=="" ? "" : ` ${count}`}</h2>
            <div className="orderer-information">
                <div className="orderer-name"><span style={{fontWeight: 'bold'}}>Name: </span>{receipt.name}</div>
                <div className="orderer-email"><span style={{fontWeight: 'bold'}}>Email: </span>{receipt.email}</div>
            </div>
            {receipt.order.map( item => (
                <div className="cart-product-item" key={`${products[item.itemId - 1].name}`}>
                    <div className="cart-product-name">
                        {products[item.itemId - 1].name}
                    </div>
                    <div className="cart-product-quantity">
                            Quantity: {item.quantity}
                    </div>
                </div>
            ))}
            <div className="subtotal"><span className="subtotal"><span style={{fontWeight: 'bold'}}>Sub-Total: </span> </span>${receipt.total}</div>
        </div>
    )
}