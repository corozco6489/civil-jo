import React from "react";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGlobe ,FaHome,FaWindowClose} from "react-icons/fa";
import "./header.css";
import { useState } from "react";

export default function Header() {
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  const [color, setColor] = useState(false);
 

  return (
    <header className={showMobileMenu ? "header active" : "header"} >
      <div
      id="menu-bars"
      className="fas fa-bars"
      onClick={() => setshowMobileMenu(!showMobileMenu)}
    >
      {showMobileMenu ? <FaWindowClose /> : <FaHome />}
    </div>
      <a href="#" className="logo">
        <span>Javier</span> Orozco
      </a>

      <nav className="navbar">
        <a href="#home" onClick={() => setshowMobileMenu(!showMobileMenu)} >Inicio</a>
        <a href="#about" onClick={() => setshowMobileMenu(!showMobileMenu)} >Sobre Mi</a>
        <a href="#service" onClick={() => setshowMobileMenu(!showMobileMenu)}>Servicios</a>
        <a href="#experience" onClick={() => setshowMobileMenu(!showMobileMenu)}>Experiencia</a>
        <a href="#portfolio" onClick={() => setshowMobileMenu(!showMobileMenu)}>Capacitaciones</a>
        <a href="#contact" onClick={() => setshowMobileMenu(!showMobileMenu)}>Contacto</a>
      </nav>

      <div className="follow">
        <a href="https://www.facebook.com/contruccionesorozco" target="_blank" >
          <FaFacebookF />
        </a>
        <a href="https://www.construccionesorozco.tk/" target="_blank">        <FaGlobe />
</a>
        <a
          href="https://www.linkedin.com/in/luis-javier-orozco-analuiza-9148941a0/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        {/* <a href="https://wa.me/5930939979649" target="_blank">
          <FaWhatsapp />
        </a> */}
      </div>
    </header>
  );
}
