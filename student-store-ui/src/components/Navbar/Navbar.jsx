import * as React from "react"
import "./Navbar.css"

import Logo from "../Logo/Logo"
import SearchBar from "../SearchBar/SearchBar"
import CategorySelector from "../CategorySelector/CategorySelector"

export default function Navbar({ activeCategory, categories, handleOnCategoryPress, products, searchOpen, setSearchOpen, searchValue, handleOnSearchChange}) {
  return (
    <nav className="navbar">
      <Logo id="logo"/>
      {categories.map(item => (
        <CategorySelector key={item} category={item} activeCategory={activeCategory} handleOnCategoryPress={handleOnCategoryPress}/>
      ))}
      <SearchBar products={products} searchOpen={searchOpen} setSearchOpen={setSearchOpen} searchValue={searchValue} handleOnSearchChange={handleOnSearchChange} />
    </nav>
  )
}
