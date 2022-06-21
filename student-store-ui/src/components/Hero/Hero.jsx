import * as React from "react"
import "./Hero.css"

import imageLogo from "./hero.jpeg";

export default function Hero() {
    return (
        <div className="hero">
            <div className="intro">
                Welcome! Meta University is excited to offer you the following store items
            </div>
            <img src={imageLogo} className="hero-img"/>
        </div>
    )
}