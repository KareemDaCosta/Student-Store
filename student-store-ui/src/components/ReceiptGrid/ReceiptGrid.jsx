import * as React from "react"
import "./ReceiptGrid.css"
import Receipt from "../Receipt/Receipt"

export default function ReceiptGrid({ receiptSearchValue, receipts, products, setReceiptSearchValue }) {
    return (
        <div className="receipt-grid-container">
            <ReceiptSearchBar receiptSearchValue={receiptSearchValue} setReceiptSearchValue={setReceiptSearchValue} />
            <div className="receipt-grid">
                {receipts.filter((item) => (
                    item.checkoutForm.email.length >= receiptSearchValue.length && item.checkoutForm.email.substring(0, receiptSearchValue.length).toLowerCase() == receiptSearchValue.toLowerCase()
                ))
                .map((item, i) => (
                    <Receipt key={i} receipt={item} count={i+1} products={products}/>
                ))}
            </div>
        </div>
    )

}

export function ReceiptSearchBar( {receiptSearchValue, setReceiptSearchValue}) {
    return (
        <div className="receipt-search-bar">
            <input className="receipt-input" type="text" placeholder="Email" value={receiptSearchValue} onChange={(event) => setReceiptSearchValue(event.target.value)}></input>
        </div>
    )
}