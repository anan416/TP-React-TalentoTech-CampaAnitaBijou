import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [errores, setErrores] = useState(null);
  const [carga, setCarga] = useState(true);

  useEffect(() => {
    fetch("/data/productos.json").then((res) => {
        if (!res.ok) {
          throw new Error("No se pueden cargar los productos");
        }

        return res.json();
      })
      .then((data) => setProductos(data))
      .catch((error) => setErrores(error.message))
      .finally(() => setCarga(false));
  }, []);

  if (carga) return <p>Cargando...</p>;
  if (errores) return <p>{errores}</p>;

  return (
    <section>
      <ItemList productos={productos} />
    </section>
  );
};