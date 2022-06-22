import * as React from "react"
import { Link } from "react-router-dom"

import "./ProductCard.css"


export default function ProductCard({ product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription }) {
    var priceText = product.price.toString();
    if(priceText.charAt[0]=='.') {
        priceText = 0+priceText;
    }
    var i = 1;
    for(; i < priceText.length; i++) {
        if(priceText[i]=='.') {
            break;
        }
    }
    var numZerosNeeded = 2-(priceText.length-1-i);
    for(let j = 0; j < numZerosNeeded; j++) {
        priceText+='0';
    }

    return (
        <div className="product-card">
            <div className="product-name">{product.name}</div>
            <div className="product=price">{`${priceText}`}</div>
            {showDescription?`<div className="product-description">${product.description}</div>`: ""}
            <div className="Media">
                <Link to={`/product/${product.id}`}><img src={`${product.image}`} alt={`"${product.name}"`} /></Link>
            </div>
            <button className="add" onClick={() => {handleAddItemToCart(productId)}}>
                <p className="label">Add To Cart</p>
            </button>
            <button className="add" onClick={() => {handleRemoveItemToCart(productId)}}>
                <p className="label">Remove From Cart</p>
            </button>
            <div className="product-quantity">{quantity ? quantity : ""}</div>
        </div>
    )   
}

/**/