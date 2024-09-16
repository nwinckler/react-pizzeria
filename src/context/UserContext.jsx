import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
 
    const [tokenEstado, setTokenEstado] = useState(true)
 
    const logout = ()=>{
        setTokenEstado(false)
    }

    const login = () =>{
        setTokenEstado(true)
    }

    return (
        <UserContext.Provider value={{ tokenEstado, setTokenEstado, logout, login}}>
            {children}
        </UserContext.Provider>
  );
};
export default UserProvider;
