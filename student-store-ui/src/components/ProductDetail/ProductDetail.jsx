import * as React from "react"
import { useParams } from "react-router-dom"
import "./ProductDetail.css"
import NotFound from "../NotFound/NotFound"
import ProductView from "../ProductView/ProductView"

import axios from 'axios';
const baseUrl = "http://localhost:3001/store";


export default function ProductDetail({ setPostStatus, shoppingCart, handleAddItemToCart, handleRemoveItemToCart}) {

    const params = useParams();
    const [product, setProduct] = React.useState(0); 
    React.useEffect(async () => {
        try {
          const response = await axios.get(`${baseUrl}/${[params.productId]}`);
          const result = response.data.product;
          setProduct(result);
        }
        catch (e) {
          console.log(e);
          setProduct(null);
        }
      }, [params.productId]);

    if(product==0) {
        return (<h1 className="loading">Loading...</h1>);
    }
    else if(product==null) {
        return (
            <NotFound />
        )
    }
    var quantity = 0;
    for(let i = 0; i < shoppingCart.length; i++) {
        if(shoppingCart[i].itemId==params.productId) {
            quantity = shoppingCart[i].quantity;
            break;
        }
    }
    return (
        <ProductView setPostStatus={setPostStatus} product={product} productId={params.productId} quantity={quantity} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} />
    )
}