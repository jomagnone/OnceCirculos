import '../styles/NavBar.css';
import { faUserCircle, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../media/CirculoOnce2.png';

function NavBar() {
    return (
    <nav id ="NavBar">
        <div id="filaNav" class="fila">
            <div className="menuPrincipal p1">
                <div className="columna"><a href="#">Tienda <br /> Online</a></div>
            </div>
            <div className="menuPrincipal p2">
                <div className="columna"><a>Nuestros <br /> Productos</a>
                    <div className="subMenu margen"><a href="#">Sake & Mirin </a></div>
                    <div className="subMenu"><a href="#">Miso</a></div>
                    <div className="subMenu"><a href="#">Salsa de Soja </a></div>
                    <div className="subMenu"><a href="#">Koji & Tempeh </a></div>
                    <div className="subMenu"><a href="#">Nato & Mochiko </a></div>
                    <div className="subMenu"><a href="#">Amasake & Hana </a></div>
                    <div className="subMenu"><a href="#">Maleza de Arroz </a></div>
                    <div className="subMenu"><a href="#">Vinagres </a></div>
                    <div className="subMenu"><a href="#">Umeboshi & Kimchi </a></div>
                    <div className="subMenu"><a href="#">Furikate & Tekka </a></div>

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
                    <div className="subMenu margen"><a href="#">Arroz & Mijo </a></div>
                    <div className="subMenu"><a href="#">Sarraceno & Porotos</a></div>
                    <div className="subMenu"><a href="#">Garbanzos & Lentejas</a></div>
                    <div className="subMenu"><a href="#"> Semillas de Girasol </a></div>
                    <div className="subMenu"><a href="#"> Trigo en pan </a></div>
                    <div className="subMenu"><a href="#"> Avena & harina integral </a></div>
                    <div className="subMenu"><a href="#"> Pasas de Uva - Premium - </a></div>
                    <div className="subMenu"><a href="#"> Sal Marina & Sal Negra </a></div>
                    <div className="subMenu"><a href="#"> Aceites & Aceitunas </a></div>
                    <div className="subMenu"><a href="#"> Mitoku & Yamasa </a></div>
                    <div className="subMenu"><a href="#"> Micelanias </a></div>
 

                    
                
                </div>
            </div>
            <div className="menuPrincipal p5">
                    <div className="iconos"><a href="#"> <FontAwesomeIcon icon={faUserCircle} /></a></div>
                    <div className="iconos"><a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a></div>
                    <div className="iconos"><a href="#"><FontAwesomeIcon icon={faSearch} /></a></div>
                    
                    
            </div>
        </div>
    </nav>
    
    );
  }
  
  export default NavBar;