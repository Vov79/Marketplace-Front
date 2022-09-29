import React from "react"
import {BsHeart} from "react-icons/bs"
import { Link } from "react-router-dom"

export default function Product({id,img, title,category,price}){
    return(
        
        <div className="Product" key={id}>
            <Link to={'/' + id}>
            <div id="productImg">
            <img src={img} alt="img" />
            </div>
            <div id="heart"><span><BsHeart /></span></div>
            <span>{category}</span>
            <p className="text">{title}</p>
            <p id="price" className="text">{price} $</p>
            </Link>
        </div>
        
        
    )
}