import React from "react";
import { reactServicios } from "../../data";
import { useState, useEffect } from "react";
import "./service.css"

export default function Service() {
  const [servicio, setServico] = useState([]);
  useEffect(() => {
    setServico(reactServicios);
  }, [true]);
  return (
    <section className="service" id="service">
      <h1 className="heading">
        <span>Mis </span>Servicios
      </h1>

      <div className="box-container">
       {
           servicio.map( d => (
            <div className="box">
            <i className="icons-service">
              <img src={d.img} alt="" />
            </i>
            <h3>{d.title}</h3>
            <p>
              {d.description}
            </p>
          </div>
           ))
       }
      </div>
    </section>
  );
}
