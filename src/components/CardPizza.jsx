import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatoValor } from '../helpers/formatoValor'
import { CartContext } from '../context/CartContext'

const CardPizza = ({producto}) => {
    const {cart, agregarProducto} = useContext(CartContext);
    const navigate = useNavigate();
    
    return (
        <>  
        <div className="card w-auto h-100">
            <img src={producto.img} className="card-img-top" alt={producto.name} />
            <div className="card-body">
                <h5 className="card-title fs-4 text-capitalize">pizza {producto.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">
                    <p className="fw-light fs-5">🍕Ingredientes:</p>
                    <ul className="list-unstyled text-capitalize">
                        {producto.ingredients.map(ingrediente =><li key={ingrediente}>{ingrediente}</li>)}
                    </ul>
                </li>
            </ul>
            <p className="fw-medium fs-4 text-center my-2">Precio: ${formatoValor(producto.price)}</p>
            <div className="card-body text-center botones-card">
                <button type="button" className="btn btn-outline-dark" onClick={()=>navigate(`/react-pizzeria/pizza/${producto.id}`)}>Ver Más 👀</button>
                <button type="button" className="btn btn-outline-dark" onClick={() => agregarProducto(producto)}><a href="#" className="text-reset text-decoration-none">Añadir 🛒 </a></button>
            </div>
        </div>
        </>
    )
}

export default CardPizza