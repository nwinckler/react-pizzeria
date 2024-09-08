import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { formatoValor } from '../helpers/formatoValor';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
    const {totalAPagar} = useContext(CartContext);      

    const [token, setToken] = useState(true);

    

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <span className="navbar-brand text-white text-center" href="">Pizzería Mamma Mía!</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/react-pizzeria/'>
                                    <button type="button" className="btn btn-outline-light">
                                        🍕Home
                                    </button>
                                </Link>
                            </li>
                            {
                                token ? (
                                    <>
                                    <li className="nav-item">
                                        <Link to='/react-pizzeria/login'>
                                            <button type="button" className="btn btn-outline-light">
                                                🔐Login
                                            </button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/react-pizzeria/register'>
                                            <button type="button" className="btn btn-outline-light">
                                                🔐Register
                                            </button>
                                        </Link>
                                    </li>
                                    </>
                                ):(
                                    <>
                                    <li className="nav-item">
                                        <Link to='/react-pizzeria/profile'>
                                            <button type="button" className="btn btn-outline-light">
                                                🔓Profile
                                            </button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/react-pizzeria/logout'>
                                            <button type="button" className="btn btn-outline-light">
                                                🔒Logout
                                            </button>
                                        </Link>
                                    </li>
                                    </>
                                )
                            }
                        </ul>
                        <span className="nav-item">
                            <Link to='/react-pizzeria/profile'>
                                <button type="button" className="btn btn-outline-light">
                                    🖐️Perfil
                                </button>
                            </Link>
                        </span>
                        <span className="nav-item">
                            <Link to='/react-pizzeria/cart'>
                                <button type="button" className="btn btn-outline-primary">
                                    🛒Total: ${formatoValor(totalAPagar)}
                                </button>
                            </Link>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;