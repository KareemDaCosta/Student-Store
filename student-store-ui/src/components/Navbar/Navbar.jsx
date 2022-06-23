import * as React from "react"
import "./Navbar.css"

import Logo from "../Logo/Logo"
import SearchBar from "../SearchBar/SearchBar"

export default function Navbar({ products, searchOpen, setSearchOpen, searchValue, handleOnSearchChange}) {
  return (
    <nav className="navbar">
      <Logo id="logo"/>
      <SearchBar products={products} searchOpen={searchOpen} setSearchOpen={setSearchOpen} searchValue={searchValue} handleOnSearchChange={handleOnSearchChange} />
    </nav>
  )
}
