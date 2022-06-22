import * as React from "react"

import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView({setPostStatus, product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart}) {
    return (
        <div className="product-view">
            <h1 className="product-id">{`Product # ${productId}`}</h1>
            <ProductCard setPostStatus={setPostStatus} product={product} productId={productId} quantity={quantity} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} showDescription={true}/>
        </div>
    )
}