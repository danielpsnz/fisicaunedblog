import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../../App.scss";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
    return(
        <section className="contact" id="connect">
            <Container>
            <Row className="align-items-center">
                <Col size={12} md={6}>
                <TrackVisibility>
                    {({ isVisible }) =>
                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                    }
                </TrackVisibility>
                </Col>

                <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contacta conmigo</h2>
                <form id="contact-form" onSubmit={handleSubmit} method="POST">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                        <label htmlFor="exampleInputEmail1">Correo electrónico:</label>
                        <input type="text" id="name" required />
                    </Col>
                    <Col size={12} className="px-1">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" required />
                    </Col>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    );
}

export default Contact;
