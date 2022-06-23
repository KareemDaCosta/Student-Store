import * as React from "react"
import { Link } from "react-router-dom"

import "./ProductCard.css"


export default function ProductCard({ setPostStatus, product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription }) {
    var priceText = product.price.toString();
    if(priceText.charAt[0]=='.') {
        priceText = 0+priceText;
    }
    var i = 1;
    var foundZero = false;
    for(; i < priceText.length; i++) {
        if(priceText[i]=='.') {
            foundZero = true;
            break;
        }
    }
    if(foundZero) {
        var numZerosNeeded = 2-(priceText.length-1-i);
        for(let j = 0; j < numZerosNeeded; j++) {
            priceText+='0';
        }
    }
    else {
        priceText+=".00";
    }

    return (
        <div className="product-card">
            <div className="product-name">{product.name}</div>
            <div className="product=price">{`$${priceText}`}</div>
            {showDescription? <div className="product-description">{product.description}</div>: ""}
            <div className="media">
                <Link to={`/product/${product.id}`}><img src={`${product.image}`} alt={`"${product.name}"`} /></Link>
            </div>
            <button className="add" onClick={() => {handleAddItemToCart(productId); setPostStatus(0);}}>
                <div className="label">Add To Cart</div>
            </button>
            <button className="add" onClick={() => {handleRemoveItemToCart(productId)}}>
                <div className="label">Remove From Cart</div>
            </button>
            <div className="product-quantity">{quantity ? quantity : ""}</div>
        </div>
    )   
}

/**/