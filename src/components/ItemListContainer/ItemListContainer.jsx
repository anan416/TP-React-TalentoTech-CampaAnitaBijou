import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [errores, setErrores] = useState(null);
  const [carga, setCarga] = useState(true);

  useEffect(() => {
    /*
    fetch("/data/productos.json").then((res) => {
        if (!res.ok) {
          throw new Error("No se pueden cargar los productos");
        }

        return res.json();
      })
      .then((data) => setProductos(data))
      .catch((error) => setErrores(error.message))
      .finally(() => setCarga(false));
    */
    const productosFirestore = collection(db, "Productos")
    getDocs(productosFirestore).then((resp) =>{
      setProductos(resp.docs.map(doc => {
        return{...doc.data(), id: doc.id}
      }))
    })
    .catch((error) => setErrores(error.message))
    .finally(() => setCarga(false));
  }, []);


  if (carga) return <p className="carga">Cargando...</p>;
  if (errores) return <p>{errores}</p>;

  return (
    <section>
      <ItemList productos={productos} />
    </section>
  );
};