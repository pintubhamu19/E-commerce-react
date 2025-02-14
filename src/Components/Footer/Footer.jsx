import "./Footer.css"
import footer_logo from "../Assests/logo_big.png"
import instagram_icon from "../Assests/instagram_icon.png"
import pintester_icon from "../Assests/pintester_icon.png"
import whatsapp_icon from "../Assests/whatsapp_icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    {/* <FontAwesomeIcon icon={faSquareInstagram} /> */}
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <FontAwesomeIcon className="fb-icon" icon={faFacebook} />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>&copy;Copyright @ 2025 - All Right Reserved</p>
            </div>
        </div>
    )
}