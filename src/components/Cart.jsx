import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { CSSTransition} from "react-transition-group";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setCart } from "../Features/VisibilitySlice";
import { removeCartItem } from '../Features/Cart/CartSlice'
import { incrementCartItem } from "../Features/Cart/CartSlice";
import { decrementCartItem } from "../Features/Cart/CartSlice";
import { getPhones } from "../Features/PhonesSlice";

export default function Cart(){
    const visible = useSelector((state) => state.visibility.cart)
    const phones = useSelector((state) => state.phones.phones)
    let products = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch();
    let sum = 0;
    products.forEach(element => {
        sum+=element.totalPrice
    })
    window.onload = ()=>{
        dispatch(getPhones())
    }
    function showProducts(){
       return( products.map((itm) =>
        {
            return(
            <div className="Cart-ProductItem" key={itm.id}>
                <div id="Cart-Img">

                <img src={itm.img}></img>
                <div id="Cart-ProductBody">
                {itm.title}
                </div>

                </div>
                <div id="Cart-ProductQuantity">
                    <AiOutlineMinus onClick={() => dispatch(decrementCartItem(itm.id))} /> {itm.quantity} <AiOutlinePlus onClick={() => dispatch(incrementCartItem(itm.id))}/>
                    </div>
                <div id="Cart-ProductCharge">
                    {itm.totalPrice} $
                    <span onClick={() => dispatch(removeCartItem(itm))} id="Cart-RemoveProductIcon"><AiOutlineClose /></span>
                </div>
            </div>
            )
        })
       )
        
    }
    return(
        
        <CSSTransition
            in={visible===1}
            unmountOnExit
            timeout={1000}
            classNames="menuPrimary"
            >
        <div className="Cart">
            
            <div className="Cart-Header" onClick={() => {
                dispatch(setCart(0))
            }}>
                <span id="Cart-HeaderText">Cart ({products.length})</span>
                <span id="closeIcon"><AiOutlineClose/></span>
                </div>

            <div className="Cart-Products">
            {showProducts()}
            </div>

            <div id="Cart-Total">
                <span>Total:</span><span id="Cart-TotalSum">{sum} $</span>
            </div>
        </div>
        </CSSTransition>
        
    )
}