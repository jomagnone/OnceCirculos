import 'styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
      <div className="fila">
        <div className="columna">
          <form action="">
              <div className="footer_formulario">
                  <div className="footer_formulario_columna" > <b>¿Necesitas mas informacion? <br /><br /></b></div>
                  <div className="footer_formulario_columna"><input type="text"  placeholder=" Nombre..." name="nombre" /></div>
                  <div className="footer_formulario_columna"><input type="text" placeholder=" Correo..." name="mail" /></div>
                  <div className="footer_formulario_columna"><input className="footer_formulario_input" type="text" placeholder=" Mensaje..." name="mensaje" /></div>
                  <div className="footer_formulario_columna"><input className="footer_formulario_btb" type="submit" value="ENVIAR" /></div>

              </div>
          
          </form>
      </div>
      <div className="columna">
          Ramirez de Velazco 1087 - Villa Crespo
          <br />
          Ciudad Autonoma de Buenos Aires
          <br />
          <b>Email:</b> passionariaargentina@gmail.com
          <br /> <br />
          <div className="footer_iconos "><a className ="instagram" href="https://www.instagram.com/circulo_once/"><FontAwesomeIcon icon={faInstagram} /></a></div>
          <div className="footer_iconos"><a className ="youtube" href="https://www.youtube.com/channel/UCQlMmnkJaRrQj7KrXC3uUzw"><FontAwesomeIcon icon={faYoutube } /></a></div>
          <div className="footer_iconos"><a className ="whatsapp" href="https://api.whatsapp.com/send/?phone=5211234569568&text&app_absent=0"><FontAwesomeIcon icon={faWhatsappSquare } /></a></div>

      </div>
      <div className="columna footer_mapa">
        <iframe  width="300px" height="200px" frameborder="1" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1642.2054709251727!2d-58.44292296729118!3d-34.593768712876454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f53df155cd%3A0xd78bf7bba3f99e0b!2sJuan%20Ram%C3%ADrez%20de%20Velasco%201087%2C%20C1414%20CABA!5e0!3m2!1ses-419!2sar!4v1642183233751!5m2!1ses-419!2sar"></iframe>
      </div>
    </div>
    );
  }
  
  export default Footer;