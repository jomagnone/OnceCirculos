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


const Cart = () => {
    const test = useContext(CartContext);
    
    return (

        <div className="cartContainer">
            {console.log(test)}
            <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
               
                {
                    test.cartList.length > 0 ? 
                    test.cartList.map(item => 
                        <>
                        <ListItem style={{display:'flex', justifyContent:'space-around'}}  >
                        <ListItemAvatar>
                            <img className="cartImage" src={item.imgItem} alt = "" />
                        </ListItemAvatar>
                        
                            <div className="cartContainerProducts">
                                <div className="cartProduct">{item.nameItem} </div>
                                <div className="cartQty"> <br />Cantidad: {item.qtyItem} <br /><br /></div>
                                <Button color="error" variant="contained" endIcon={<FontAwesomeIcon icon={faTrash} />}>  Delete</Button>
                            </div> 
                        </ListItem>

                        <Divider variant="inset" component="li" />

                        </>
                        
                    ): <div>Carrito vacio</div>}

                    </List>
             </div>
            );
    }

export default  Cart;
    