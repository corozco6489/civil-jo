import React from "react";
import "./about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        Sobre <span>mi</span>
      </h1>

      <div className="row-1">
        <div className="image">
          <img src="assets/images/zyro-image.png" alt="" />
        </div>
        <div className="content">
          <h3>Mi nombre es Javier Orozco y soy Ingeniero Civil</h3>
          <div className="box-container">
            <div className="box">
              <p>
                <span>Nombre : </span>Javier Orozco
              </p>
              <p>
                <span>Profesión : </span>Ingeniero Civil
              </p>
              <p>
                <span>Idioma : </span>Español , Ingles
              </p>
            </div>
            <div className="box">
              <p>
                <span>Experiencia : </span>>> +2 años
              </p>
              <p>
                <span>Email : </span>tungurahua25@gmail.com
              </p>
              <p>
                <span>Ubicación : </span>Ambato - Ecuador
              </p>
            </div>
          </div>
          <a
            href="/docs/OROZCO LUIS JAVIER.pdf"
            className="btn"
            download="javierorozco"
          >
            Descargar CV
          </a>
        </div>
      </div>

      <h1 className="heading">
        <span>Mis </span>Habilidades
      </h1>

      <div className="row-2">
        <div className="skills">
          <div className="progress">
            <h3>
              Autocad <span> 95% </span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              Revit <span> 80% </span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              ETABS <span> 75% </span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              Excel <span> 85% </span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
        </div>

        <div className="box-container">
        <div className="box">
            <h3>>> 2+</h3>
            <p>años de experiencia</p>
          </div>
          <div className="box">
            <h3>>> 10+</h3>
            <p>clientes felices</p>
          </div>
          <div className="box">
            <h3>>> 5+</h3>
            <p>projects completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
