import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [tokenEstado, setTokenEstado] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorCampos, setErrorCampos] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
    const [user, setUser] = useState(null);


    const logout = () => {
        localStorage.clear();
        setEmail("");
        setPassword("");
        setUser(null);
        setTokenEstado(false)
    }

    const login = async (e) => {
        e.preventDefault();

        //Validación que no estén vacíos
        if (!email.trim() || !password.trim()) {
            setErrorCampos(true);
            return;
        }

        //Validación largo contraseña
        if (password.length <= 5) {
            setErrorPassword(true);
            return;
        }

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json()
        localStorage.setItem("token", data.token);
        alert(data?.error || "Ingresaste exitosamente!");
        if (data.token === undefined) {
            return;
        } else {
            setErrorCampos(false);
            setErrorPassword(false);
            setTokenEstado(true);
        }

    }

    // const register = () => {
    //     setTokenEstado(true)
    // }

    const register = async (e) => {
        e.preventDefault();

        //Validación que no estén vacíos
        if (!email.trim() || !password.trim()) {
            setErrorCampos(true);
            return;
        }

        //Validación largo contraseña
        if (password.length <= 5) {
            setErrorPassword(true);
            return;
        }

        //Validación igualdad de contraseñas
        if(password !== confirmPassword){
            setErrorConfirmPassword(true);
            return;
        }

        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json()
        localStorage.setItem("token", data.token);
        alert(data?.error || "El usuario se ha registrado con éxito!");
        if (data.token === undefined) {
            return;
        } else {
            setErrorCampos(false);
            setErrorPassword(false);
            setConfirmPassword('');
            setTokenEstado(true);
        }

    }

    const getUser = async () => {
        useEffect(() => {
            const token = localStorage.getItem("token");
            if (token) {
                fetch("http://localhost:5000/api/auth/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                    .then((response) => response.json())
                    .then((data) => setUser(data));
            }
        }, []);
    }


        return (
            <UserContext.Provider value={
                {
                    tokenEstado,
                    setTokenEstado,
                    logout, login, register,
                    email, password,
                    setEmail, setPassword, errorPassword, errorCampos,
                    confirmPassword, errorConfirmPassword, setConfirmPassword,
                    getUser, user,
                    register
                }}>
                {children}
            </UserContext.Provider>
        );
    };
    export default UserProvider;
