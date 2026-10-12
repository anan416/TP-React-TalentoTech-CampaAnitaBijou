import "./Item.css";
import { useCart } from "../../context/CartContext";

export const Item = ({nombre, imagen, precio, children }) => {
  return (
    <article>
      <h2>{nombre}</h2>
      <img src={imagen} className="producto"/>
      <p>${precio}</p>
      {children}
    </article>
  );
};