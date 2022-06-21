import { Router, Routes, Link } from "react-router-dom"

import "./Logo.css"
import imageSource from "./logo.png";

export default function Logo() {
    return (
        <div className="logo">
            <Link to="/"><img className="logo-img" src={imageSource} /></Link>
        </div>

    )
  }