import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer'
import FormLogin from '../components/FormLogin';
import FormRegister from '../components/FormRegister';
import productos from "./pizzas.js"
import Cart from '../components/Cart.jsx';

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Home productos={productos}/>
      {/* <Cart productos={productos}/> */}
      {/* <FormLogin/>
      <FormRegister/> */}
      <Footer/>
    </>
  )
}

export default App
