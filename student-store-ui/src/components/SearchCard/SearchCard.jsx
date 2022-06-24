import * as React from "react"
import { Link } from "react-router-dom"


import "./SearchCard.css"

export default function SearchCard({product, type, setSearchOpen}) {
    return (
        <Link to={`/product/${product.id}`} onClick={() => {setSearchOpen(false)}} >
            <div className="search-card">
                <div className="search-card-img-container"><img src={`${product.image}`} alt={`"${product.name}"`} /></div>
                <div className="search-card-text">{product.name}</div>
            </div>
        </Link>
    )
}