import React,{useEffect, useState} from 'react'
import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  const [productos, setProductos] = useState([]);

  const obtenerInformacion = async() =>{
    const url = "http://localhost:5000/api/pizzas"
    const respuesta = await fetch(url)
    const data = await respuesta.json()
    setProductos(data)
  }
  
  useEffect(()=>{
    obtenerInformacion();
  },[])

  return (
    <>
    <main className="container">
      <section className="row">
          {productos.map((producto)=>(
            <article className="col-12 col-sm-12 col-md-6 col-lg-4 my-2" key={producto.id}>
              <CardPizza producto={producto}/>
            </article>
          ))}
      </section>
    </main>
    </>
  )
}

export default Home