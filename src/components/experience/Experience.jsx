import React from "react";
import { useState, useEffect } from "react";
import { reactExperience } from "../../data";
import "./experience.css"
export default function Experience() {
    const [experiencia, setExperiencia] = useState([])
    useEffect(() => {
       setExperiencia(reactExperience)
    }, [true])
  return (
    <section className="experience" id="experience">
      <h1 className="heading">
        <span>Mi </span>
        Experiencia
      </h1>
      <div className="box-container">
       {
           experiencia.map( d =>(
            <div className="box">
            <div className="content">
              <span>{d.year}</span>
              <h3>{d.title}</h3>
              <p>{d.description}</p>
            </div>
          </div>
           ))
       }
      </div>
    </section>
  );
}
