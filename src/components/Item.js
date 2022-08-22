import React from "react";
import "./ItemListStyle.css";
import { Link } from "react-router-dom";


const Item = ({items}) => {

    return (
       <>
       <div className="productos">
         {
                items.map((Item) => {
                    return (
                        <div className="Contenedor" key={Item.id}>
                            <div><h2>{Item.nombre}</h2></div>
                            <div><img className="productos2" alt="producto" src={Item.foto}></img></div>
                            <div><h3>{Item.descripcion}</h3></div>
                            <div><h2>${Item.precio}</h2></div>
                            <div className="boton">
                                <Link to={`/items/${Item.id}`}>
                                    <button>VER MÁS</button>
                                </Link>
                            </div>
                        </div>                 
                    )
                }) 
            }
       </div>
       </>
    )
}

export default Item;