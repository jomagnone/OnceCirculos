
import React from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'styles/CartWidget.css';
import { CartContext } from 'context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {

        
        const test = useContext(CartContext);



        return (
        <div id ="cart">

                <div className="notify-container">
                    <span className="notify-bubble">{test.qtyItem()}</span>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>

        </div>

        )
};

export default CartWidget;
