import './App.css'

import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {Route, Routes} from "react-router-dom";
import {Inicio} from "./components/Inicio/inicio";
import {Form} from "./components/Form/Form";
import {VistaCarrito} from "./components/Carrito/VistaCarrito";

function App() {

  return (
    <>
      <Header />
      <section className='letras'>
        <Routes>
          <Route path='/' element ={<Inicio/>}/>
          <Route path='/productos' element ={<ItemListContainer/>}/>
          <Route path='/contactos' element ={<Form/>}/>
          <Route path='/carrito' element ={<VistaCarrito/>}/>
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App
