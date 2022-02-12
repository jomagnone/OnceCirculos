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
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Cart = () => {
    const test = useContext(CartContext);
    
    return (

        <div className="cartContainer">
            <div className="cartHeader">
                <div className="cartTitle">Listado de productos</div>
                {
                    test.cartList.length > 0 ? 
                    <Button onClick={test.removeList} variant="contained" size="small"  color="error" startIcon={<FontAwesomeIcon icon={faTrash} />} endIcon={<ShoppingCartIcon />}>Vaciar Carro</Button>
                    : <Button onClick={test.removeList} variant="contained" size="small" disabled color="error" startIcon={<FontAwesomeIcon icon={faTrash} />} endIcon={<ShoppingCartIcon />}>Vaciar Carro</Button>
            
                }
                
            </div>
            <br />
            <Divider variant="fullWidth"  />
            <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
               
                {
                    test.cartList.length > 0 
                    ? 
                    (test.cartList.map(item => 
                        <>
                        <ListItem style={{display:'flex', justifyContent:'space-around'}}  >
                        <ListItemAvatar>
                            <img className="cartImage" src={item.img} alt = "" />
                        </ListItemAvatar>
                        
                            <div className="cartContainerProducts">
                                <div className="cartProduct">{item.name} </div>
                                <div className="cartQty"> <br />Cantidad: {item.qty} </div>
                                <div className="cartQty"> Precio: {item.cost} $<br /><br /></div>
                                <Button onClick={() => test.deleteItem(item.id)} color="error" variant="outlined" endIcon={<FontAwesomeIcon icon={faTrash} />}>  Delete</Button>
                            </div> 
                        </ListItem>

                        <Divider variant="inset" component="li" />
                            
                        <div className="totalPrice">Precio Total : {test.totalPrice()} $</div>
                        </>
                    )  
                   
                    )
                        
                    
                    :(<>
                        <div className="cartEmpy">
                            <br />
                            <div>Todavia no tenes productos cargados!</div>
                            <br />
                            <div><Link to="/category/0"> <Button endIcon={< ShoppingCartIcon/>} variant="contained" color="success"  >Seguir Comprando </Button></Link></div>
                        </div>
                        </>
                     )
                }

                    </List>
             </div>
            );
    }

export default  Cart;
    