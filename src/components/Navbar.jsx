import { useState } from "react"
import { AiOutlineHeart, AiOutlineMenu  } from "react-icons/ai"
import { BsBag } from "react-icons/bs"
import { FaRegUser } from "react-icons/fa"
import { CSSTransition} from "react-transition-group";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/exports";
import { setCart } from "../Features/VisibilitySlice";
import { setAuthorization } from "../Features/VisibilitySlice"
import Authorization from "./Authorization";

export default function Navbar(){
    const [menu, setMenu] = useState(0);
    const dispatch = useDispatch();
    const cartVisible = useSelector((state) => state.visibility.cart)
    const cartProductsCount = useSelector((state) => state.cart.cartItems).length
    const authorizationVisible = useSelector((state) => state.visibility.authorization)

    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) && window.screen.width<500) {
    document.getElementById("header").style.position = "fixed";
  } else {
    document.getElementById("header").style.position = "initial";
  }
}
    
    
    return (
        <div className="Navbar" id="header">
            <header>
            <div className="hNavFirst">

            <Link to="/catalog">
            <div className="catalog">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.62712 8.47458H0.847458C0.622698 8.47458 0.407144 8.38529 0.248215 8.22636C0.0892855 8.06743 0 7.85188 0 7.62712L0 0.847458C0 0.622698 0.0892855 0.407144 0.248215 0.248215C0.407144 0.0892855 0.622698 0 0.847458 0L7.62712 0C7.85188 0 8.06743 0.0892855 8.22636 0.248215C8.38529 0.407144 8.47458 0.622698 8.47458 0.847458V7.62712C8.47458 7.85188 8.38529 8.06743 8.22636 8.22636C8.06743 8.38529 7.85188 8.47458 7.62712 8.47458ZM1.69492 6.77966H6.77966V1.69492H1.69492V6.77966Z" fill="#211F20"/>
            <path d="M19.1525 8.47458H12.3728C12.1481 8.47458 11.9325 8.38529 11.7736 8.22636C11.6147 8.06743 11.5254 7.85188 11.5254 7.62712V0.847458C11.5254 0.622698 11.6147 0.407144 11.7736 0.248215C11.9325 0.0892855 12.1481 0 12.3728 0L19.1525 0C19.3773 0 19.5928 0.0892855 19.7518 0.248215C19.9107 0.407144 20 0.622698 20 0.847458V7.62712C20 7.85188 19.9107 8.06743 19.7518 8.22636C19.5928 8.38529 19.3773 8.47458 19.1525 8.47458ZM13.2203 6.77966H18.3051V1.69492H13.2203V6.77966Z" fill="#211F20"/>
            <path d="M7.62712 20H0.847458C0.622698 20 0.407144 19.9107 0.248215 19.7518C0.0892855 19.5929 0 19.3773 0 19.1525L0 12.3729C0 12.1481 0.0892855 11.9326 0.248215 11.7736C0.407144 11.6147 0.622698 11.5254 0.847458 11.5254H7.62712C7.85188 11.5254 8.06743 11.6147 8.22636 11.7736C8.38529 11.9326 8.47458 12.1481 8.47458 12.3729V19.1525C8.47458 19.3773 8.38529 19.5929 8.22636 19.7518C8.06743 19.9107 7.85188 20 7.62712 20ZM1.69492 18.3051H6.77966V13.2203H1.69492V18.3051Z" fill="#211F20"/>
            <path d="M19.1525 20H12.3728C12.1481 20 11.9325 19.9107 11.7736 19.7518C11.6147 19.5928 11.5254 19.3773 11.5254 19.1525V12.3729C11.5254 12.1481 11.6147 11.9326 11.7736 11.7736C11.9325 11.6147 12.1481 11.5254 12.3728 11.5254H19.1525C19.3773 11.5254 19.5928 11.6147 19.7518 11.7736C19.9107 11.9326 20 12.1481 20 12.3729V19.1525C20 19.3773 19.9107 19.5928 19.7518 19.7518C19.5928 19.9107 19.3773 20 19.1525 20ZM13.2203 18.3051H18.3051V13.2203H13.2203V18.3051Z" fill="#211F20"/>
            </svg>
            
            <span>Catalog</span>
            
            </div>
            </Link>
            </div>
            
            <Link to="/">
            <div className="logo">
                
            <svg width="154" height="50" viewBox="0 0 154 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M59.4053 35C59.2058 35 59.0362 34.94 58.8966 34.82C58.7769 34.68 58.717 34.51 58.717 34.31V14.72C58.717 14.5 58.7769 14.33 58.8966 14.21C59.0362 14.07 59.2058 14 59.4053 14H71.6156C71.8351 14 72.0047 14.07 72.1244 14.21C72.264 14.33 72.3339 14.5 72.3339 14.72V15.92C72.3339 16.12 72.264 16.29 72.1244 16.43C72.0047 16.55 71.8351 16.61 71.6156 16.61H61.62V23.6H71.0171C71.2365 23.6 71.4061 23.67 71.5258 23.81C71.6655 23.93 71.7353 24.1 71.7353 24.32V25.52C71.7353 25.72 71.6655 25.89 71.5258 26.03C71.3862 26.15 71.2166 26.21 71.0171 26.21H61.62V34.31C61.62 34.51 61.5501 34.68 61.4105 34.82C61.2708 34.94 61.1012 35 60.9017 35H59.4053Z" fill="#211F20"/>
            <path d="M76.2539 16.49C76.0543 16.49 75.8848 16.43 75.7451 16.31C75.6254 16.17 75.5655 16 75.5655 15.8V14.18C75.5655 13.98 75.6254 13.81 75.7451 13.67C75.8848 13.53 76.0543 13.46 76.2539 13.46H78.1393C78.3388 13.46 78.5084 13.53 78.648 13.67C78.7877 13.81 78.8575 13.98 78.8575 14.18V15.8C78.8575 16 78.7877 16.17 78.648 16.31C78.5084 16.43 78.3388 16.49 78.1393 16.49H76.2539ZM76.4933 35C76.2938 35 76.1242 34.94 75.9845 34.82C75.8648 34.68 75.8049 34.51 75.8049 34.31V20.09C75.8049 19.89 75.8648 19.73 75.9845 19.61C76.1242 19.47 76.2938 19.4 76.4933 19.4H77.9298C78.1293 19.4 78.2889 19.47 78.4086 19.61C78.5483 19.73 78.6181 19.89 78.6181 20.09V34.31C78.6181 34.51 78.5483 34.68 78.4086 34.82C78.2889 34.94 78.1293 35 77.9298 35H76.4933Z" fill="#211F20"/>
            <path d="M88.7391 35.3C86.6641 35.3 85.0979 34.62 84.0405 33.26C82.9831 31.9 82.4244 30.18 82.3646 28.1L82.3347 27.2L82.3646 26.3C82.4244 24.24 82.9831 22.53 84.0405 21.17C85.0979 19.79 86.6641 19.1 88.7391 19.1C90.7941 19.1 92.4101 19.83 93.5873 21.29V14.39C93.5873 14.19 93.6471 14.03 93.7668 13.91C93.9065 13.77 94.0761 13.7 94.2756 13.7H95.7121C95.9116 13.7 96.0712 13.77 96.1909 13.91C96.3306 14.03 96.4004 14.19 96.4004 14.39V34.31C96.4004 34.51 96.3306 34.68 96.1909 34.82C96.0712 34.94 95.9116 35 95.7121 35H94.3654C94.1659 35 93.9963 34.94 93.8566 34.82C93.7369 34.68 93.677 34.51 93.677 34.31V33.05C92.5199 34.55 90.8739 35.3 88.7391 35.3ZM89.3675 32.87C90.7442 32.87 91.7717 32.42 92.45 31.52C93.1483 30.6 93.5274 29.51 93.5873 28.25C93.6072 28.03 93.6172 27.65 93.6172 27.11C93.6172 26.55 93.6072 26.16 93.5873 25.94C93.5474 24.76 93.1683 23.73 92.45 22.85C91.7318 21.97 90.7043 21.53 89.3675 21.53C87.951 21.53 86.9135 21.97 86.2551 22.85C85.6167 23.73 85.2675 24.89 85.2077 26.33L85.1778 27.2C85.1778 30.98 86.5744 32.87 89.3675 32.87Z" fill="#211F20"/>
            <path d="M106.657 35.3C104.762 35.3 103.295 34.69 102.258 33.47C101.22 32.23 100.702 30.59 100.702 28.55V20.09C100.702 19.89 100.762 19.73 100.881 19.61C101.021 19.47 101.191 19.4 101.39 19.4H102.886C103.086 19.4 103.246 19.47 103.365 19.61C103.505 19.73 103.575 19.89 103.575 20.09V28.4C103.575 31.38 104.872 32.87 107.465 32.87C108.722 32.87 109.72 32.48 110.458 31.7C111.196 30.9 111.565 29.8 111.565 28.4V20.09C111.565 19.89 111.625 19.73 111.745 19.61C111.885 19.47 112.054 19.4 112.254 19.4H113.75C113.949 19.4 114.109 19.47 114.229 19.61C114.349 19.73 114.408 19.89 114.408 20.09V34.31C114.408 34.51 114.349 34.68 114.229 34.82C114.109 34.94 113.949 35 113.75 35H112.343C112.144 35 111.974 34.94 111.835 34.82C111.715 34.68 111.655 34.51 111.655 34.31V32.99C111.096 33.75 110.418 34.33 109.62 34.73C108.822 35.11 107.834 35.3 106.657 35.3Z" fill="#211F20"/>
            <path d="M125.139 35.3C123.004 35.3 121.328 34.7 120.111 33.5C118.914 32.28 118.276 30.58 118.196 28.4L118.166 27.2L118.196 26C118.276 23.82 118.914 22.13 120.111 20.93C121.328 19.71 123.004 19.1 125.139 19.1C126.576 19.1 127.793 19.36 128.79 19.88C129.788 20.4 130.526 21.04 131.005 21.8C131.504 22.56 131.773 23.32 131.813 24.08C131.833 24.28 131.773 24.44 131.633 24.56C131.494 24.68 131.324 24.74 131.125 24.74H129.688C129.489 24.74 129.339 24.7 129.239 24.62C129.139 24.54 129.04 24.38 128.94 24.14C128.601 23.18 128.122 22.5 127.503 22.1C126.885 21.68 126.107 21.47 125.169 21.47C123.932 21.47 122.944 21.86 122.206 22.64C121.488 23.4 121.099 24.57 121.039 26.15L121.009 27.23L121.039 28.25C121.099 29.85 121.488 31.03 122.206 31.79C122.924 32.55 123.912 32.93 125.169 32.93C126.107 32.93 126.885 32.73 127.503 32.33C128.122 31.91 128.601 31.22 128.94 30.26C129.04 30.02 129.139 29.86 129.239 29.78C129.339 29.68 129.489 29.63 129.688 29.63H131.125C131.324 29.63 131.494 29.7 131.633 29.84C131.773 29.96 131.833 30.12 131.813 30.32C131.773 31.06 131.504 31.82 131.005 32.6C130.526 33.36 129.788 34 128.79 34.52C127.813 35.04 126.596 35.3 125.139 35.3Z" fill="#211F20"/>
            <path d="M135.816 16.49C135.616 16.49 135.447 16.43 135.307 16.31C135.187 16.17 135.128 16 135.128 15.8V14.18C135.128 13.98 135.187 13.81 135.307 13.67C135.447 13.53 135.616 13.46 135.816 13.46H137.701C137.901 13.46 138.07 13.53 138.21 13.67C138.35 13.81 138.42 13.98 138.42 14.18V15.8C138.42 16 138.35 16.17 138.21 16.31C138.07 16.43 137.901 16.49 137.701 16.49H135.816ZM136.055 35C135.856 35 135.686 34.94 135.547 34.82C135.427 34.68 135.367 34.51 135.367 34.31V20.09C135.367 19.89 135.427 19.73 135.547 19.61C135.686 19.47 135.856 19.4 136.055 19.4H137.492C137.691 19.4 137.851 19.47 137.971 19.61C138.11 19.73 138.18 19.89 138.18 20.09V34.31C138.18 34.51 138.11 34.68 137.971 34.82C137.851 34.94 137.691 35 137.492 35H136.055Z" fill="#211F20"/>
            <path d="M0 0H49.8785V50H0V0Z" fill="#211F20"/>
            <path d="M0 0H154V3.125H0V0Z" fill="#211F20"/>
            <path d="M4.36437 46.875H154V50H4.36437V46.875Z" fill="#211F20"/>
            <path d="M150.883 0H154V50H150.883V0Z" fill="#211F20"/>
            <path d="M18.7428 35C18.551 35 18.3879 34.9411 18.2537 34.8232C18.1385 34.6857 18.081 34.5188 18.081 34.3223V15.0821C18.081 14.8661 18.1385 14.6991 18.2537 14.5813C18.3879 14.4438 18.551 14.375 18.7428 14.375H30.4835C30.6945 14.375 30.8576 14.4438 30.9727 14.5813C31.107 14.6991 31.1741 14.8661 31.1741 15.0821V16.2607C31.1741 16.4571 31.107 16.6241 30.9727 16.7616C30.8576 16.8795 30.6945 16.9384 30.4835 16.9384H20.8723V23.8036H29.908C30.119 23.8036 30.282 23.8723 30.3972 24.0098C30.5314 24.1277 30.5986 24.2946 30.5986 24.5107V25.6893C30.5986 25.8857 30.5314 26.0527 30.3972 26.1902C30.2629 26.308 30.0998 26.367 29.908 26.367H20.8723V34.3223C20.8723 34.5188 20.8051 34.6857 20.6708 34.8232C20.5366 34.9411 20.3735 35 20.1816 35H18.7428Z" fill="white"/>
            </svg>
            </div>
            </Link>

            <div className="burgerMenu" onClick={() => {
                if(menu!==1)
                setMenu(1)
                else 
                setMenu(0)
            }}><AiOutlineMenu size={30}/></div>
            
            <div className="hNavSecond">

            <div className="likes">
            <AiOutlineHeart size={25}/>
            <span>0</span>
            </div>

            <div className="bag" onClick={() => {
                if(cartVisible!==1)
                dispatch(setCart(1))
                else 
                dispatch(setCart(0))
            }}>
            <BsBag size={25}/>
            <span>{cartProductsCount}</span>
            </div>

            <div className="profile"  onClick={() => {
                if(authorizationVisible!==1)
                dispatch(setAuthorization(1))
                else 
                dispatch(setAuthorization(0))
            }} >
            <span className="bag"><FaRegUser size={25}/></span>
            </div>

            </div>
            
            <CSSTransition
            in={menu===1}
            unmountOnExit
            timeout={1000}
            classNames="menuPrimary"
            >

            <div className="MainMobileMenu">
            
            <div className="mainCatalog">
            <div className="catalog">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.62712 8.47458H0.847458C0.622698 8.47458 0.407144 8.38529 0.248215 8.22636C0.0892855 8.06743 0 7.85188 0 7.62712L0 0.847458C0 0.622698 0.0892855 0.407144 0.248215 0.248215C0.407144 0.0892855 0.622698 0 0.847458 0L7.62712 0C7.85188 0 8.06743 0.0892855 8.22636 0.248215C8.38529 0.407144 8.47458 0.622698 8.47458 0.847458V7.62712C8.47458 7.85188 8.38529 8.06743 8.22636 8.22636C8.06743 8.38529 7.85188 8.47458 7.62712 8.47458ZM1.69492 6.77966H6.77966V1.69492H1.69492V6.77966Z" fill="#211F20"/>
            <path d="M19.1525 8.47458H12.3728C12.1481 8.47458 11.9325 8.38529 11.7736 8.22636C11.6147 8.06743 11.5254 7.85188 11.5254 7.62712V0.847458C11.5254 0.622698 11.6147 0.407144 11.7736 0.248215C11.9325 0.0892855 12.1481 0 12.3728 0L19.1525 0C19.3773 0 19.5928 0.0892855 19.7518 0.248215C19.9107 0.407144 20 0.622698 20 0.847458V7.62712C20 7.85188 19.9107 8.06743 19.7518 8.22636C19.5928 8.38529 19.3773 8.47458 19.1525 8.47458ZM13.2203 6.77966H18.3051V1.69492H13.2203V6.77966Z" fill="#211F20"/>
            <path d="M7.62712 20H0.847458C0.622698 20 0.407144 19.9107 0.248215 19.7518C0.0892855 19.5929 0 19.3773 0 19.1525L0 12.3729C0 12.1481 0.0892855 11.9326 0.248215 11.7736C0.407144 11.6147 0.622698 11.5254 0.847458 11.5254H7.62712C7.85188 11.5254 8.06743 11.6147 8.22636 11.7736C8.38529 11.9326 8.47458 12.1481 8.47458 12.3729V19.1525C8.47458 19.3773 8.38529 19.5929 8.22636 19.7518C8.06743 19.9107 7.85188 20 7.62712 20ZM1.69492 18.3051H6.77966V13.2203H1.69492V18.3051Z" fill="#211F20"/>
            <path d="M19.1525 20H12.3728C12.1481 20 11.9325 19.9107 11.7736 19.7518C11.6147 19.5928 11.5254 19.3773 11.5254 19.1525V12.3729C11.5254 12.1481 11.6147 11.9326 11.7736 11.7736C11.9325 11.6147 12.1481 11.5254 12.3728 11.5254H19.1525C19.3773 11.5254 19.5928 11.6147 19.7518 11.7736C19.9107 11.9326 20 12.1481 20 12.3729V19.1525C20 19.3773 19.9107 19.5928 19.7518 19.7518C19.5928 19.9107 19.3773 20 19.1525 20ZM13.2203 18.3051H18.3051V13.2203H13.2203V18.3051Z" fill="#211F20"/>
            </svg>
            
            <span>Catalog</span>
            </div>
            <MdOutlineKeyboardArrowRight size={20}/>
            
            </div>

            <div className="mainLikes"> 
            <div className="likes">
            <AiOutlineHeart size={25}/>
            <span>Favourites</span>
            </div>
            <MdOutlineKeyboardArrowRight size={20}/>
            </div>

            <div className="mainBag">
            <div className="bag">
            <BsBag size={25}/>
            <span>Bag</span>
            </div>
            <MdOutlineKeyboardArrowRight size={20}/>
            </div>
            
            <div className="mainProfile">
            <div className="profile">
            <FaRegUser size={25}/><span>Profile</span>
            </div>
            <MdOutlineKeyboardArrowRight size={20}/>
            </div>
        </div>
            </CSSTransition>

            <Authorization />
              <Cart />
              
                
            </header>
            
        </div>
    )
}