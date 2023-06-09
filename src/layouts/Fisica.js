import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import './Home/Home.scss';

import B from "../assets/Apuntes/Fisica/B.pdf"
import FF1 from "../assets/Apuntes/Fisica/FF1.pdf"

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
                <p className="home-about-body">
                    (*) Estos apuntes están en mantenimiento. Próxima actualización: 12/06/2023
                </p>

                <h2>Primer año</h2>
                <div className="year">
                <ul className="main-list">
                    <li className="main-list-item"><a href={FF1}>Fundamentos de Física I (*)</a></li>
                    <li className="main-list-item-dis"><Link className="disabled">Química</Link></li>
                    <li className="main-list-item"><a href={B}>Biología</a></li>
                </ul>
                <ul className="main-list">
                    <li className="main-list-item-dis"><Link className="disabled">Fundamentos de Física II</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Técnicas Experimentales I</Link></li>
                </ul>
                </div>

                <h2>Segundo año</h2>
                <div className="year">
                <ul className="main-list">
                    <li className="main-list-item-dis"><Link className="disabled">Fundamentos de Física III</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Electromagnetismo I</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Mecánica Clásica</Link></li>
                </ul>
                <ul className="main-list">
                    <li className="main-list-item-dis"><Link className="disabled">Vibraciones y Ondas</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Electromagnetismo II</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Técnicas Experimentales II</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Teoría de Circuitos y Electrónica</Link></li>
                </ul>
                </div>

                <h2>Cuarto año</h2>
                <div className="year">
                <ul className="main-list">
                    <li className="main-list-item-dis"><Link className="disabled">Meteorología y Climatología</Link></li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Física;