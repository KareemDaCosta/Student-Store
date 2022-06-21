import * as React from "react"
import axios from 'axios';

import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"


export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setFetching] = React.useState(true);
  const [error, setError] = React.useState("");
  const [isOpen, setOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState("");
  const [shoppingPrice, setShoppingPrice] = React.useState(0);

  React.useEffect(async () => {
    try {
      const response = await axios.get("https://codepath-store-api.herokuapp.com/store");
      const result = response.data.products;
      setProducts(result);
      if(products.length == 0) {
        setError("Products is empty");
      }
    }
    catch (e) {
      console.log(e);
      setError(e);
    }
  }, []);

  const handleOnToggle = () => {
    setOpen(false);
  }

  const handleAddItemToCart = (productId) => {
    for(let i = 0; i < shoppingCart.length; i++) {
      if(shoppingCart[i].itemId == productId) {
        let newCart = [...shoppingCart];
        newCart[i].quantity+=1;
        setShoppingCart(newCart);
        if(products[productId-1].id == productId) {
          setShoppingPrice(shoppingPrice + products[productId-1].price);
        }
        else {
          console.log("productId assumption failed");
        }
        return;
      }
    }
    var newItem = [];
    newItem[itemId] = productId;
    newItem[quantity] = 1;
    setShoppingCart([...shoppingCart, newItem]);
    if(products[productId-1].id == productId) {
      setShoppingPrice(shoppingPrice + products[productId-1].price);
    }
    else {
      console.log("productId assumption failed");
    }
  }

  const handleRemoveItemFromCart = (productId) => {
    for(let i = 0; i < shoppingCart.length; i++) {
      if(shoppingCart[i].itemId == productId) {
        if(shoppingCart[i].quantity>1) {
          let newCart = [...shoppingCart];
          newCart[i].quantity-=1;
          setShoppingCart(newCart);
          if(products[productId-1].id == productId) {
            setShoppingPrice(shoppingPrice - products[productId-1].price);
          }
          else {
            console.log("productId assumption failed");
          }
        }
        else {
          let newCart = [...shoppingCart];
          newCart.splice(i, 1);
          setShoppingCart(newCart);
          if(products[productId-1].id == productId) {
            setShoppingPrice(shoppingPrice - products[productId-1].price);
          }
          else {
            console.log("productId assumption failed");
          }
        }
      }
    }
  }

  return (
    <div className="app">
      <Navbar />
      <Sidebar open={isOpen}/>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home products={products}/>}></Route>
            <Route path="/product/:productId" element={<ProductDetail />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
