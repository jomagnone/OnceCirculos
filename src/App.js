import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';
import ListProducts from './pages/ListProducts';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      

      <BrowserRouter>
        <header><NavBar /></header>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/category/:idCategory" element = {<ListProducts />} />
          <Route path = "/product/:idProd" element = {<DetailProduct />} /> 
        </Routes>
        <footer><Footer /></footer>
      </BrowserRouter>

      
    </>
  );
}

export default App;
