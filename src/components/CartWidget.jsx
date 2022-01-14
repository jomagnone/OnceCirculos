
import React, { Fragment } from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'styles/CartWidget.css';


function CartWidget() {
        return (
        <div id ="cart">
                <div class="notify-container">
                    <span class="notify-bubble">7</span>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
        </div>

        )
};

export default CartWidget
