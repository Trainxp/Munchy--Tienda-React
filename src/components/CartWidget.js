import "../components/CartWidget.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../context/Context";

const CartWidget = () => {
    const {carrito} = useContext(cartContext)

    if (carrito.length === 0) {
        return(<div></div>)
    }
    return (
        <>
        <button className="boton-carrito">
             <div className="separa2">
                <Link to={"/carrito"}>
                    <div><img className="Logo" src="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png" alt="LogoCarrito"></img></div>
                </Link>
                <div><p className="contadorCarrito">{carrito.length}</p></div>
            </div>
        </button>
        </>
    ) 
}

export default CartWidget;