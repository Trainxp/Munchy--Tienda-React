import React, { useContext } from "react";
import "./DetailList.css";
import ItemCount from "./ItemCount.js"
import { Link } from "react-router-dom";
import { useState } from "react";
import { cartContext } from "../context/Context";

const DetailList = ({items}) => {
    const [contador, setNuevoValor] = useState(1);
    const {agregarACarrito} = useContext(cartContext);

    const onAdd = (contador) => {
        setNuevoValor (contador);
        agregarACarrito(items, contador)
    };

    const [condicion, setCondicion] = useState(false)
    const cambiarCondicion = () => {
        setCondicion(!condicion);
    }

    const dosEnUno =() => {
        cambiarCondicion();
        onAdd (contador);
    }

  

    return (
       <>
       <div className="productos">
            <div className="Contenedor2" key={items.id}>
                <div><h2>{items.nombre}</h2></div>
                <div className="foto"><img className="productos2" src={items.foto} alt=""></img></div>
                <div><h3>{items.descripcion}</h3></div>
                <div><h2>${items.precio}</h2></div>
                <div><h3>{items.descripcion2}</h3></div>
                <div><ItemCount contador={contador} stock={10} initial={1} setNuevoValor={setNuevoValor}/></div>
                <div><p>(Los gustos se eligen luego de la compra)</p></div>
                <div className="boton"><button className="agregar" onClick={dosEnUno}>Agregar a carrito</button></div>
                {!condicion && <span></span>}                            
                {condicion && <h3>Agregado</h3>}
                <div>
                    <Link to={"/carrito"}>
                    <div className="boton"><button className="agregar2">Ver carrito</button></div>
                    </Link>
                </div>
            </div>
        </div>
       </>
    )
}

export default DetailList;