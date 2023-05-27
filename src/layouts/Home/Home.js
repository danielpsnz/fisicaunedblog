import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TrackVisibility from 'react-on-screen';
import Tilt from "react-parallax-tilt";

import headerImg from "../../assets/header-img.svg";
import myImg from "../../assets/my-img.png";
import divider from "../../assets/divider.png";
import 'animate.css';
import "./Home.scss";
import Contact from "../../components/Contact/Contact";

import config from '../../utils/config';
import Type from "./Type";

const Home = () => {
    return (
      <div className='home'>
        <HelmetProvider>
        <Helmet title={config.siteTitle} />

        <div className='container banner' id='home'>
          <Row className="aligh-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Buenos días con alegría!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                ¿Has decidido estudiar
                <strong className="main-name"> Física en la UNED?</strong>
              </h1>

              <div className='typing' style={{ textAlign: "left" }}>
                <p className='heading-paragraph'>En esta página</p>  
                <div className='type'>
                <Type /> 
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} xl={5} className='gif'>
              <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <img className='header-img' src={headerImg} alt="Header Img"/>
              </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </div>


        <section className="banner" id="home">
          <Container fluid className="home-about-section">
          <Row className='row'>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ¿Estás estudiando <span className="purple"> Física en la UNED </span> y 
              no sabes cómo salir de este agujero negro? Bienvenido a la solución:
            </h1>
            <p className="home-about-body">
              Cuando empecé a estudiar en la UNED, si os soy 
              sincero, estaba más perdido que el barco del arroz, no tenía ni idea de cómo 
              guiarme, organizarme, autoexplicarme cosas... 🤷‍♂️
              <br />
              <br />Este proyecto nace de esta sensación que tuve. En esta página web está
              creada totalmente desde cero por mí y puedes encontrar su código en GitHub. Aquí puedes 
              <i>
                <b className="purple"> descargar apuntes, guías, exámenes </b>
              </i>
              y leer la experiencia que tuve estudiando las asignaturas.
              <br />
              <br />
              No te preocupes si no encuentras o no puedes descargar lo que quieres, estoy aún aprendiendo 
              a crear la página y preparando todo el material pero iré actualizando cada semana. &nbsp;
            </p>
          </Col>
        </Row>
        <Row>
          <img src={divider} className="divider" alt="divider" />
        </Row>
          </Container>
          <Contact />
        </section>
        </HelmetProvider>
      </div>
    )
}

export default Home;