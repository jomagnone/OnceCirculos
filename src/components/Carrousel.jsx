import 'styles/Carrousel.css';
import Carousel from 'react-bootstrap/Carousel';


const data = [
      { title:"Bebidas",
        desc:"Fermentación ecosostenible para un sabor real.",
        img: require('media/fondo1.jpg')
      },
      { title:"Alimentación",
      desc:"Fuente de sabor con estilo propio.",
      img: require('media/fondo2.jpg')
      },
      { title:"Especias",
        desc:"Tradición japonesa, elaboración propia.",
        img: require('media/fondo4.jpg')
      }]

function Carrousel() {
    return (
    

      <div className = "Carrousel">
    
          <Carousel>
            {data.map((item,ix) => 
                      
                <Carousel.Item key={ix}>
                         <img
                           className="d-block w-100"
                           src={item.img}
                           alt=""
                         />
                    <Carousel.Caption>
                      <div className="carrouselText">
                        <h1 className="carrouselTitle" >{item.title}</h1>
                        <hr />
                        <p className="carrouselDesc">{item.desc}</p>
                      </div>
                    </Carousel.Caption>
                </Carousel.Item>
                       
             )


            }
            
            </Carousel>


      </div>
    

    );
  }
  
  export default Carrousel;