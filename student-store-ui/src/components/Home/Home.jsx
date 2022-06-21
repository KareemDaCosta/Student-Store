import * as React from "react"

import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import "./Home.css"

export default function Home({ products, handleAddItemToCart, handleRemoveItemToCart}) {

  return (
    <div className="home">
      <Hero />
      <ProductGrid products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} />
    </div>
  )
}
