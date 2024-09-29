import React, {useEffect, useContext} from 'react'
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom'

const Profile = () => {
    const { getUser, user, logout } = useContext(UserContext);

    getUser();

    return (
        <>
            <h2 className='text-center mt-3'>Perfil</h2>
            <div className="d-flex flex-column align-items-center text-center p-3 pb-5">
                <span className="text-black-50">{user ? user.email : null}</span>
            </div>
            <div className='d-flex flex-column align-items-center text-center mb-5'>
                <Link to='/react-pizzeria/'>
                    <button className='btn btn-danger mb-2' onClick={logout}>Cerrar Sesión</button>
                </Link>
            </div>
        </>
    )
}

export default Profile