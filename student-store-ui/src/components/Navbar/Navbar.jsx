import * as React from "react"
import {Link} from "react-router-dom"

import "./Navbar.css"
import Logo from "../Logo/Logo"
import SearchBar from "../SearchBar/SearchBar"

export default function Navbar({ products, searchOpen, setSearchOpen, searchValue, handleOnSearchChange}) {
  return (
    <nav className="navbar">
      <Logo id="logo"/>
      <SearchBar products={products} searchOpen={searchOpen} setSearchOpen={setSearchOpen} searchValue={searchValue} handleOnSearchChange={handleOnSearchChange} />
      <Link to={`/receipts`}><button className="receipts-button">View All Receipts</button></Link>
    </nav>
  )
}
