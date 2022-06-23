import * as React from "react"

import "./SearchBar.css"
import SearchCard from "../SearchCard/SearchCard"

export default function SearchBar({products, searchOpen, setSearchOpen, searchValue, handleOnSearchChange}) {
    return (
       <div className="search-bar">
            <input type="text" placeholder="Search..." name="search-bar" value={searchValue} onClick={() => setSearchOpen(true)} onChange={(event) =>handleOnSearchChange(event.target.value)}></input>
            {searchOpen ? <ul>{products.filter(item => (
                item.name.length > searchValue.length && item.name.substring(0, searchValue.length).toLowerCase() == searchValue.toLowerCase()
            )).map(item => (
                <SearchCard key={item.name} type="Item" product={item} />
            ))}</ul>:""}
       </div>
    )
}