import React, { useState, useEffect } from 'react'
import { formatoValor } from '../helpers/formatoValor'

const Pizza = () => {
    const [producto, setProducto] = useState([])

    const obtenerInformacion = async () => {
        const url = "http://localhost:5000/api/pizzas/p001"
        const respuesta = await fetch(url)
        const data = await respuesta.json();
        console.log(data)
        setProducto(data)
    }

    useEffect(() => {
        obtenerInformacion()
    },[])

    return (
        <div className="card m-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={producto.img} className="img-fluid rounded-start" alt={producto.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-capitalize">Pizza {producto.name}</h5>
                        <p className="card-text">{producto.desc}</p>
                    </div>
                    <p className="fw-medium card-body fs-5 text-capitalize">🍕Ingredientes: {producto.ingredients ? producto.ingredients.map(String).join(", ") : null}</p>
                    <p className="fw-medium card-body fs-5 text-center">Precio: ${producto.price ? formatoValor(producto.price) : null}</p>
                    <div className="card-body text-center botones-card">
                        <button type="button" className="btn btn-outline-dark"><a href="#" className="text-reset text-decoration-none">Ver Más 👀</a></button>
                        <button type="button" className="btn btn-outline-dark"><a href="#" className="text-reset text-decoration-none">Añadir 🛒 </a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pizza


// 