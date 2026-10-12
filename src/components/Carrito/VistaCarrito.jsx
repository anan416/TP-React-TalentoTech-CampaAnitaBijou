import {useCart} from "../../context/CartContext";
import { ListaCarrito } from "./ListaCarrito";


export const VistaCarrito = () => {
  const {cart} = useCart();

  return (
    <section className="letras vistaCarrito">
      {cart.length ? (<><ListaCarrito /></>) : (
        <>
          <p>Aún no hay productos en el carrito</p>
        </>
      )}
    </section>
  );
};