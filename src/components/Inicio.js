import "./Inicio.css";
import { Link } from "react-router-dom";

const Inicio = () => {
    return (
        <>
        <div className="centrado"><button className="redirigir2"><Link className="linke" to={"/"}>Ir a comprar</Link></button></div>
        
        <div className="division">
        <div className="izq">
            <div className="contenedor">
                <div className="subcontenedor">
                    <div className="cuadrado">
                        <img className="img" src="https://helados.xyz/wp-content/uploads/2020/07/cucuruchos.jpg" alt="fotohelado"></img>
                        <img className="img" src="https://www.comunicare.es/wp-content/uploads/2020/10/helados-2.jpg" alt="fotohelado"></img>
                    </div>
                    <div className="cuadrado">
                        <img className="img" src="https://img.interempresas.net/fotos/2674607.jpeg" alt="fotohelado"></img>
                        <img className="img" src="https://i0.wp.com/www.welcometomadrid.net/wp-content/uploads/2018/08/circuito-motos-barcelona-720x300-5.jpg?fit=1024%2C682&ssl=1" alt="fotohelado"></img>
                    </div>                
                </div>
            </div>
        </div>

        <div className="der">
            <h2>Sobre nosotros:</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium odio labore iure vero a magnam, quas quibusdam consequuntur maxime quod voluptates nobis odit aut optio quae nam assumenda.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium odio labore iure vero a magnam, quas quibusdam consequuntur maxime quod voluptates nobis odit aut optio quae nam assumenda.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium odio labore iure vero a magnam, quas quibusdam consequuntur maxime quod voluptates nobis odit aut optio quae nam assumenda.</p>
            <div className="medio"><img className="img2" src="https://munchi.com.co/wp-content/uploads/2018/09/ezgif.com-gif-maker.gif" alt="foto"></img></div>
        </div>

        </div>

        
        </>
  );
}

export default Inicio;