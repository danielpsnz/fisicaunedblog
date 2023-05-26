import React from "react";
import { Row, Col } from "react-bootstrap";

import './Home/Home.css';

import Analisis1 from "../assets/Guias/analisis1_guia.pdf"
import Algebra from "../assets/Guias/algebra_guia.pdf"
import Analisis2 from "../assets/Guias/analisis2_guia.pdf"
import Metodos1 from "../assets/Guias/metodos1_guia.pdf"
import Metodos3 from "../assets/Guias/metodos3_guia.pdf"
import Comp1 from "../assets/Guias/computacional1_guia.pdf"

const Guia = () => {
    return (
        <div className="matematicas">
            <div className='container banner' id='home'>

                <Row className="aligh-items-center">
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            ¿Cómo estudiar Física y no morir en el intento?{" "}
                            <span role="img">🍀</span>
                        </h1>
                    </Col>
                </Row>

                <p className="home-about-body">
                    Este es un espacio dedicado a compartir mi experiencia y conocimientos sobre el estudio de las asignaturas del grado de Física 
                    en la UNED. Aquí encontrarás valiosos consejos, basados en mi propio recorrido académico, que te ayudarán a enfrentar los 
                    desafíos y maximizar tu rendimiento en cada asignatura. Además, te brindaré un completo planning de estudio para optimizar tu tiempo 
                    y asegurarte una preparación efectiva. 
                </p>

                <h2>Primer año</h2>
                <div className="year">
                <ul className="main-list">
                    <li className="main-list-item"><a href="/FF1">Fundamentos de Física I</a></li>
                    <li className="main-list-item-dis"><a className="disabled">Química</a></li>
                    <li className="main-list-item"><a href="/B">Biología</a></li>
                    <li className="main-list-item"><a href={Analisis1}>Análisis matemático I</a></li>
                    <li className="main-list-item"><a href={Algebra}>Álgebra</a></li>
                </ul>
                <ul className="main-list">
                    <li className="main-list-item"><a href="/FF2">Fundamentos de Física II</a></li>
                    <li className="main-list-item-dis"><a className="disabled">Técnicas Experimentales I</a></li>
                    <li className="main-list-item"><a href={Metodos1}>Métodos Matemáticos I</a></li>
                    <li className="main-list-item"><a href={Comp1}>Física Computacional I</a></li>
                    <li className="main-list-item"><a href={Analisis2}>Análisis Matemático II</a></li>
                </ul>
                </div>

                <h2>Segundo año</h2>
                <div className="year">
                <ul className="main-list">
                    <li className="main-list-item-dis"><a className="disabled">Fundamentos de Física III</a></li>
                    <li className="main-list-item"><a href="/EL1">Electromagnetismo I</a></li>
                    <li className="main-list-item-dis"><a className="disabled">Mecánica Clásica</a></li>
                    <li className="main-list-item-dis"><a className="disabled">Métodos Matemáticos II</a></li>
                    <li className="main-list-item-dis"><a className="disabled">Física Computacional II</a></li>
                </ul>
                <ul className="main-list">
                    <li className="main-list-item-dis"><a className="disabled">Vibraciones y Ondas</a></li>
                    <li className="main-list-item"><a href="/EL2">Electromagnetismo II</a></li>
                    <li className="main-list-item-dis"><a className="disabled">Técnicas Experimentales II</a></li>
                    <li className="main-list-item-dis"><a className="disabled">Teoría de Circuitos y Electrónica</a></li>
                    <li className="main-list-item"><a href={Metodos3}>Métodos Matemáticos III</a></li>
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

export default Guia;