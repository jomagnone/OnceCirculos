import * as React from 'react';
import { useContext } from 'react';
import '../styles/Cart.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';
import { CartContext } from '../context/CartContext';
import { LoginContext } from '../context/LoginContext';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SendIcon from '@mui/icons-material/Send';
import {firestoreUpdateStock, firestoreInsertOrder} from '../utils/firestoreFetch'
import { serverTimestamp } from "firebase/firestore";
import ReactTooltip from 'react-tooltip';



const Cart = () => {
    const cartContext = useContext(CartContext);
    const loginContext= useContext(LoginContext);
    var order = {}

    const createOrder = () => {

        // datos de los items
        const itemsForDB = cartContext.cartList.map(item => ({
          id: item.id,
          title: item.name,
          price: item.cost,
            qty: item.qty
        }));

        
        // los resto del stock.
        cartContext.cartList.forEach(async (item) => {
            firestoreUpdateStock(item);
        });
    
        // datos del comprador 
    
        const buyerForDB = {
                name: loginContext.login.displayName,
                email: loginContext.login.email,
                phone: loginContext.login.phoneNumber
              }
        
        // armo orden
        order = {
          buyer: buyerForDB,
          total: cartContext.totalPrice(),
          items: itemsForDB,
          date: serverTimestamp()
        };
      
        

        
        firestoreInsertOrder(order)
            .then(result => alert('Operacion Realizada con exiton\n\nNombre: '+order.buyer.name+'\nMail: '+order.buyer.email+'\nMonto total: '+order.total+'$\nOrder ID: ' + result.id +'\n\nEn las proximas 24 hs nos pondremos en contacto' ))
            .catch(err => console.log(err));
  
        // vacio carrito
        cartContext.removeList();
      
      }

    return (

        <div className="cartContainer">
             
            <div className="cartHeader">
                
                <div className="cartTitle">Listado de productos</div>
                {
                    cartContext.getCart().length > 0 ? 
                    <Button onClick={cartContext.removeList} variant="contained" size="small"  color="error" startIcon={<FontAwesomeIcon icon={faTrash} />} endIcon={<ShoppingCartIcon />}>Vaciar Carro</Button>
                    : <Button onClick={cartContext.removeList} variant="contained" size="small" disabled color="error" startIcon={<FontAwesomeIcon icon={faTrash} />} endIcon={<ShoppingCartIcon />}>Vaciar Carro</Button>
            
                }
                
            </div>
            <br />
            <Divider variant="fullWidth"  />
            <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
               
                {
                    cartContext.getCart().length > 0 
                    ? 
                    (cartContext.getCart().map((item,id) => 
                        <div key={id}>
                        <ListItem key= {id} style={{display:'flex', justifyContent:'space-around'}}  >
                        <ListItemAvatar>
                            <img className="cartImage" src={item.img} alt = "" />
                        </ListItemAvatar>
                        
                            <div className="cartContainerProducts">
                                <div className="cartProduct">{item.name} </div>
                                <div className="cartQty"> <br />Cantidad: {item.qty} </div>
                                <div className="cartQty"> Precio: {item.cost} $<br /><br /></div>
                                <Button onClick={() => cartContext.deleteItem(item.id)} color="error" variant="outlined" endIcon={<FontAwesomeIcon icon={faTrash} />}>  Delete</Button>
                            </div> 
                        </ListItem>

                        <Divider variant="inset" component="li" />
                        </div>
                        )   
                    )
                        
                    
                    : (< >
                        <div className="cartEmpy">
                            <br />
                            <div>Todavia no tenes productos cargados!</div>
                            <br />
                            <div><Link to="/category/0"> <Button endIcon={< ShoppingCartIcon/>} variant="contained" color="success"  >Seguir Comprando </Button></Link></div>
                        </div>
                        </>
                     )
  
                }
                {
                cartContext.getCart().length > 0 
                ? <div className="fila">
                        <div className="totalPrice">Precio Total : {cartContext.totalPrice()} $</div> 
                       
                        {!Object.keys(loginContext.login).length
                        ?<div className="totalPrice" data-tip="Ingrese para comprar"> <Button disabled onClick={createOrder} variant="contained" size="medium"  color="success" startIcon={<SendIcon  />}>Finalizar Compra</Button>  <ReactTooltip place="bottom" type="light" effect="solid"/></div>
                        :<div className="totalPrice" > <Button onClick={createOrder} variant="contained" size="medium"  color="success" startIcon={<SendIcon  />}>Finalizar Compra.</Button> </div>
                        }
                        
                   </div>
                : <></>
                }
                 

                    </List>
             </div>
            );
    }

export default  Cart;
    