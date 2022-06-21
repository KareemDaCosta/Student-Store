import * as React from "react"
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom"
import "./Home.css"

export default function Home({ products }) {

  return (
    <div className="home">
      <p>Home</p>
      <div className="Products">
        {products.map( (item) => (
          <ProductCard key={item.id}product={item} />
        ))}
      </div>
    </div>
  )
}

export function ProductCard( { product } ) {
  return (
  <div className="ProductCard">
    <Link to={`/product/${product.id}`}>{product.name}</Link>
    
  </div>
  )
}
