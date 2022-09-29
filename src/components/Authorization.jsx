import { setAuthorization } from "../Features/VisibilitySlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux/es/exports";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { CSSTransition} from "react-transition-group";
import { useState } from "react";
import "../Style/Authorization.scss"

export default function Authorization(){
    const visible = useSelector((state) => state.visibility.authorization)
    const dispatch = useDispatch();
    const [login, setLogin] = useState(0);
    return(
        <CSSTransition
            in={visible===1}
            unmountOnExit
            timeout={1000}
            classNames="menuPrimary"
            >
        
        <div className="Authorization">
            <div className="Authorization-Header" >
                <span id="Authorization-HeaderText">{login ? "Login" : "Register"}</span>
                <span onClick={() => {
                dispatch(setAuthorization(0))
            }} id="closeIcon"><AiOutlineClose/></span>
                </div>

                <div className="Authorization-Container">

                <div className="Authorization-Signup" style={{display: login ? "none" : "flex"}}>
                <input variant='flushed' placeholder="Email" type="email"></input>
                <input variant='flushed' placeholder="Password" type="password"></input>
                <input variant='flushed' placeholder="Confirm Password" type="password"></input>

                <div className="Signup-Buttons">

                <div id="mainButtonSignup"><button>Signup</button></div>
                <div id="secondaryButtonLogin"><button onClick={() => setLogin(1)}>Log In</button></div>

                </div>
                </div>

                <div className="Authorization-Login" style={{display: !login ? "none" : "flex"}}>
                <input variant='flushed' placeholder="Email" type="email"></input>
                <input variant='flushed' placeholder="Password" type="password"></input>

                <div className="Login-Buttons">

                <div id="mainButtonLogin"><button>Login</button></div>
                <div id="secondaryButtonSignup"><button onClick={() => setLogin(0)}>Register</button></div>

                </div>
                </div>

                </div>
        </div>
        </CSSTransition>
    )
}