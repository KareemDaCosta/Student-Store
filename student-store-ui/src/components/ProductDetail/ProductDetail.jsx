import * as React from "react"
import { useParams } from "react-router-dom"
import "./ProductDetail.css"

export default function ProductDetail({ products, onClick}) {

  const params = useParams();
  const product = products[params.productId-1];
  console.log('product: ', product);
  return (
    <div className="product-detail">
      <p>{`Product Details ${product.name}`}</p>
      <button className={"add-button"} onClick={() => onClick(params.productId)}>
      <p className="label">Add To Cart</p>
    </button>
    </div>
  )
}