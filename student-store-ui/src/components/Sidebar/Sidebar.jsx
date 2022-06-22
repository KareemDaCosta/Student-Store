import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar({ handleFormSubmitted, error, postStatus, shoppingPrice, isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle }) {
  var sidebarClasses = isOpen ? "sidebar open" : "sidebar closed"
  return (
    <section className={sidebarClasses}>
      <button onClick={() => {handleOnToggle(!isOpen)}} className="toggle-button">
       Checkout
      </button>
      {isOpen ?
        <><ShoppingCart shoppingPrice={shoppingPrice} isOpen={isOpen} products={products} shoppingCart={shoppingCart}/>
        <CheckoutForm handleFormSubmitted={handleFormSubmitted} error={error} postStatus={postStatus} isOpen={isOpen} shoppingCart={shoppingCart} products={products} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/></>:
        ""
      }
    </section>
  )
}
