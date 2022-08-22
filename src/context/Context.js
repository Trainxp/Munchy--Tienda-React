import { createContext, useEffect, useState } from "react";

export const cartContext = createContext ()

const Provider = (props) => {
    const [carrito, setCarrito] = useState([]);
    const [suma, setSuma] = useState(0)

    useEffect( () => {
        console.log(carrito);
        totalCarrito();
    }, [carrito])

    const agregarACarrito = (item, contador) => {
         if (estaEnCarrito(item.id)) {
            carrito.map(producto => {
                if(producto.id === item.id){
                    producto.contador= contador
                    setCarrito(carrito)
                    console.log(carrito)
                }})            
        } else {
            setCarrito([...carrito, {...item, contador}]);
        }
    };

    const estaEnCarrito = (id) => {
        return carrito.some (prod => prod.id === id)
    }

    const borrarProducto = (id) => {
        const productosFiltrados = carrito.filter((prod) => prod.id !== id) 
        setCarrito(productosFiltrados)
    }  
    
    const borrarTodo = () => (
        setCarrito([])
    )

    const totalCarrito = () => {
        let suma = 0
        carrito.forEach(item => suma += (item.precio * item.contador))
        setSuma(suma)
    } 

    return (
        <cartContext.Provider value={{carrito, agregarACarrito, borrarTodo, borrarProducto, suma}}>
            {props.children}
        </cartContext.Provider>
    );
};

export default Provider;