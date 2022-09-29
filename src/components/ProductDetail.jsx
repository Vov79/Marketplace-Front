import {useParams} from 'react-router-dom'
import { useContext, useState } from "react"
import { data } from "./Context"
import {BsHeart} from "react-icons/bs"
import { Button, ButtonGroup, useStatStyles } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { setCartItem } from '../Features/Cart/CartSlice'
import { v4 } from 'uuid'
import { useSelector } from 'react-redux'

export default function ProductDetail(){
    let { id } = useParams()
    const cartProducts = useSelector((state) => state.cart.cartItems)
    const d = useContext(data)
    let product = d.filter((itm) => itm.id.toString() === id)[0]
    const [cartValue, setCartValue] = useState();
    const dispatch = useDispatch();
    let newProduct = product;
    
    function addProduct(product){
        if(!Object.getOwnPropertyNames(product).includes("quantity")){
        Object.defineProperty(product, 'quantity', {
            value: 1,
            writable: true,
            enumerable: true,
            configurable: true
          })
        }

        if(!Object.getOwnPropertyNames(product).includes("totalPrice")){
            Object.defineProperty(product, 'totalPrice', {
                value: product.price,
                writable: true,
                enumerable: true,
                configurable: true
              })
            }

        if(!cartProducts.filter((itm) => itm.id.toString() === id).length)
        return dispatch(setCartItem(newProduct))
        

    }
    return(
        <div className="productDetail" key={product.id}>
            
            <div className='productDetail-imgContainer'>
                <img src={product.img}></img>
            </div>

            <div className='productDetail-description'>
            <div id="heart"><p className="productDetail-text">{product.title}</p><span><BsHeart /></span></div>
            <div className='productDetail-characteristics'>
            <p>Tehnologie de fabricație : 5 nm</p>
            <p>Camera frontală : 12 MP</p>
            <p>Nr. nuclee : 6</p>
            <p>Rezoluție (px) : 2778 x 1284</p>
            <p>Tip display : Super Retina XDR OLED</p>
            <p>Memorie internă : 256 GB</p>
            <p>Memorie RAM : 6 GB</p>
            </div>
            <div className='productDetail-cart'>
            <p id="price">{product.price} $</p>

            <ChakraProvider>
            <Button onClick={() => addProduct(newProduct)}>Add to cart</Button>
            </ChakraProvider>
            </div>

            </div>

        </div>
    )
}