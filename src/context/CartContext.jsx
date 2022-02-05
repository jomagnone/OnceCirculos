import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        let cartTemp = cartList;

        if (found === undefined) {
           
           cartTemp.push({
                        idItem: item.id,
                        imgItem: item.imageMin,
                        nameItem: item.title,
                        costItem: item.price,
                        qtyItem: qty
                        })
            setCartList(cartTemp);
        } else {

            found.qtyItem += qty;
        }
        console.log(cartList);

    }
    
    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result);
    }


    return (
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;