import 'styles/NavBar.css';
import { faUserCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartWidget from 'components/CartWidget';
import NavBarCategory from 'components/NavBarCategory';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import logo from 'media/CirculoOnce2.png';
import arrayCategory from 'data/category';


const handlerTooltip = () => {

    console.log("prueba");

}

function NavBar() {



    return (
    
        <div  class="fila">
            <div className="menuPrincipal p1">
            <Link to="/category/0"><div className="columna">Tienda <br /> Online</div></Link>
            </div>
            <div className="menuPrincipal p2">
                <div className="columna"><a>Nuestros <br /> Productos</a>
                {
                    arrayCategory.filter(category => (category.owner === "propio")).map((category,index) => (<NavBarCategory margen={!index} link={`./category/${category.id}`} category={category.description} key={index} /> ))
                }
                </div>
            </div>
            <div className="menuPrincipal p3">
                <div className="columna"><a href="/"><img className="logo" src={logo} alt = "" /></a>
                    {/*
                    <div className="subMenu margen"><Link to="#">Conocenos </Link></div>
                    <div className="subMenu"><Link to="#">Calidad de Elaboracion</Link></div>
                    <div className="subMenu"><Link to="#">Medios </Link></div>
                    <div className="subMenu"><Link to="#">Eventos </Link></div>
                    <div className="subMenu"><Link to="#">Recetas </Link></div>
                    */}

                </div>
            </div>
            <div className="menuPrincipal p4">
                <div className="columna"><a>Productos <br />de Terceros</a>
                {
                    arrayCategory.filter(category => (category.owner === "terceros")).map((category,index) => (<NavBarCategory margen={!index} link={`./category/${category.id}`} category={category.description} key={index} /> ))
                }
                </div>
            </div>
            <div className="menuPrincipal p5">
                    
                    <div className="iconos">
                    <Tooltip> 
                        <a onClick={handlerTooltip} ><FontAwesomeIcon icon={faSearch} /></a>
                    </Tooltip>
                    </div>
                    
                    <div className="iconos"><a href="#"><FontAwesomeIcon icon={faUserCircle} /></a></div>
                    <div className="iconos"><a href="#"><CartWidget qty = {5} /></a></div>
                    
            </div>
        </div>
    
    
    );
  }
  
  export default NavBar;