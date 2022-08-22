import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Gustos from './components/Gustos';
import Presentaciones from './components/Presentaciones';
import Inicio from './components/Inicio';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from "./components/Carrito";
import ItemListContainer from './components/ItemListContainer';
import Provider from './context/Context';

function App() {
  return (
        <>
        <Provider>
          <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Presentaciones/>}/>
                <Route path='/gustos' element={<Gustos/>}/>
                <Route path='/nosotros' element={<Inicio/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                <Route path='/items/:id' element={<ItemDetailContainer/>}/>
                <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
                <Route path='*' element={<div><h1 className='error'>404 NOT FOUND</h1></div>}/>
              </Routes>
          </BrowserRouter>
          <Footer></Footer>
        </Provider>
        </>
  );
}

export default App;
