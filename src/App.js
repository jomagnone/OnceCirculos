import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import DetailProduct from './pages/DetailProduct';

function App() {
  return (
    <>
      <header><NavBar /></header>
      {// <Home /> 
      } 
      <DetailProduct />
      <footer><Footer /></footer>
    </>
  );
}

export default App;
