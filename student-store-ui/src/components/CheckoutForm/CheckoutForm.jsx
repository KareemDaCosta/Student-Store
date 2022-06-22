import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm({handleFormSubmitted, error, postStatus, isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm}) {
    if(postStatus==1) {
        React.useEffect( () =>{
            handleFormSubmitted();
        }, [postStatus])
    return(
        <div className="success" >Success!</div>
    )
    }
    else if(postStatus == -1) {
        return (
            <div className="error">{error}</div>
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
