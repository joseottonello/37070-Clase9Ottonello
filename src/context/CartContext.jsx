import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const addToCart = (props, cantidad) => {
        if (isInCart(props.id)) {
            console.log("se van a sumar");
        } else {
            setCart([...cart, {...props, cantidad}]);
        }
    }

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}