import React from 'react'
import { useState } from 'react'
import { formatoValor } from '../helpers/formatoValor'

const Cart = ({ productos }) => {
    const [cart, setCart] = useState([])

    let totalAPagar = cart.reduce((acumulador, producto) => acumulador += (producto.count * producto.price), 0)

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
    }

    return (
        <div>
            <h2 className="text-center my-2">Carrito</h2>
            <div className="d-flex justify-content-center">
                <table className="w-75 align-items-center carrito border">
                    <thead>
                        <tr className="">
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Modificar</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                                <td className="d-flex align-items-center text-capitalize border-top">
                                    <img src={producto.img} className='w-25 px-1' alt="" />
                                    <p>pizza {producto.name}</p>
                                </td>
                                <td className="text-center border-top">${formatoValor(producto.price)}</td>
                                <td className="text-center border-top">{cantidadProducto(producto)}</td>
                                <td className="border-top">
                                    <button className='btn btn-success' onClick={() => agregarProducto(producto)}>+</button>
                                    <button className='btn btn-danger' onClick={() => quitarProducto(producto)}>-</button>
                                </td>
                                <td className="text-center border-top">${formatoValor(producto.price*cantidadProducto(producto))}</td>        
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="d-flex flex-column align-items-center my-2">
                <h3>Total a pagar: ${formatoValor(totalAPagar)}</h3>
                <button className="btn btn-success align-items-center">Pagar</button>
            </div>
        </div>
    )
}

export default Cart