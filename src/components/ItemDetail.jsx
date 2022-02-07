import 'styles/DetailProduct.css';
import ItemCount from 'components/ItemCount';
import ImgGallery from 'components/ImgGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import {useEffect, useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaidIcon from '@mui/icons-material/Paid';

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
            <div className="ImgGallery columnGalerry">
                 <ImgGallery  imagesSrc = {data.imagesSrc} />
            </div>  
            <div className="columnGalerry" >
                <div className="title" >{data.title}</div>
                <div className="description" >{data.description}</div>
                <div className="stock" ><b>Stock: </b>{data.stock}</div>
                <div className="price" ><br /> <b> {data.price}$ </b>Precio Unitario. <br /><br /></div>
                {
                    goCart
                    ?  <div>
                        <Link to="/cart"> <Button startIcon={< ShoppingCartIcon />}  variant="contained" >Ir al Carrito </Button></Link> o
                        <Link to="/category/0"> <Button endIcon={<PaidIcon />} variant="contained" color="success" >Seguir Comprando </Button></Link>
                        </div>
                    : <ItemCount stock = {data.stock} initial = {1}  onAdd = {onAdd}  />
                }
                
                <ToastContainer position="bottom-right" />
            
            </div>  
        </div>
    );


}

export default ItemDetail;