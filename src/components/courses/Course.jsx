import React from "react";
import "./course.css";
import { reactCourse } from "../../data";
import { useEffect , useState } from "react";
export default function Course() {
    const [curso, setCurso] = useState([]);
    useEffect(() => {
       setCurso(reactCourse)
    }, [true])
  return (
    <section className="portfolio" id="portfolio">
      <h1 className="heading">Capacitaciones</h1>
      <div className="box-container">
          {
              curso.map(d=>(
                <div className="box">
                <img src={d.img} alt="taller" />
                <div className="content">
                  <h3>{d.title}</h3>
                </div>
              </div>
              ))
          }
       
        
        
      </div>
    </section>
  );
}
