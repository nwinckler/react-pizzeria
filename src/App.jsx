import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import productos from "./pizzas.js";
import CartProvider from './context/CartContext.jsx';
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
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <CartProvider>
        <Navbar/>
        <Header/>
        <Routes>
          <Route path="/react-pizzeria/" element={<Home/>}/>
          <Route path="/react-pizzeria/register" element={<FormRegister/>}/>
          <Route path="/react-pizzeria/login" element={<FormLogin/>}/>
          <Route path="/react-pizzeria/cart" element={<Cart productos={productos}/>}/>
          <Route path="/react-pizzeria/pizza/p001" element={<Pizza/>}/>
          <Route path="/react-pizzeria/profile" element={<Profile/>}/>
          <Route path="/react-pizzeria/404" element={<NotFound/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </CartProvider>
      <Footer/>
    </>
  )
}

export default App
