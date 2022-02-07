
import React, { Fragment } from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'styles/CartWidget.css';


function CartWidget({qty}) {
        return (
        <div id ="cart">
                <div className="notify-container">
                    <span className="notify-bubble">{qty}</span>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
        </div>

        )
};

export default CartWidget
