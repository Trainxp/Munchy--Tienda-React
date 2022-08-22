import "./Navbar.css"
import CartWidget from "./CartWidget.js";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
        <header className="Navheader">
            <h1>Munchy</h1>
            <nav>
                <ul className="Navul">
                    <li className="icono">
                    <img src="https://www.logocrea.com/wp-content/uploads/2016/07/helado1.png" alt="cono" width={60}/>
                    </li>
                    
                    <li className="Navli">
                        <NavLink style={({isActive}) =>
                        isActive ? { color: "red"} : {color: "rgb(255, 0, 234)"}
                    }
                        className="link" to={'/'}>Presentaciones</NavLink>
                    </li>

                    <li className="Navli">
                        <NavLink style={({isActive}) =>
                        isActive ? { color: "red"} : {color: "rgb(255, 0, 234)"}
                    }
                    className="link" to={'/gustos'}>Gustos</NavLink>
                    </li>

                    <li className="Navli">
                        <NavLink style={({isActive}) =>
                        isActive ? { color: "red"} : {color: "rgb(255, 0, 234)"}
                        }
                        className="link" to={'/nosotros'}>Sobre Nosotros</NavLink>
                    </li>

                    <li className="icono">
                    <img src="https://www.logocrea.com/wp-content/uploads/2016/07/helado1.png" alt="cono" width={60}/>
                    </li>

                    <CartWidget></CartWidget>
                </ul>
            </nav>

        </header>
    </div>
  );
}

export default Navbar;
