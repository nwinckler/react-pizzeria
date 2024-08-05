import React from 'react'
import { formatoValor } from '../helpers/formatoValor'
import { separaArray } from '../helpers/separaArray'

const CardPizza = (props) => {
    const precio = (props.price)
    
    return (
        <>
            <article class="col-12 col-sm-12 col-md-6 col-lg-4 my-2">
                <div class="card w-auto h-100">
                    <img src={props.img} className="card-img-top"  alt={props.name}/>
                    <div className="card-body">
                        <h5 className="card-title fs-4">Pizza {props.name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-center">
                            <p className="fw-light fs-5">Ingredientes:</p> 
                            <p className="">🍕{separaArray(props.ingredients)}</p>
                        </li>
                    </ul>
                    <p className="fw-medium fs-4 text-center my-2">Precio: ${formatoValor(precio)}</p>
                    <div className="card-body text-center botones-card">
                        <button type="button" className="btn btn-outline-dark"><a href="#" className="text-reset text-decoration-none">Ver Más 👀</a></button>
                        <button type="button" className="btn btn-outline-dark"><a href="#" className="text-reset text-decoration-none">Añadir 🛒 </a></button>
                    </div>
                </div>
            </article>
        </>
    )
}

export default CardPizza