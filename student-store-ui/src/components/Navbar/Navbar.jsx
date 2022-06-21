import * as React from "react"
import "./Navbar.css"
import { Routes, Route, Link } from "react-router-dom"

function product() {
  const params = useParams()
  return<h1>ProductPage-{params.ProductId}</h1>
}

export default function Navbar() {
  return (
    <nav className="navbar">
      <p>Navbar</p>
      <div>
        {/*<Link to="/">Home</Link>*/}
        {/*<Link to="/product/5555555">Product</Link>*/}
      </div>
    </nav>
  )
}
