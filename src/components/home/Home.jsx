import React from 'react'
import "./home.css"

export default function Home() {
  return (
      <section className="home" id="home">
          <div className="content">
            <h3><span>Javier Orozco</span></h3>
            <p className="info">Ingeniero Civil</p>
            <p className="text">
            Soy Profesional Con experiencia En El Sector De La Construcción Y
          Mantenimiento De Edificaciones, Diseño Geométrico De Vías, Elaboración
          De Presupuestos, Control Y Fiscalización De Obras.
            </p>
            <a href="#about" className="btn">Sobre mi</a>
          </div>

          <div className="image">
              <img src="assets/images/crane.png" alt="" />
          </div>

      </section>
  )
}
