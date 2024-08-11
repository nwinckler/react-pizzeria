// import './App.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Home from '../components/Home'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import FormLogin from '../components/FormLogin';
import FormRegister from '../components/FormRegister';

function App() {

  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      {/* <FormLogin/> */}
      <FormRegister/>
      <Footer/>
    </>
  )
}

export default App
