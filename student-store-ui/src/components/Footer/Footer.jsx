import * as React from "react"
import "./Footer.css"
import ContactCard from "../ContactCard/ContactCard"

export default function Footer() {
    const contacts = ["github", "instagram", "linkedin"]
    console.log('contacts: ', contacts);
    return (<div className="footer">
       {contacts.map( (item) => (
            <ContactCard key={item} contact={item}/>
        ))}
    </div>)
}