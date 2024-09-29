import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext';

const FormRegister = () => {
    const { register, email, password, confirmPassword, setEmail, setPassword, setConfirmPassword, errorCampos, errorPassword, errorConfirmPassword} = useContext(UserContext);

    return (
        <>
            <form className="formRegister" onSubmit={register}>
                <h1>Regístrate</h1>
                <div className="mb-3">
                    <label for="inputEmail" className="form-label">Email</label>
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
                    <label for="inputPassword" className="form-label">Contraseña</label>
                    <input 
                        type="password" 
                        name="password" 
                        className="form-control" 
                        onChange={(e)=>setPassword(e.target.value)}
                        value = {password}
                        id="inputPassword"/>
                </div>
                {errorPassword ? <p className="form-text mb-2 text-danger">Error: La contraseña debe tener al menos 6 caracteres</p> : null}
                <div className="mb-3">
                    <label for="inputConfirmPassword" className="form-label">Confirmar Contraseña</label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        className="form-control" 
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        value = {confirmPassword}
                        id="inputConfirmPassword"/>
                </div>
                {errorConfirmPassword ? <p className="form-text text-danger mt-2 text-center">Error: Las contraseñas no son iguales</p> : null}
                <button type="submit" className="btn btn-primary">Registrate</button>
                {errorCampos ? <p className="form-text text-danger mt-2 text-center">Error: Todos los campos deben ser obligatorios</p> : null } 
            </form>
        </>
    )
}

export default FormRegister