import bienvenidos from "../../assets/Bienvenidos.png"

export const Inicio = () => {
    return(
        <main>
            <img className="bienvenido" src={bienvenidos} alt="Presentación"/>
        </main>
    );
};