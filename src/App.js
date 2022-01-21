import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';
import ListProducts from './pages/ListProducts';

function App() {
  return (
    <>
      <header><NavBar /></header>
      {// <Home /> 
      //<DetailProduct />
      } 
      <ListProducts />

      <footer><Footer /></footer>
    </>
  );
}

export default App;
