import * as React from "react"

import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import "./Home.css"

export default function Home({ shoppingCart, products, handleAddItemToCart, handleRemoveItemToCart}) {

  return (
    <div className="home">
      <Hero />
      <ProductGrid shoppingCart={shoppingCart} products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} />
    </div>
  )
}
