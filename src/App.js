import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'
import CartContextProvider from "./context/CartContext";
import LoginContextProvider from "./context/LoginContext";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';
import ListProducts from './pages/ListProducts';
import Cart from './pages/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <LoginContextProvider>
      <CartContextProvider>
      <BrowserRouter>
        <header><NavBar /></header>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/category/:idCategory" element = {<ListProducts />} />
          <Route path = "/product/:idProd" element = {<DetailProduct />} /> 
          <Route path = "/cart" element = {<Cart />} /> 
        </Routes>
        <footer><Footer /></footer>
      </BrowserRouter>
      </CartContextProvider>
      </LoginContextProvider>
      
    </>
  );
}

export default App;
