import React from "react"
import { useSelector } from "react-redux"

const ProductListing=()=>{
    const products=useSelector((state)=>state.allProducts.products)
    const {id,name,category}=products[0]
    console.log(category)
    return(
    <div className="ui grid container">
        <h1>ProductListing</h1>
    </div>)
}
export default ProductListing