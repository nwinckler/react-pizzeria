import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
    
    const [usuario, setUsuario] = useState([])
    
    useEffect(() => {
        const getRandomUser = async () => {
          try {
            const url = "https://randomuser.me/api/"
            const respuesta = await fetch(url);
            const data = await respuesta.json();
            setUsuario(data);
          } catch (error) {
            console.error('Error al cargar la API:', error);
          }
        };
    
        getRandomUser();
      }, []);

    return (
        <>
            <h2 className='text-center mt-3'>Perfil</h2>
            <div className="d-flex flex-column align-items-center text-center p-3 pb-5">
                <img className="rounded-circle mt-5" width="150px" src={usuario.results ? usuario.results[0].picture.large : null} />
                <span className="font-weight-bold mt-2">{usuario.results ? usuario.results[0].name.first : null} {usuario.results ? usuario.results[0].name.last : null}</span>
                <span className="text-black-50">{usuario.results ? usuario.results[0].email : null}</span>
            </div>
            <div className='d-flex flex-column align-items-center text-center mb-5'>
                <Link to='/react-pizzeria/'>
                    <button className='btn btn-danger mb-2'>Cerrar Sesión</button>
                </Link>
            </div>
        </>
    )
}

export default Profile