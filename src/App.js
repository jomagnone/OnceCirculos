import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header><NavBar /></header>
      <Home /> 
      <footer><Footer /></footer>
    </>
  );
}

export default App;
