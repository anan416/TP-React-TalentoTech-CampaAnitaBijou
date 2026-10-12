
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};


export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const isInCart = (item) => {
    const inCart = cart.some((element) => element.id === item.id);
    return inCart;
  };

  const agregarCarrito = (item) => {
    setCart([...cart, item]);
  };

  const quitarCarrito = (id) => {
    const updatedCart = cart.filter((element) => element.id !== id);
    setCart(updatedCart);
  };

  const getTotalCarrito = () => {
    return cart.length;
  };


  const values = {
    cart,
    agregarCarrito,
    quitarCarrito,
    getTotalCarrito
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};