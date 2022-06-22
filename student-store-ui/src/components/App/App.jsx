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

const url = "https://codepath-store-api.herokuapp.com/store";


export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setFetching] = React.useState(true);
  const [error, setError] = React.useState("");
  const [isOpen, setOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  console.log('shoppingCart: ', shoppingCart);
  const [checkoutForm, setCheckoutForm] = React.useState("");
  const [shoppingPrice, setShoppingPrice] = React.useState(0);

  React.useEffect(async () => {
    try {
      const response = await axios.get(url);
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
    setFetching(false);
  }, []);

  const handleOnToggle = () => {
    setOpen(false);
  }

  const handleAddItemToCart = (productId) => {
    let found = false;
    for(let i = 0; i < shoppingCart.length; i++) {
      if(shoppingCart[i].itemId == productId) {
        const newArr = [...shoppingCart];
        newArr[i].quantity++;
        setShoppingCart(newArr);
        setShoppingPrice(shoppingPrice + products[productId-1].price);
        found = true;
        break;
      }
    }
    if(!found) {
      setShoppingCart((currentValue) =>
      {
        return [...currentValue, {itemId: productId, quantity: 1}]
      });
      setShoppingPrice(shoppingPrice + products[productId-1].price);
    }
  }

  const handleRemoveItemFromCart = (productId) => {
    for(let i = 0; i < shoppingCart.length; i++) {
      if(shoppingCart[i].itemId == productId) {
        if(shoppingCart[i].quantity>1) {
          const newArr = [...shoppingCart];
        newArr[i].quantity--;
        setShoppingCart(newArr);
          setShoppingPrice(shoppingPrice - products[productId-1].price);
        }
        else {
          let newCart = [...shoppingCart];
          newCart.splice(i, 1);
          setShoppingCart(newCart);
          setShoppingPrice(shoppingPrice - products[productId-1].price);
        }
      }
    }
  }

  const handleOnCheckoutFormChange = (name, value) => {
    //TODO Implement
  }

  const handleOnSubmitCheckoutForm = () => {
    axios.post(url, {user: {name: checkoutForm.name, email: checkoutForm.value}, shoppingCart: shoppingCart});
  }

  if(isFetching) {
    return null;
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home products={products}/>}></Route>
            <Route path="/product/:productId" element={<ProductDetail shoppingCart={shoppingCart} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemFromCart} />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
        <Navbar />
        <Sidebar open={isOpen}/>
      </BrowserRouter>
    </div>
  )
}
