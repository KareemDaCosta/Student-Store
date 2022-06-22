import * as React from "react"

import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"


export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart }) {
    return(
        <div className="Products">
            {products.map( (item) => (
            <ProductCard showDescription={false} key={item.id}product={item} />
            ))}
        </div>
    )
}

