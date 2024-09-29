import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    let totalAPagar = cart.reduce((acumulador, producto) => acumulador += (producto.count * producto.price), 0)
    let totalProductos = cart.reduce((acumulador, producto) => acumulador += (producto.count), 0)

    const agregarProducto = (producto) => {
        let coincidencia = cart.findIndex(item => item.id === producto.id)
        let nuevo_producto = { id: producto.id, img: producto.img, name: producto.name, price: producto.price, count: 1 }

        if (coincidencia >= 0) {
            cart[coincidencia].count++
            setCart([...cart])
        } else {
            setCart([...cart, nuevo_producto])
        }
    }

    const quitarProducto = (producto) => {
        let coincidencia = cart.findIndex(item => item.id === producto.id)
        if (coincidencia >= 0) {
            if (cart[coincidencia].count > 1) {
                cart[coincidencia].count--
                setCart([...cart])
            } else {
                cart.splice(coincidencia, 1)
                setCart([...cart])
            }
        }
        else {
            setCart([...cart])
        }
    }

    const cantidadProducto = (producto) => {
        let coincidencia = cart.findIndex(item => item.id === producto.id)
        if(coincidencia >= 0){
            return (cart[coincidencia].count);
        }
        else{
            return(0);
        }
    };

    return(
        <CartContext.Provider value={{cart, setCart, agregarProducto, quitarProducto, cantidadProducto, totalAPagar, totalProductos}}>
        {children}
        </CartContext.Provider>
    )
}



export default CartProvider