import { useState } from "react"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { CSSTransition} from "react-transition-group";

export default function Footer(){

    const [info, setInfo] = useState(0);
    return(
        <div className="Footer">
            <div className="footerInfo">
            <div className="footerInfoBlock">
            <div className="footerInfoMain" onClick={() => 
            {   if(info!==1)
                setInfo(1)
                else setInfo(0)
            }
                }><span>Company Information</span> <span className="footerInfoIcon"><MdOutlineKeyboardArrowDown/></span> </div>
                <ul id="footerWebInfoList">
                <li>About us</li>
                <li>Contacts</li>
                <li>Privacy Policy</li>
            </ul>
            <CSSTransition
            in={info===1}
            unmountOnExit
            timeout={1000}
            classNames="List"
            >
            <ul>
                <li>About us</li>
                <li>Contacts</li>
                <li>Privacy Policy</li>
            </ul>
            </CSSTransition>
            </div>

            <div className="footerInfoBlock">
            <div className="footerInfoMain" onClick={() => 
            {   if(info!==2)
                setInfo(2)
                else setInfo(0)
            }
                }><span>Company Information</span> <span className="footerInfoIcon"><MdOutlineKeyboardArrowDown/></span></div>
            <ul id="footerWebInfoList">
                <li>Figma Premium</li>
                <li>Contacts</li>
                <li>Privacy Policy</li>
            </ul>
            <CSSTransition
            in={info===2}
            unmountOnExit
            timeout={1000}
            classNames="List"
            >
            <ul>
                <li>Figma Premium</li>
                <li>Contacts</li>
                <li>Privacy Policy</li>
            </ul>
            </CSSTransition>
            </div>

            <div className="footerInfoBlock">
            <div className="footerInfoMain" onClick={() => 
            {   if(info!==3)
                setInfo(3)
                else setInfo(0)
            }
                }><span>Partners</span><span className="footerInfoIcon"><MdOutlineKeyboardArrowDown/></span></div>
           <ul id="footerWebInfoList"> 
                <li>Sell at Figma</li>
                <li>Contacts</li>
                <li>Privacy Policy</li>
            </ul>
           <CSSTransition
            in={info===3}
            unmountOnExit
            timeout={1000}
            classNames="List"
            >
            <ul> 
                <li>Sell at Figma</li>
                <li>Contacts</li>
                <li>Privacy Policy</li>
            </ul>
            </CSSTransition>
            </div>

            <div className="footerInfoBlock">
            <div className="footerInfoMain" onClick={() => 
            {   if(info!==4)
                setInfo(4)
                else setInfo(0)
            }
                }><span>Call-canters</span><span className="footerInfoIcon"><MdOutlineKeyboardArrowDown/></span></div>
            <ul id="footerWebInfoList">
                <li>tel.: 060 57 34 56</li>
                <li>email: fiduci@gmail.com</li>
                <li>gsm: 060 83 35 91</li>
            </ul>
            <CSSTransition
            in={info===4}
            unmountOnExit
            timeout={1000}
            classNames="List"
            >
            <ul>
                <li>tel.: 060 57 34 56</li>
                <li>email: fiduci@gmail.com</li>
                <li>gsm: 060 83 35 91</li>
            </ul>
            </CSSTransition>
           
            </div>
            </div>


            <div className="footerSecondPart">

            <div className="footerLogoWeb">
            <svg width="247" height="80" viewBox="0 0 247 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M95.28 56C94.96 56 94.688 55.904 94.464 55.712C94.272 55.488 94.176 55.216 94.176 54.896V23.552C94.176 23.2 94.272 22.928 94.464 22.736C94.688 22.512 94.96 22.4 95.28 22.4H114.864C115.216 22.4 115.488 22.512 115.68 22.736C115.904 22.928 116.016 23.2 116.016 23.552V25.472C116.016 25.792 115.904 26.064 115.68 26.288C115.488 26.48 115.216 26.576 114.864 26.576H98.832V37.76H113.904C114.256 37.76 114.528 37.872 114.72 38.096C114.944 38.288 115.056 38.56 115.056 38.912V40.832C115.056 41.152 114.944 41.424 114.72 41.648C114.496 41.84 114.224 41.936 113.904 41.936H98.832V54.896C98.832 55.216 98.72 55.488 98.496 55.712C98.272 55.904 98 56 97.68 56H95.28Z" fill="#211F20"/>
            <path d="M122.303 26.384C121.983 26.384 121.711 26.288 121.487 26.096C121.295 25.872 121.199 25.6 121.199 25.28V22.688C121.199 22.368 121.295 22.096 121.487 21.872C121.711 21.648 121.983 21.536 122.303 21.536H125.327C125.647 21.536 125.919 21.648 126.143 21.872C126.367 22.096 126.479 22.368 126.479 22.688V25.28C126.479 25.6 126.367 25.872 126.143 26.096C125.919 26.288 125.647 26.384 125.327 26.384H122.303ZM122.687 56C122.367 56 122.095 55.904 121.871 55.712C121.679 55.488 121.583 55.216 121.583 54.896V32.144C121.583 31.824 121.679 31.568 121.871 31.376C122.095 31.152 122.367 31.04 122.687 31.04H124.991C125.311 31.04 125.567 31.152 125.759 31.376C125.983 31.568 126.095 31.824 126.095 32.144V54.896C126.095 55.216 125.983 55.488 125.759 55.712C125.567 55.904 125.311 56 124.991 56H122.687Z" fill="#211F20"/>
            <path d="M142.328 56.48C139 56.48 136.488 55.392 134.792 53.216C133.096 51.04 132.2 48.288 132.104 44.96L132.056 43.52L132.104 42.08C132.2 38.784 133.096 36.048 134.792 33.872C136.488 31.664 139 30.56 142.328 30.56C145.624 30.56 148.216 31.728 150.104 34.064V23.024C150.104 22.704 150.2 22.448 150.392 22.256C150.616 22.032 150.888 21.92 151.208 21.92H153.512C153.832 21.92 154.088 22.032 154.28 22.256C154.504 22.448 154.616 22.704 154.616 23.024V54.896C154.616 55.216 154.504 55.488 154.28 55.712C154.088 55.904 153.832 56 153.512 56H151.352C151.032 56 150.76 55.904 150.536 55.712C150.344 55.488 150.248 55.216 150.248 54.896V52.88C148.392 55.28 145.752 56.48 142.328 56.48ZM143.336 52.592C145.544 52.592 147.192 51.872 148.28 50.432C149.4 48.96 150.008 47.216 150.104 45.2C150.136 44.848 150.152 44.24 150.152 43.376C150.152 42.48 150.136 41.856 150.104 41.504C150.04 39.616 149.432 37.968 148.28 36.56C147.128 35.152 145.48 34.448 143.336 34.448C141.064 34.448 139.4 35.152 138.344 36.56C137.32 37.968 136.76 39.824 136.664 42.128L136.616 43.52C136.616 49.568 138.856 52.592 143.336 52.592Z" fill="#211F20"/>
            <path d="M171.067 56.48C168.027 56.48 165.675 55.504 164.011 53.552C162.347 51.568 161.515 48.944 161.515 45.68V32.144C161.515 31.824 161.611 31.568 161.803 31.376C162.027 31.152 162.299 31.04 162.619 31.04H165.019C165.339 31.04 165.595 31.152 165.787 31.376C166.011 31.568 166.123 31.824 166.123 32.144V45.44C166.123 50.208 168.203 52.592 172.363 52.592C174.379 52.592 175.979 51.968 177.163 50.72C178.347 49.44 178.939 47.68 178.939 45.44V32.144C178.939 31.824 179.035 31.568 179.227 31.376C179.451 31.152 179.723 31.04 180.043 31.04H182.443C182.763 31.04 183.019 31.152 183.211 31.376C183.403 31.568 183.499 31.824 183.499 32.144V54.896C183.499 55.216 183.403 55.488 183.211 55.712C183.019 55.904 182.763 56 182.443 56H180.187C179.867 56 179.595 55.904 179.371 55.712C179.179 55.488 179.083 55.216 179.083 54.896V52.784C178.187 54 177.099 54.928 175.819 55.568C174.539 56.176 172.955 56.48 171.067 56.48Z" fill="#211F20"/>
            <path d="M200.71 56.48C197.286 56.48 194.598 55.52 192.646 53.6C190.726 51.648 189.702 48.928 189.574 45.44L189.526 43.52L189.574 41.6C189.702 38.112 190.726 35.408 192.646 33.488C194.598 31.536 197.286 30.56 200.71 30.56C203.014 30.56 204.966 30.976 206.566 31.808C208.166 32.64 209.35 33.664 210.118 34.88C210.918 36.096 211.35 37.312 211.414 38.528C211.446 38.848 211.35 39.104 211.126 39.296C210.902 39.488 210.63 39.584 210.31 39.584H208.006C207.686 39.584 207.446 39.52 207.286 39.392C207.126 39.264 206.966 39.008 206.806 38.624C206.262 37.088 205.494 36 204.502 35.36C203.51 34.688 202.262 34.352 200.758 34.352C198.774 34.352 197.19 34.976 196.006 36.224C194.854 37.44 194.23 39.312 194.134 41.84L194.086 43.568L194.134 45.2C194.23 47.76 194.854 49.648 196.006 50.864C197.158 52.08 198.742 52.688 200.758 52.688C202.262 52.688 203.51 52.368 204.502 51.728C205.494 51.056 206.262 49.952 206.806 48.416C206.966 48.032 207.126 47.776 207.286 47.648C207.446 47.488 207.686 47.408 208.006 47.408H210.31C210.63 47.408 210.902 47.52 211.126 47.744C211.35 47.936 211.446 48.192 211.414 48.512C211.35 49.696 210.918 50.912 210.118 52.16C209.35 53.376 208.166 54.4 206.566 55.232C204.998 56.064 203.046 56.48 200.71 56.48Z" fill="#211F20"/>
            <path d="M217.835 26.384C217.514 26.384 217.242 26.288 217.018 26.096C216.826 25.872 216.73 25.6 216.73 25.28V22.688C216.73 22.368 216.826 22.096 217.018 21.872C217.242 21.648 217.514 21.536 217.835 21.536H220.859C221.178 21.536 221.451 21.648 221.674 21.872C221.898 22.096 222.01 22.368 222.01 22.688V25.28C222.01 25.6 221.898 25.872 221.674 26.096C221.451 26.288 221.178 26.384 220.859 26.384H217.835ZM218.219 56C217.898 56 217.626 55.904 217.402 55.712C217.21 55.488 217.115 55.216 217.115 54.896V32.144C217.115 31.824 217.21 31.568 217.402 31.376C217.626 31.152 217.898 31.04 218.219 31.04H220.523C220.842 31.04 221.098 31.152 221.29 31.376C221.514 31.568 221.626 31.824 221.626 32.144V54.896C221.626 55.216 221.514 55.488 221.29 55.712C221.098 55.904 220.842 56 220.523 56H218.219Z" fill="#211F20"/>
            <path d="M0 0H80V80H0V0Z" fill="#211F20"/>
            <path d="M0 0H247V5H0V0Z" fill="#211F20"/>
            <path d="M7 75H247V80H7V75Z" fill="#211F20"/>
            <path d="M242 0H247V80H242V0Z" fill="#211F20"/>
            <path d="M30.0615 56C29.7538 56 29.4923 55.9057 29.2769 55.7171C29.0923 55.4971 29 55.23 29 54.9157V24.1314C29 23.7857 29.0923 23.5186 29.2769 23.33C29.4923 23.11 29.7538 23 30.0615 23H48.8923C49.2308 23 49.4923 23.11 49.6769 23.33C49.8923 23.5186 50 23.7857 50 24.1314V26.0171C50 26.3314 49.8923 26.5986 49.6769 26.8186C49.4923 27.0071 49.2308 27.1014 48.8923 27.1014H33.4769V38.0857H47.9692C48.3077 38.0857 48.5692 38.1957 48.7538 38.4157C48.9692 38.6043 49.0769 38.8714 49.0769 39.2171V41.1029C49.0769 41.4171 48.9692 41.6843 48.7538 41.9043C48.5385 42.0929 48.2769 42.1871 47.9692 42.1871H33.4769V54.9157C33.4769 55.23 33.3692 55.4971 33.1538 55.7171C32.9385 55.9057 32.6769 56 32.3692 56H30.0615Z" fill="white"/>
            </svg>
            </div>

            <div className="footerLogoMobile">
            <svg width="100" height="33" viewBox="0 0 100 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.5749 22.6721C38.4453 22.6721 38.3352 22.6332 38.2445 22.5555C38.1668 22.4648 38.1279 22.3547 38.1279 22.2251V9.53522C38.1279 9.39271 38.1668 9.28259 38.2445 9.20486C38.3352 9.11417 38.4453 9.06882 38.5749 9.06882H46.5036C46.6462 9.06882 46.7563 9.11417 46.834 9.20486C46.9247 9.28259 46.97 9.39271 46.97 9.53522V10.3125C46.97 10.4421 46.9247 10.5522 46.834 10.6429C46.7563 10.7206 46.6462 10.7595 46.5036 10.7595H40.013V15.2874H46.115C46.2575 15.2874 46.3676 15.3328 46.4453 15.4235C46.536 15.5012 46.5814 15.6113 46.5814 15.7538V16.5312C46.5814 16.6607 46.536 16.7708 46.4453 16.8615C46.3547 16.9393 46.2445 16.9781 46.115 16.9781H40.013V22.2251C40.013 22.3547 39.9676 22.4648 39.8769 22.5555C39.7862 22.6332 39.6761 22.6721 39.5466 22.6721H38.5749Z" fill="#211F20"/>
            <path d="M49.5155 10.6818C49.3859 10.6818 49.2758 10.6429 49.1851 10.5652C49.1074 10.4745 49.0685 10.3644 49.0685 10.2348V9.18542C49.0685 9.05587 49.1074 8.94575 49.1851 8.85506C49.2758 8.76437 49.3859 8.71903 49.5155 8.71903H50.7398C50.8693 8.71903 50.9795 8.76437 51.0701 8.85506C51.1608 8.94575 51.2062 9.05587 51.2062 9.18542V10.2348C51.2062 10.3644 51.1608 10.4745 51.0701 10.5652C50.9795 10.6429 50.8693 10.6818 50.7398 10.6818H49.5155ZM49.6709 22.6721C49.5414 22.6721 49.4313 22.6332 49.3406 22.5555C49.2629 22.4648 49.224 22.3547 49.224 22.2251V13.0138C49.224 12.8842 49.2629 12.7806 49.3406 12.7028C49.4313 12.6121 49.5414 12.5668 49.6709 12.5668H50.6037C50.7333 12.5668 50.8369 12.6121 50.9147 12.7028C51.0054 12.7806 51.0507 12.8842 51.0507 13.0138V22.2251C51.0507 22.3547 51.0054 22.4648 50.9147 22.5555C50.8369 22.6332 50.7333 22.6721 50.6037 22.6721H49.6709Z" fill="#211F20"/>
            <path d="M57.6228 22.8664C56.2754 22.8664 55.2584 22.4259 54.5718 21.5449C53.8851 20.664 53.5224 19.5498 53.4835 18.2024L53.4641 17.6194L53.4835 17.0364C53.5224 15.702 53.8851 14.5943 54.5718 13.7134C55.2584 12.8194 56.2754 12.3725 57.6228 12.3725C58.9572 12.3725 60.0066 12.8453 60.771 13.7911V9.32146C60.771 9.1919 60.8098 9.08826 60.8876 9.01053C60.9782 8.91984 61.0884 8.87449 61.2179 8.87449H62.1507C62.2803 8.87449 62.3839 8.91984 62.4616 9.01053C62.5523 9.08826 62.5977 9.1919 62.5977 9.32146V22.2251C62.5977 22.3547 62.5523 22.4648 62.4616 22.5555C62.3839 22.6332 62.2803 22.6721 62.1507 22.6721H61.2762C61.1467 22.6721 61.0365 22.6332 60.9459 22.5555C60.8681 22.4648 60.8292 22.3547 60.8292 22.2251V21.4089C60.0778 22.3806 59.009 22.8664 57.6228 22.8664ZM58.0309 21.2923C58.9248 21.2923 59.592 21.0008 60.0325 20.4178C60.4859 19.8219 60.7321 19.1158 60.771 18.2996C60.7839 18.1571 60.7904 17.9109 60.7904 17.5611C60.7904 17.1984 60.7839 16.9457 60.771 16.8032C60.745 16.0389 60.4989 15.3717 60.0325 14.8016C59.5661 14.2316 58.8989 13.9466 58.0309 13.9466C57.111 13.9466 56.4373 14.2316 56.0098 14.8016C55.5952 15.3717 55.3685 16.1231 55.3297 17.0559L55.3102 17.6194C55.3102 20.068 56.2171 21.2923 58.0309 21.2923Z" fill="#211F20"/>
            <path d="M69.2579 22.8664C68.0272 22.8664 67.075 22.4713 66.4013 21.681C65.7276 20.8777 65.3907 19.8154 65.3907 18.4939V13.0138C65.3907 12.8842 65.4296 12.7806 65.5073 12.7028C65.598 12.6121 65.7081 12.5668 65.8377 12.5668H66.8094C66.9389 12.5668 67.0426 12.6121 67.1203 12.7028C67.211 12.7806 67.2563 12.8842 67.2563 13.0138V18.3968C67.2563 20.3271 68.0984 21.2923 69.7826 21.2923C70.5988 21.2923 71.2466 21.0397 71.726 20.5344C72.2053 20.0162 72.445 19.3036 72.445 18.3968V13.0138C72.445 12.8842 72.4839 12.7806 72.5616 12.7028C72.6523 12.6121 72.7624 12.5668 72.892 12.5668H73.8636C73.9932 12.5668 74.0968 12.6121 74.1745 12.7028C74.2523 12.7806 74.2911 12.8842 74.2911 13.0138V22.2251C74.2911 22.3547 74.2523 22.4648 74.1745 22.5555C74.0968 22.6332 73.9932 22.6721 73.8636 22.6721H72.9503C72.8207 22.6721 72.7106 22.6332 72.6199 22.5555C72.5422 22.4648 72.5033 22.3547 72.5033 22.2251V21.37C72.1405 21.8623 71.7001 22.2381 71.1818 22.4972C70.6636 22.7433 70.0223 22.8664 69.2579 22.8664Z" fill="#211F20"/>
            <path d="M81.2592 22.8664C79.8729 22.8664 78.7847 22.4777 77.9944 21.7004C77.217 20.9101 76.8025 19.8089 76.7507 18.3968L76.7312 17.6194L76.7507 16.8421C76.8025 15.43 77.217 14.3352 77.9944 13.5579C78.7847 12.7676 79.8729 12.3725 81.2592 12.3725C82.192 12.3725 82.9822 12.5409 83.63 12.8777C84.2778 13.2146 84.7571 13.6291 85.0681 14.1215C85.392 14.6138 85.5668 15.1061 85.5928 15.5984C85.6057 15.7279 85.5668 15.8316 85.4762 15.9093C85.3855 15.987 85.2754 16.0259 85.1458 16.0259H84.213C84.0835 16.0259 83.9863 16 83.9215 15.9482C83.8567 15.8964 83.792 15.7927 83.7272 15.6372C83.5069 15.0154 83.196 14.5749 82.7944 14.3158C82.3928 14.0437 81.8875 13.9077 81.2786 13.9077C80.4754 13.9077 79.8341 14.1603 79.3547 14.6656C78.8883 15.1579 78.6357 15.9158 78.5968 16.9393L78.5774 17.6389L78.5968 18.2996C78.6357 19.336 78.8883 20.1004 79.3547 20.5927C79.8211 21.085 80.4624 21.3312 81.2786 21.3312C81.8875 21.3312 82.3928 21.2016 82.7944 20.9425C83.196 20.6704 83.5069 20.2235 83.7272 19.6016C83.792 19.4462 83.8567 19.3425 83.9215 19.2907C83.9863 19.2259 84.0835 19.1935 84.213 19.1935H85.1458C85.2754 19.1935 85.3855 19.2389 85.4762 19.3296C85.5668 19.4073 85.6057 19.5109 85.5928 19.6405C85.5668 20.1198 85.392 20.6121 85.0681 21.1174C84.7571 21.6097 84.2778 22.0243 83.63 22.3611C82.9952 22.698 82.2049 22.8664 81.2592 22.8664Z" fill="#211F20"/>
            <path d="M88.1921 10.6818C88.0625 10.6818 87.9524 10.6429 87.8617 10.5652C87.784 10.4745 87.7451 10.3644 87.7451 10.2348V9.18542C87.7451 9.05587 87.784 8.94575 87.8617 8.85506C87.9524 8.76437 88.0625 8.71903 88.1921 8.71903H89.4164C89.546 8.71903 89.6561 8.76437 89.7468 8.85506C89.8374 8.94575 89.8828 9.05587 89.8828 9.18542V10.2348C89.8828 10.3644 89.8374 10.4745 89.7468 10.5652C89.6561 10.6429 89.546 10.6818 89.4164 10.6818H88.1921ZM88.3476 22.6721C88.218 22.6721 88.1079 22.6332 88.0172 22.5555C87.9395 22.4648 87.9006 22.3547 87.9006 22.2251V13.0138C87.9006 12.8842 87.9395 12.7806 88.0172 12.7028C88.1079 12.6121 88.218 12.5668 88.3476 12.5668H89.2804C89.4099 12.5668 89.5136 12.6121 89.5913 12.7028C89.682 12.7806 89.7273 12.8842 89.7273 13.0138V22.2251C89.7273 22.3547 89.682 22.4648 89.5913 22.5555C89.5136 22.6332 89.4099 22.6721 89.2804 22.6721H88.3476Z" fill="#211F20"/>
            <path d="M0 0H32.3887V32.3887H0V0Z" fill="#211F20"/>
            <path d="M0 0H100V2.02429H0V0Z" fill="#211F20"/>
            <path d="M2.83401 30.3644H100V32.3887H2.83401V30.3644Z" fill="#211F20"/>
            <path d="M97.9757 0H100V32.3887H97.9757V0Z" fill="#211F20"/>
            <path d="M12.171 22.6721C12.0464 22.6721 11.9405 22.6339 11.8533 22.5576C11.7786 22.4685 11.7412 22.3603 11.7412 22.2331V9.76984C11.7412 9.62987 11.7786 9.52172 11.8533 9.44537C11.9405 9.3563 12.0464 9.31177 12.171 9.31177H19.7948C19.9318 9.31177 20.0377 9.3563 20.1124 9.44537C20.1996 9.52172 20.2432 9.62987 20.2432 9.76984V10.5333C20.2432 10.6605 20.1996 10.7687 20.1124 10.8577C20.0377 10.9341 19.9318 10.9723 19.7948 10.9723H13.5537V15.4193H19.4211C19.5581 15.4193 19.664 15.4639 19.7387 15.5529C19.8259 15.6293 19.8695 15.7374 19.8695 15.8774V16.6409C19.8695 16.7681 19.8259 16.8763 19.7387 16.9653C19.6515 17.0417 19.5456 17.0798 19.4211 17.0798H13.5537V22.2331C13.5537 22.3603 13.5101 22.4685 13.4229 22.5576C13.3357 22.6339 13.2298 22.6721 13.1053 22.6721H12.171Z" fill="white"/>
            </svg>
            </div>

            <div id="copyText"><span>@Copyrght Fiduci 2021</span></div>
            
            </div>

        </div>
    )
}