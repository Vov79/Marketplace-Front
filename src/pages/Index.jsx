import { useState } from "react"
import {IoIosArrowRoundForward} from "react-icons/io"
import mobile from "../Images/Mobile.webp"
import laptop from "../Images/Laptop.webp"
import apple from "../Images/Apple.webp"
import audio from "../Images/Audio.webp"
import watch from "../Images/Watch.webp"
import tv from "../Images/TV.webp"
import accessories from "../Images/Accessories.webp"
import { useContext } from "react"
import { data } from "../components/Context"
import Product from "../components/Product"
import Footer from "../components/Footer"
import { CSSTransition, TransitionGroup } from "react-transition-group";


export default function Index(){

    const product = useContext(data);
    const [image,setImage] = useState(0);
    const images = [
        "https://darwin.md/images/slider/2022/07/july_Secret-Box_1400x520_Ru.webp",
        "https://darwin.md/images/slider/2022/07/macbook_13pro_desktop_ru.webp",
        "https://darwin.md/images/slider/2022/07/All-IT_1400x520_Ru.webp",
        "https://darwin.md/images/slider/2022/07/All_Distrac%D0%B5ie_1400x520_Ru.webp"
    ]

    const imagesNav =[
        mobile,
        laptop,
        apple,
        audio,
        watch,
        tv,
        accessories
    ]

    let prod = getProducts();

    function getProducts(){
        let produc = product.slice(0,5).filter(itm => itm.category === "phone")
        console.log(produc)
        return produc;
    }

    function showProducts(arr) {
        return arr.map((product) => (
          <Product 
          img = {product.img} 
          title = {product.title} 
          price = {product.price}
          category = {product.category}
          id = {product.id}
          />
          ))
      }

    

    return(
        <div className="Index">
            
            <div className="slider">
                <div className="sliderFirst">
                <div className="sliderFirstImage">
                
                <TransitionGroup style={{display:"flex"}}>
                <CSSTransition
                key={image}
                timeout={1300}
                classNames="messageout"
                >
                <img src={images[image]} alt="" width={500} height={500} id="imgs" />
                </CSSTransition>
                </TransitionGroup>
                </div>
                </div>
                
                <div className="sliderNav">
                <div className="sliderNavigation">
                    
            <input type="text" placeholder="Enter" disabled="yes"/>
                    {images.map((itm) => {
                        return(<div 
                            onClick={() => {setImage(images.indexOf(itm))}
                            } 
                            style={{
                                backgroundColor: image === images.indexOf(itm) ? "black" : "white"}}
                            ></div>)
                    
                    })}
                    
                </div>
                <div id="products"><span>All products</span><IoIosArrowRoundForward size={25}/></div>
                </div>
                
            </div>
            
            <div className="productNavigation">
                {
                    imagesNav.map( itm =>
                    {
                        return(
                            <div className="ProductNav"><img src={itm}/></div>
                        )
                    }
                )}
            </div>

            <div className="lastView">
                <span id="title">Most popular products</span>

                <div className="lastViewProducts">
                    {showProducts(prod)}
                </div>
                    
            </div>

            <Footer/>
            
        </div>
        
    )
}