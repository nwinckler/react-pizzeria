import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'

const Home = ({productos}) => {
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