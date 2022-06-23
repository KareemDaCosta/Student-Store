import * as React from "react"
import "./CheckoutForm.css"
import Receipt from "../Receipt/Receipt"

export default function CheckoutForm({products, receipts, handleFormSubmitted, error, postStatus, isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm}) {
    if(postStatus==1) {
        React.useEffect( () =>{
            handleFormSubmitted();
            return(
                <div className="successful-checkout" >
                    <div className="success">Success!</div>
                </div>
            )
        }, [postStatus])
        if(receipts.length > 0) {            
            return(
                <div className="successful-checkout" >
                    <div className="success">Success!</div>
                    <div className="receipt"><Receipt products={products} receipt={receipts[receipts.length-1]} count={""}/></div>
                </div>
            )
        }
        else {
            return (
                <div className="successful-checkout" >
                        <div className="success">Success!</div>
                </div>
            )
        }
        
    }
    else if(postStatus == -1) {
        return (
            <div className="error">
                <h3 className="error-type">{error.message}</h3>
                {error.response.data ? <div className="error-message">{error.response.data.error.message}</div> : ""}
            </div>
        )
    }
    else {
        return (
            <div className="checkout-form">
                <input className="checkout-form-input" type="email" name="email" placeholder="student@codepath.org" value={checkoutForm.email} onChange={(event) => handleOnCheckoutFormChange("email", event.target.value)}></input>
                <input className="checkout-form-input" type="text" name="name" placeholder="Student Name" value={checkoutForm.name} onChange={(event) => handleOnCheckoutFormChange("name", event.target.value)}></input>
                <button onClick={handleOnSubmitCheckoutForm} className="checkout-button">Checkout</button>
            </div>
        )
    }        
    
}
