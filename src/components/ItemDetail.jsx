import 'styles/DetailProduct.css';
import ItemCount from 'components/ItemCount';
import ImgGallery from 'components/ImgGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import {useEffect, useState,useContext} from 'react';

import { CartContext } from '../context/CartContext';

function ItemDetail ({data})  {

    const [goCart, setgoCart] = useState(false);
    const test = useContext(CartContext);

    useEffect(() => {
        setgoCart(goCart);
    },[goCart])


    const onAdd = (qty) => { 
        toast.info("Agregaste " + (qty) +" "+ (data.title)+ " al carrito!");
        setgoCart(true);
        test.addToCart(data, qty);
    }


    return (
        <div className="fila">
            <div className="ImgGallery columna">
                 <ImgGallery  imagesSrc = {data.imagesSrc} />
            </div>  
            <div className="columna" >
                <div className="title" >{data.title}</div>
                <div className="description" >{data.description}</div>
                <div className="stock" ><b>Stock: </b>{data.stock}</div>
                <div className="price" ><br /> <b> {data.price}$ </b>Precio Unitario. <br /><br /></div>
                {
                    goCart
                    ? <Button href="/cart">Ir al Carrito </Button>
                    : <ItemCount stock = {data.stock} initial = {1}  onAdd = {onAdd}  />
                }
                
                <ToastContainer />
            
            </div>  
        </div>
    );


}

export default ItemDetail;