import {useCart} from "../../context/CartContext";
import {ProductoCarrito} from "../Carrito/ProductoCarrito";

export const ListaCarrito = () => {
  const { cart } = useCart();
  console.log(cart);

  return (
    <div className="contenedorCompra">
      {cart.map((element) => (
        <ProductoCarrito item={element} key={element.id} />
      ))}
    </div>
  );
};