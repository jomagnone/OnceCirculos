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
            setCartList([
                ...cartList
            ]);
        }
        localStorage.setItem("carrito", JSON.stringify(cartList));
    }
    
    const removeList = () => {
        setCartList([]);
        localStorage.removeItem('carrito');
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.id !== id);
        setCartList(result);
        localStorage.setItem("carrito", JSON.stringify(cartList));
    }

    const qtyItem = () => {
        let qtys = cartList.map(item => item.qty);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);

    }
    const totalPrice = () => {
        let totalPerItem = cartList.map(item => item.cost*item.qty);
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const getCart = () => {

        (JSON.parse(localStorage.getItem("carrito"))) && !(cartList.length)
        ? setCartList(JSON.parse(localStorage.getItem("carrito")))
        : <></>
        
       return cartList;
        
    }
 

    

    return (
        <CartContext.Provider value={{cartList,getCart,addToCart, removeList, deleteItem, totalPrice,qtyItem }}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;