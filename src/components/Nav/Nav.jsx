import "./Nav.css";
import {Link} from "react-router-dom";

export const Nav = () => {
    return(
        <nav>
            <ul className="letras">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/contactos">Contactos</Link></li>
            </ul>
        </nav>  
    );
};