import * as React from "react"
import "./CategoryContainer.css"
import CategorySelector from "../CategorySelector/CategorySelector"


export default function CategoryContainer({ activeCategory, categories, handleOnCategoryPress}) {
    return (
        <div className="category-container">
            {categories.map(item => (
                <CategorySelector key={item} category={item} activeCategory={activeCategory} handleOnCategoryPress={handleOnCategoryPress}/>
            ))}
        </div>
    )
}