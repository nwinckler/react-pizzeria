import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import productos from "./pizzas.js";
import CartProvider from './context/CartContext.jsx';
import UserProvider from './context/UserContext.jsx';
import Navbar from './components/Navbar';
import Header from './components/Header.jsx';
import Footer from './components/Footer'
import Home from './pages/Home';
import FormLogin from './pages/FormLogin';
import FormRegister from './pages/FormRegister';
import Cart from './pages/Cart.jsx';
import Pizza from './pages/Pizza.jsx';
import Profile from './pages/Profile.jsx';
import NotFound from './pages/NotFound.jsx'
import { Navigate, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './context/UserContext.jsx';

function App() {
  const { tokenEstado } = useContext(UserContext);

  return (
    <>
      <CartProvider>
          <Navbar/>        
          <Header/>
          <Routes>
            <Route path="/react-pizzeria/" element={<Home/>}/>
            <Route path="/react-pizzeria/register" element={ tokenEstado ? <Navigate to="/react-pizzeria/"/> :<FormRegister/>}/>
            <Route path="/react-pizzeria/login" element={ tokenEstado ? <Navigate to="/react-pizzeria/"/> : <FormLogin/>}/>
            <Route path="/react-pizzeria/cart" element={<Cart productos={productos}/>}/>
            <Route path="/react-pizzeria/pizza/:id" element={<Pizza/>}/>
            <Route path="/react-pizzeria/profile" element={ tokenEstado ? <Profile/> : <Navigate to="/react-pizzeria/login"/> }/>
            <Route path="/react-pizzeria/404" element={<NotFound/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </CartProvider>
      <Footer/>
    </>
  )
}

export default App
