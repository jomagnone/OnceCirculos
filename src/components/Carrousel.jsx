import 'styles/Carrousel.css';
import Carousel from 'react-bootstrap/Carousel';
import Fondo1 from 'media/fondo1.jpg';
import Fondo2 from 'media/fondo2.jpg';
import Fondo3 from 'media/fondo3.jpg';
import Fondo4 from 'media/fondo4.jpg';
import Fondo5 from 'media/fondo5.jpg';


function Carrousel() {
    return (
    

      <div className = "Carrousel">
    
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Fondo1}
                alt=""
              />
              <Carousel.Caption>
              <div className="carrouselText">
                <h1 className="carrouselTitle" >Bebidas</h1>
                <hr />
                <p className="carrouselDesc">Fermentación ecosostenible para un sabor real.</p>
              </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Fondo4}
                alt=""
              />

              <Carousel.Caption>
                <div className="carrouselText">
                <h1 className="carrouselTitle" >Alimentación</h1>
                <hr />
                <p className="carrouselDesc">Fuente de sabor con estilo propio.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Fondo2}
                alt=""
              />

              <Carousel.Caption>
              <div className="carrouselText">
              <h1 className="carrouselTitle" >Especias</h1>
              <hr />
              <p className="carrouselDesc">Tradición japonesa, elaboración propia.</p>
              </div>
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>


      </div>
    

    );
  }
  
  export default Carrousel;