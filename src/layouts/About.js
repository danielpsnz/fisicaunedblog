import React from "react";
import Tilt from "react-parallax-tilt";

import './Home/Home.scss';
import profile from '../assets/profile.jpg';

const About = () => {
    return (
        <div className="matematicas">
            <div className='container banner' id='home'>
            <div md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Un poco sobre mí {" "}
                <span>👀</span>
              </h1>

              <p className="home-about-body" >
              Me llamo Daniel Pérez y tengo 21 años. Soy estudiante de último año de Economía y Matemáticas 
              en la Universidad de York. Estuve trabajando en el Ministerio de Justicia de Reino Unido como 
              estadístico de prisiones durante un año, en el cual empecé Física por amor al arte. 
              </p>
              <p className="home-about-body" >
              Dado que estudio <span className="purple">Matemáticas </span> en Inglaterra, la mayoría de asignaturas
            me las convalidan, por eso no las estoy cursando y no os puedo ofrecer recursos ni opiniones sobre esas 
            asignaturas, que son bastantes. Por eso he decidido abrir esta sección para dejaros también disponibles 
            mis apuntes de la Universidad de York. Están en inglés pero espero que os sirvan de ayuda. 
              </p>
              <p className="home-about-body" >
              Pd: Si aún no los veis disponibles no es porque os vaya mal el ordenador, es que estoy actualizandolos y poniendolos 
            decentes antes de subirlos, los iré subido poco a poco conforme avancen las semanas. Sed pacientes!
              </p>
            </div>

            <div md={4} className="myAvtar2" >
            <Tilt>
              <img src={profile} className="profile" alt="avatar" />
            </Tilt>
            </div>
        </div>
        </div>
    );
}

export default About;