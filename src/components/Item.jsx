import Card from 'react-bootstrap/Card'
import '../styles/Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCart, faInfoCircle } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';

function Item(props) {
    return (
        <div className="CardCointainer">
                <Card className="CardItem" 
                    bg='Light'
                    border="secondary">
                <Card.Header className="CardHeader">{props.name}</Card.Header>
                <Card.Img className="imgSmall"  src={props.img} />
                    <div className="textHidden"><FontAwesomeIcon icon={faInfoCircle} /></div>
                <Card.Body>
                    <Card.Text>
                    <div className="CardStock"><b>Stock:</b> {props.stock}<br /></div>
                    <div className="CardPrice">Precio: {props.price}$</div>
                    
                    </Card.Text>
                </Card.Body>
                </Card>
                
        </div>
        );

}



export default Item;