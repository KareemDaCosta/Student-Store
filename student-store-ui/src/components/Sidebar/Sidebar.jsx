import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar({ shoppingPrice, isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle }) {
  var sidebarClasses = isOpen ? "sidebar open" : "sidebar"
  return (
    <section className={sidebarClasses}>
      <button onClick={() => {handleOnToggle(!isOpen)}} className="toggle-button">
       Checkout
      </button>
      {isOpen ?
        <><ShoppingCart shoppingPrice={shoppingPrice} isOpen={isOpen} products={products} shoppingCart={shoppingCart}/>
        <CheckoutForm /></>:
        ""
      }
    </section>
  )
}
