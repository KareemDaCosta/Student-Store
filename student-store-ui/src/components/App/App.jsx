import * as React from "react"
import axios from 'axios';

import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import Footer from "../Footer/Footer"
import ReceiptGrid from "../ReceiptGrid/ReceiptGrid"

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"

const url = "http://localhost:3001/store";
const orderUrl = "http://localhost:3001/order"


export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setFetching] = React.useState(true);
  const [error, setError] = React.useState("");
  const [isOpen, setOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState({name: "", email: ""});
  const [shoppingPrice, setShoppingPrice] = React.useState(0);
  const [postStatus, setPostStatus] = React.useState(0);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("");
  const [categories, setCategories] = React.useState([]);
  const [receipts, setReceipts] = React.useState([]);
  const [receiptSearchValue, setReceiptSearchValue] = React.useState("");
  const [receiptsLoaded, setReceiptsLoaded] = React.useState(false);


  React.useEffect(async () => {
    try {
      const response = await axios.get(url);
      const result = response.data.products;
      if(result.length == 0) {
        setError("Products is empty");
      }
      setProducts(result);
      const categories = new Set();
      for(let i = 0; i < result.length; i++) {
        categories.add(result[i].category);
      }
      setCategories(Array.from(categories));
    }
    catch (e) {
      console.log(e);
      setError(e);
    }
    setFetching(false);
  }, []);

  const handleOnToggle = (state) => {
    setOpen(state);
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

  const handleFormSubmitted = () => {
    setCheckoutForm({name : "", email: ""});
    setShoppingPrice(0);
    setShoppingCart([]);
  }

  const handleOnCheckoutFormChange = (name, value) => {
    if(name=="email") {
      setCheckoutForm({name: checkoutForm.name, email: value});
    }
    else {
      setCheckoutForm({name: value, email: checkoutForm.email});
    }
  }

  const getAndSetReceipts = async () => {
    setReceiptsLoaded(false);
    try {
      const orders = await axios.get(orderUrl);
      setReceipts(orders.data.orders);
      setReceiptsLoaded(true);
    }
    catch (error) {
      setError(error);
      console.log(error);
    }
  }

  const handleOnSubmitCheckoutForm = async () => {
    try {
      await axios.post(url, {user: {name: checkoutForm.name, email: checkoutForm.email}, shoppingCart: shoppingCart});
      await getAndSetReceipts();
      setPostStatus(1);
    }
    catch (error) {
      setError(error);
      console.log(error);
      setPostStatus(-1);
    }
  }

  const handleOnSearchChange = (value) => {
    if(value=="") {
      setSearchOpen(false);
    }
    else {
      setSearchOpen(true);
    }
    setSearchValue(value);
  }

  const handleOnCategoryPress = (value) => {
    if(value == activeCategory) {
      setActiveCategory("");
    }
    else {
      setActiveCategory(value);
    }
  }

  if(isFetching) {
    return null;
  }

  if(products.length==0) { /* Network Error */
    return (
      <div className="error">
        <h1 className="error-type">{error.message}</h1>
      </div>
    )
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home activeCategory={activeCategory} categories={categories} handleOnCategoryPress={handleOnCategoryPress} setPostStatus={setPostStatus} shoppingCart={shoppingCart} products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemFromCart} />}></Route>
            <Route path="/product/:productId" element={<ProductDetail setPostStatus={setPostStatus} shoppingCart={shoppingCart} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemFromCart} />}></Route>
            <Route path="/receipts" element={<ReceiptGrid receiptsLoaded={receiptsLoaded} getAndSetReceipts={getAndSetReceipts} receiptSearchValue={receiptSearchValue} setReceiptSearchValue={setReceiptSearchValue} products={products} receipts={receipts}/>}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
        <Navbar products={products} searchOpen={searchOpen} setSearchOpen={setSearchOpen} searchValue={searchValue} handleOnSearchChange={handleOnSearchChange} />
        <Sidebar receipts={receipts} handleFormSubmitted={handleFormSubmitted} error={error} postStatus={postStatus} shoppingPrice={shoppingPrice} isOpen={isOpen} shoppingCart={shoppingCart} products={products} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} handleOnToggle={handleOnToggle} />
        <Footer />
      </BrowserRouter>
    </div>
  )
}
