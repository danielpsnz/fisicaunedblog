import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../../App.scss";

const Contact = () => {
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
                <form id="contact-form" method="POST">
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
