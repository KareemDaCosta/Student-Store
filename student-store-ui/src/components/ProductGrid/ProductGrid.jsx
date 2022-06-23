import * as React from "react"

import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"


export default function ProductGrid({ activeCategory, setPostStatus, shoppingCart, products, handleAddItemToCart, handleRemoveItemToCart }) {
    return(
        <div className="product-grid">
            {products.filter(item => (
                    activeCategory=="" ? true : item.category==activeCategory
                ))
                .map( (item) => (
                <ProductCard quantity={shoppingCart.filter( cartItem => (
                    cartItem.itemId==item.id
                )).length!=0 ? shoppingCart.filter( cartItem => (
                    cartItem.itemId==item.id
                ))[0].quantity : 0} handleRemoveItemToCart={handleRemoveItemToCart} setPostStatus={setPostStatus} handleAddItemToCart={handleAddItemToCart} product={item} productId={item.id} quantityshowDescription={false} key={item.id} showDescription={false} />
                ))}
        </div>
    )
}
