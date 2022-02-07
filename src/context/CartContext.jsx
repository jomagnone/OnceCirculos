import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.id === item.id);
        let cartTemp = cartList;

        if (found === undefined) {
           cartTemp.push({
                        id: item.id,
                        img: item.imageMin,
                        name: item.title,
                        cost: item.price,
                        qty: qty
                        })
            setCartList(cartTemp);
        } else {

            found.qty += qty;
        }
        console.log(cartList);

    }
    
    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.id !== id);
        setCartList(result);
    }


    return (
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;