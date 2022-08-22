import "./ItemListContainer.css"
import { useEffect} from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item.js";
import {Link} from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const ItemListContainer = ({greeting}) => {
      const [items, setItems] = useState([]);
      const {categoria} = useParams();
      useEffect (() => {
      const querydb = getFirestore();
      const queryColletcion = collection (querydb, "items" );
            
            if (categoria) {
                 const filtro = query(queryColletcion, 
                  where("categoria", "==", categoria))
                  getDocs(filtro)
                  .then(res => setItems(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
            } else {
                  getDocs(queryColletcion)
                  .then(res => setItems(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
            }

      },[categoria]);

      return (    
      <div>
            <h2 className="saludo">{greeting}</h2>
            <div className="Contencion">
                  <Link to={"/"}><button className="boton2">TODOS</button></Link>
                  <Link to={"/categoria/obleas"}><button className="boton2">OBLEAS</button></Link>
                  <Link to={"/categoria/vasos"}><button className="boton2">VASOS</button></Link>
            </div>
            <Item items={items}/>
      </div>
    );
  }

export default ItemListContainer;



 // const traerProductos = new Promise ((res,rej) => {
            //       setCargando(true)
            //       setTimeout(() => {
            //             setCargando(false)
            //             res(categoria ? Mock.filter(obj=>obj.categoria === categoria) :Mock)
            //       }, 2000);
            // });       

            // traerProductos.then ((info) => {
            //       setItems(info);})