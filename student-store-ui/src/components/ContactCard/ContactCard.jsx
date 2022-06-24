import * as React from "react";
import "./ContactCard.css";

import github from "./github.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";

export default function ContactCard({contact}) {
    if(contact=="github") {
        return (
            <div className="contact-card">
                <a href="https://github.com/KareemDaCosta"><img src={github} alt={contact}/> </a>
            </div>
        )
    }
    else if(contact=="instagram") {
        return (
            <div className="contact-card">
                <a href="https://www.instagram.com/kareem.dacosta_/"><img src={instagram} alt={contact}/></a>
            </div>
        )
    }
    else {
        return (
            <div className="contact-card">
                <a href="https://www.linkedin.com/in/kareemdacosta"><img src={linkedin} alt={contact}/></a>
            </div>
        )
    }
}