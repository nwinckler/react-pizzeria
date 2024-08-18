import React, { useState } from 'react'
import { formatoValor } from '../helpers/formatoValor';
import Cart from './Cart';

const Navbar = () => {
     
    const [total, setTotal] = useState(25000);
    const [token, setToken] = useState(true);

    //const total = 25000;
    //const token = true;

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="">Pizzería Mamma Mía!</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><button type="button" className="btn btn-outline-light">🍕Home</button></li>
                            {
                                token ? (
                                    <>
                                    <li className="nav-item"><button type="button" className="btn btn-outline-light">🔐Login</button></li>
                                    <li className="nav-item"><button type="button" className="btn btn-outline-light">🔐Register</button></li>
                                    </>
                                ):(
                                    <>
                                    <li className="nav-item"><button type="button" className="btn btn-outline-light">🔓Profile</button></li>
                                    <li className="nav-item"><button type="button" className="btn btn-outline-light">🔒Logout</button></li>
                                    </>
                                )
                            }
                        </ul>
                        {/* <span className="nav-item"><button type="button" className="btn btn-outline-primary">🛒Total: ${<Cart/>}</button></span> */}
                        <span className="nav-item"><button type="button" className="btn btn-outline-primary">🛒Total: ${formatoValor(total)}</button></span>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;