import {Nav} from "../Nav/Nav";
import logo from "../../assets/Logo.png";
import {Link} from "react-router-dom";
import {useCart} from "../../context/CartContext";

import "./Header.css";

export const Header = () => {
    const {getTotalCarrito} = useCart();
    const totalCarrito = getTotalCarrito();
    return(
        <header>
            <h1>CampAnita Bijou</h1>
            <Link to="/"><img className="icono" src={logo} alt="Logo"/></Link>
            <div id="carrito">
                <Link to="/carrito"><i className="fa-solid fa-cart-shopping"></i></Link><p className="letras carrito">{totalCarrito}</p>
            </div>   
            <Nav/>
        </header>
    );
};

