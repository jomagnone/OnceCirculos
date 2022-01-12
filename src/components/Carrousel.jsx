import '../styles/Carrousel.css';
import Carousel from 'react-bootstrap/Carousel';
import Fondo1 from '../media/fondo1.jpg';
import Fondo2 from '../media/fondo2.jpg';
import Fondo3 from '../media/fondo3.jpg';
import Fondo4 from '../media/fondo4.jpg';
import Fondo5 from '../media/fondo5.jpg';


function Carrousel() {
    return (
    

      <div id = "Carrousel">
    

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Fondo1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>Bebidas</h1>
                <p>Sake, shochu, yuzusake</p>
                <p>Fermentación ecosostenible para un sabor real</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Fondo4}
                alt="Second slide"
              />

              <Carousel.Caption>
              <h1>Alimentación</h1>
                <p>Koji, tempeh, natto, arroz eco, Malesa de Arroz</p>
                <p>Fuente de sabor con estilo propio.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Fondo2}
                alt="Third slide"
              />

              <Carousel.Caption>
              <h1>Condimentos</h1>
                <p>Miso, amazake, salsa de soja</p>
                <p>Tradición japonesa, elaboración propia</p>
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>


      </div>
    

    );
  }
  
  export default Carrousel;