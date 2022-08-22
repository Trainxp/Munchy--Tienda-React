import { Link } from "react-router-dom";

const Gustos = () => {
    return (
          <>
            <div className="centrado"><button className="redirigir2"><Link className="linke" to={"/"}>Ir a comprar</Link></button></div>
            <img alt="fotohelado" src="https://www.heladoslomoro.com.ar/images/sabores.jpg"></img>
          </>
  );
}

export default Gustos;