import * as React from "react"
import "./ProductView.css"

export default function ProductView({product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart}) {
    return (
        <div className="product-view">
            <p>{`Product Details ${product.name}`}</p>
            <button className={"add-button"} onClick={() => {handleAddItemToCart(productId)}}>
                <p className="label">Add To Cart</p>
            </button>
        </div>
    )
}