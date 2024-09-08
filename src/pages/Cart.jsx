import React from 'react'
import { useState, useContext } from 'react'
import { formatoValor } from '../helpers/formatoValor'
import { CartContext } from '../context/CartContext'


const Cart = () => {
    const { cart, agregarProducto, quitarProducto, cantidadProducto, totalAPagar, totalProductos } = useContext(CartContext);

    return (
        <div>

            {totalProductos === 0 ? (<h2 className='text-center m-3'>No tienes productos en tu carrito :(</h2>) : (
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
                            {cart.map((producto) => (
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
                                    <td className="text-center border-top">${formatoValor(producto.price * cantidadProducto(producto))}</td>
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
            )}
        </div>
    )
}

export default Cart