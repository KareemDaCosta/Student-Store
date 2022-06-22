import * as React from "react"
import { Routes, Route, Link } from "react-router-dom"

import "./ProductGrid.css"


export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemFromCart }) {
    return(
        <div className="Products">
            {products.map( (item) => (
            <ProductCard showDescription={false} key={item.id}product={item} />
            ))}
        </div>
    )
}

export function ProductCard( { showDescription, product } ) {
    return (
    <Link to={`/product/${product.id}`}>
        <div className={`ProductCard ${showDescription ? "showDescription":""}`}>
            {product.name}
        </div>
    </Link>
    )
  }

