import * as React from "react"
import { useParams } from "react-router-dom"
import "./ProductDetail.css"

export default function ProductDetail() {

  const params = useParams();
  console.log('params: ', params);
  return (
    <div className="product-detail">
      <p>{`Product Details ${params.productId}`}</p>
    </div>
  )
}