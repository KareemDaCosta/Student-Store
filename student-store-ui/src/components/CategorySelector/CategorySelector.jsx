import * as React from "react"
import "./CategorySelector.css"

export default function CategorySelector({ category, activeCategory, handleOnCategoryPress}) {
    const classes = activeCategory==category ? "category-selector active" : "category-selector inactive"
    return (<div className="category-selector">
        <button className={classes} onClick={() => handleOnCategoryPress(category)}>{category}</button>
    </div>)
}