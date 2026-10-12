import { Item } from "../Item/Item";
import "./ItemList.css";
import { useCart } from "../../context/CartContext";

export const ItemList = ({ productos }) => {
  const {agregarCarrito} = useCart();

  if (!productos.length) {
    return <p>No hay productos</p>;
  }

  return (
    <div id="contenedorTarjetas">
      {productos.map((producto) => (
        <Item key={producto.id} {...producto}>
        <button className="letras" onClick={() => agregarCarrito(producto)}>Comprar</button>
        </Item>
      ))}
    </div>
  );
};