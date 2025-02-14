import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png"
import cart_icon from "../Assests/cart_icon.png"
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assests/nav_dropdown.png"
import { useRef } from "react";


const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [state, setState] = useState("Login");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const changeHandler = () => {
        setMenu(state);
    }

    const dropdown_toggle = () => {
        menuRef.current.classList.toggle('nav-menu-visible');
        event.target.classList.toggle('open')
    }
    return (

        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>SHOPPER</p>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link className="Link" to='/' >Shop</Link>{menu === "shop" && <hr />}</li>
                <li onClick={() => { setMenu("mens") }}><Link className="Link" to='/mens'>Men</Link>{menu === "mens" && <hr />}</li>
                <li onClick={() => { setMenu("womens") }}><Link className="Link" to='/womens'>Women</Link>{menu === "womens" && <hr />}</li>
                <li onClick={() => { setMenu("kids") }}><Link className="Link" to='/kids'>Kids</Link>{menu === "kids" && <hr />}</li>
            </ul>
            <div className="nav-login-cart">
                <Link className="Link" to='/login'><button>Login</button></Link>
                <Link className="Link" to='/cart'><img src={cart_icon} alt="cart" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div >
    )
}

export default Navbar