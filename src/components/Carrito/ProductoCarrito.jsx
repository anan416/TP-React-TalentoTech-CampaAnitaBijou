import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";

export const ProductoCarrito = ({ item }) => {
  const {quitarCarrito} = useCart();

  return (
    <Item {...item}>
      <button className="letras" onClick={() => quitarCarrito(item.id)}>Quitar</button>
    </Item>
  );
};