import Card from 'react-bootstrap/Card'
import '../styles/Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';
import { Link } from 'react-router-dom';



function Item(props) {


    return (
        <div className="CardCointainer">
                <Link to = {`/product/${props.idProd}`}>
                <Card className="CardItem" 
                    bg='Light'
                    border="secondary">
                <Card.Header className="CardHeader">{props.name}</Card.Header>
                <Card.Img className="imgSmall"  src={props.img} />
                    <div className="textHidden"><FontAwesomeIcon icon={faEye} /></div>
                <Card.Body>
                    <Card.Text>
                    <div className="CardStock"><b>Stock:</b> {props.stock}<br /></div>
                    <div className="CardPrice">Precio: {props.price}$</div>
                    
                    </Card.Text>
                </Card.Body>
                </Card>
                </Link>
        </div>
        );

}



export default Item;