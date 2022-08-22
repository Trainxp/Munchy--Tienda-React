import DetailList from "./DetailList.js";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
      const [items, setItems] = useState({});
      const {id} = useParams();


      useEffect(() =>{
        const querydb = getFirestore ();
        const queryDoc = doc(querydb, "items", id );
        getDoc(queryDoc).then(res =>setItems({id:res.id, ...res.data()}) )
        getDoc(queryDoc).then(res =>console.log({id:res.id, ...res.data()}) )
        
      },[id])
    
      return (    
      <div>
            <div className="centrado"><button className="redirigir"><Link className="linke" to={"/"}>Volver Atrás</Link></button></div>
          <DetailList items={items}/>
      </div>
    );
  }

export default ItemDetailContainer;