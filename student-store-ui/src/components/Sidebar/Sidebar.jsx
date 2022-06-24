import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import ShoppingLogo from "./cart.png"

export default function Sidebar({ receipts, handleFormSubmitted, error, postStatus, shoppingPrice, isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle }) {
  var sidebarClasses = isOpen ? "sidebar open" : "sidebar closed"
  return (
    <section className={sidebarClasses}>
      <div className="shopping-img-container"><img src={ShoppingLogo} onClick={() => {handleOnToggle(!isOpen)}} className="toggle-button"></img></div>
      {isOpen ?
        <><ShoppingCart shoppingPrice={shoppingPrice} isOpen={isOpen} products={products} shoppingCart={shoppingCart}/>
        <CheckoutForm receipts={receipts} handleFormSubmitted={handleFormSubmitted} error={error} postStatus={postStatus} isOpen={isOpen} shoppingCart={shoppingCart} products={products} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/></>:
        ""
      }
    </section>
  )
}
