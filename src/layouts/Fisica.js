import React from "react";
import { Row, Col } from "react-bootstrap";

import './Home/Home.css';

import B from "../assets/Apuntes/Fisica/B.pdf"

const Física = () => {
    return (
        <div className="matematicas">
            <div className='container banner' id='home'>

                <Row className="aligh-items-center">
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Apuntes del grado en Física{" "}
                            <span role="img">🌍</span>
                        </h1>
                    </Col>
                </Row>

                <p className="home-about-body">
                Aquí encontrarás una amplia colección de apuntes del grado de Física de la UNED. Si estás estudiando esta carrera o simplemente tienes curiosidad por ampliar tus conocimientos en el campo de la física, has llegado al lugar indicado. He recopilado cuidadosamente mis apuntes de cada asignatura que he cursado y los he puesto a tu disposición para que puedas descargarlos de forma gratuita. Estos apuntes son el fruto de mi dedicación y esfuerzo, y espero que te sean de gran utilidad en tu camino hacia el conocimiento. ¡Explora, descarga y disfruta aprendiendo con estos recursos!
                </p>

                <h2>Primer año</h2>
                <div className="year">
                <ul className="main-list">
                    <li className="main-list-item-dis"><a className="disabled">Fundamentos de Física I</a></li>
                    <li className="main-list-item-dis"><a className="disabled">Química</a></li>
                    <li className="main-list-item"><a href={B}>Biología</a></li>
                </ul>
                <ul className="main-list">
                    <li className="main-list-item-dis"><a className="disabled">Fundamentos de Física II</a></li>
                    <li className="main-list-item-dis"><a className="disabled">Técnicas Experimentales I</a></li>
                </ul>
                </div>

                <h2>Segundo año</h2>
                <div className="year">
                <ul className="main-list">
                    <li className="main-list-item-dis"><a className="disabled">Fundamentos de Física III</a></li>
                    <li className="main-list-item-dis"><a className="disabled">Electromagnetismo I</a></li>
                    <li className="main-list-item-dis"><a className="disabled">Mecánica Clásica</a></li>
                </ul>
                <ul className="main-list">
                    <li className="main-list-item-dis"><a className="disabled">Vibraciones y Ondas</a></li>
                    <li className="main-list-item-dis"><a className="disabled">Electromagnetismo II</a></li>
                    <li className="main-list-item-dis"><a className="disabled">Técnicas Experimentales II</a></li>
                    <li className="main-list-item-dis"><a className="disabled">Teoría de Circuitos y Electrónica</a></li>
                </ul>
                </div>

                <h2>Cuarto año</h2>
                <div className="year">
                <ul className="main-list">
                    <li className="main-list-item-dis"><a className="disabled">Meteorología y Climatología</a></li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Física;