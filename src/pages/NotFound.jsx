import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container">
        <div className='d-flex justify-content-center mt-3'>
            <img src='src/assets/imgs/error-404.png' alt="error" className='' />
        </div>
        <div className='d-flex justify-content-center mb-3'>
            <Link to='/react-pizzeria/'>
                <button className='btn btn-success'>Volver al Home</button>
            </Link>
        </div>
    </div>
  )
}

export default NotFound