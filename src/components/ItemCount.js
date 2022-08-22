import "./ItemCount.css"

const ItemCount = ({contador, setNuevoValor, initial, stock}) => {
    
    const sumar = () => {
       if (contador < stock) {
        setNuevoValor(contador +1)
    } 
    }

    const restar = () => {
        if (contador > initial) {
        setNuevoValor(contador -1)
        }
    }
    
return (
    <div className="Contador">
        <p>{contador}</p>
        <button onClick={(sumar)}>+</button>
        <button onClick={(restar)}>-</button>
    </div>
)
}

export default ItemCount;