import React from "react";
import { FaMailBulk, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { useState } from "react";
import "./contact.css";

export default function Contact() {
    const formRef = useRef();

    const [message, setMessage] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_g7n6n8m",
          "template_9n4oap7",
          formRef.current,
          "user_yqimngPQxBoZsByq1zEN0"
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessage(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  return (
    <section className="contact" id="contact">
      <h1 className="heading">Contacto</h1>
      <div className="icons-container">
        <div className="icons">
          <i>
            <FaMailBulk />
          </i>
          <h3>Email</h3>
          <p>tungurahua25@gmail.com</p>
        </div>
        {/* <div className="icons">
          <i>
            <FaMailBulk />
          </i>
          <h3>Telefóno</h3>
          <p></p>
        </div> */}
        <div className="icons">
          <i>
            <FaLocationArrow />
          </i>
          <h3>Ubicación</h3>
          <p>Ambato - Ecuador</p>
        </div>
      </div>
      <div className="row">
      <form ref={formRef} onSubmit={handleSubmit}>
            <div className="inputBox">
              <input type="text" placeholder="Nombre" name="user_name"  required/>
              <input
                type="number"
                placeholder="Numero"
                name="user_number"
                required
              />
            </div>

            <div className="inputBox">
              <input type="email" placeholder="Email" name="user_email" required />
              <input
                type="text"
                placeholder="Asunto"
                name="user_subject"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Mensaje"
              id=""
              cols="30"
              rows="10"
              required
            ></textarea>

            <input type="submit" value="Send Message" className="btn" />
            <br />
            <p> {message && " Thank You...."}</p>
          </form>

        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1185.9009819858102!2d-78.66751307912757!3d-1.242945115573065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d37f86a2a84545%3A0x85c030df0080d58c!2sParroquia%20Ambatillo!5e0!3m2!1ses!2sec!4v1644623615876!5m2!1ses!2sec"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
