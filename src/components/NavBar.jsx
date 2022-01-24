import 'styles/NavBar.css';
import { faUserCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CartWidget from 'components/CartWidget';
import NavBarCategory from 'components/NavBarCategory';
import NavBarCategoryFirst from 'components/NavBarCategoryFirst';

import logo from 'media/CirculoOnce2.png';
import ourCategory from 'data/ourCategory';
import thirdCategory from 'data/thirdCategory';

function NavBar() {
    return (
    
        <div  class="fila">
            <div className="menuPrincipal p1">
                <div className="columna"><a href="#">Tienda <br /> Online</a></div>
            </div>
            <div className="menuPrincipal p2">
                <div className="columna"><a>Nuestros <br /> Productos</a>
                {
                    ourCategory.map((category,index) => (
                        index==0
                            ? <NavBarCategoryFirst link = "primero" category = {category} />
                            : <NavBarCategory link = "#" category = {category} />
                    ))
                }
                </div>
            </div>
            <div className="menuPrincipal p3">
                <div className="columna"><a><img className="logo" src={logo} alt = "" /></a>
                    <div className="subMenu margen"><a href="#">Conocenos </a></div>
                    <div className="subMenu"><a href="#">Calidad de Elaboracion</a></div>
                    <div className="subMenu"><a href="#">Medios </a></div>
                    <div className="subMenu"><a href="#">Eventos </a></div>
                    <div className="subMenu"><a href="#">Recetas </a></div>


                </div>
            </div>
            <div className="menuPrincipal p4">
                <div className="columna"><a>Productos <br /> de Terceros</a>
                {
                    thirdCategory.map((category,index) => (
                        index==0
                            ? <NavBarCategoryFirst link = "primero" category = {category} />
                            : <NavBarCategory link = "#" category = {category} />
                    ))
                }
                </div>
            </div>
            <div className="menuPrincipal p5">
                    <div className="iconos"><a href="#"><FontAwesomeIcon icon={faSearch} /></a></div>
                    <div className="iconos"><a href="#"><FontAwesomeIcon icon={faUserCircle} /></a></div>
                    <div className="iconos"><a href="#"><CartWidget qty = {5} /></a></div>
                    
            </div>
        </div>
    
    
    );
  }
  
  export default NavBar;