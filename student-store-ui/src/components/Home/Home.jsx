import * as React from "react"

import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import "./Home.css"
import CategoryContainer from "../CategoryContainer/CategoryContainer"
import About from "../About/About"
import Contact from "../Contact/Contact"

export default function Home({ categories, handleOnCategoryPress, activeCategory, setPostStatus, shoppingCart, products, handleAddItemToCart, handleRemoveItemToCart}) {

  return (
    <div className="home">
      <Hero />
      <CategoryContainer activeCategory={activeCategory} categories={categories} handleOnCategoryPress={handleOnCategoryPress} />
      <ProductGrid activeCategory={activeCategory} setPostStatus={setPostStatus} shoppingCart={shoppingCart} products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} />
      <About />
      <Contact />
    </div>
  )
}