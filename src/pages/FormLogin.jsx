import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext';

const FormLogin = () => {
    const { login, email, password, setEmail, setPassword, errorCampos, errorPassword} = useContext(UserContext);

    return (
        <>
            <form className="formLogin" onSubmit={login}>
                <h1>Login</h1>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        id="inputEmail"
                        onChange={(e)=>setEmail(e.target.value)} 
                        value = {email}
                        aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input 
                        type="password" 
                        name="password" 
                        className="form-control" 
                        onChange={(e)=>setPassword(e.target.value)}
                        value = {password}
                        id="inputPassword"/>
                </div>
                {errorPassword ? <p className="text-danger mt-2 text-start">Error: La contraseña debe tener al menos 6 caracteres</p> : 
                null}
                <button type="submit" className="btn btn-primary">Login</button>
                {errorCampos ? <p className="text-danger mt-2 text-center">Error: Todos los campos deben ser obligatorios</p> : null }
                
            </form>
        </>
    )
}

export default FormLogin