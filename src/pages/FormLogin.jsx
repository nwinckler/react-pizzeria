import React from 'react'
import { useState } from 'react'

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorCampos, setErrorCampos] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault();

        //Validación campos obligatorios
        
        if (!email.trim() || !password.trim()) {
            setErrorCampos(true);
            return;
        }

        //Validación largo contraseña

        if(password.length <= 5){
            setErrorPassword(true);
            return;
        }

        setErrorCampos(false);
        setErrorPassword(false);
        setEmail('');
        setPassword('');

        alert("Ingresaste con éxito")
    };

    return (
        <>
            <form className="formLogin" onSubmit={validarDatos}>
                <h1>Login</h1>
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
                {errorPassword ? <p className="text-danger mt-2 text-start">Error: La contraseña debe tener al menos 6 caracteres</p> : 
                null}
                <button type="submit" className="btn btn-primary">Login</button>
                {errorCampos ? <p className="text-danger mt-2 text-center">Error: Todos los campos deben ser obligatorios</p> : null }
                
            </form>
        </>
    )
}

export default FormLogin