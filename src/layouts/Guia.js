import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                    <li className="main-list-item"><Link to="/FF1">Fundamentos de Física I</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Química</Link></li>
                    <li className="main-list-item"><Link to="/B">Biología</Link></li>
                    <li className="main-list-item"><Link to={Analisis1}>Análisis matemático I</Link></li>
                    <li className="main-list-item"><Link to={Algebra}>Álgebra</Link></li>
                </ul>
                <ul className="main-list">
                    <li className="main-list-item"><Link to="/FF2">Fundamentos de Física II</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Técnicas Experimentales I</Link></li>
                    <li className="main-list-item"><Link to={Metodos1}>Métodos Matemáticos I</Link></li>
                    <li className="main-list-item"><Link to={Comp1}>Física Computacional I</Link></li>
                    <li className="main-list-item"><Link to={Analisis2}>Análisis Matemático II</Link></li>
                </ul>
                </div>

                <h2>Segundo año</h2>
                <div className="year">
                <ul className="main-list">
                    <li className="main-list-item-dis"><Link className="disabled">Fundamentos de Física III</Link></li>
                    <li className="main-list-item"><Link to="/EL1">Electromagnetismo I</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Mecánica Clásica</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Métodos Matemáticos II</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Física Computacional II</Link></li>
                </ul>
                <ul className="main-list">
                    <li className="main-list-item-dis"><Link className="disabled">Vibraciones y Ondas</Link></li>
                    <li className="main-list-item"><Link to="/EL2">Electromagnetismo II</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Técnicas Experimentales II</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Teoría de Circuitos y Electrónica</Link></li>
                    <li className="main-list-item"><Link to={Metodos3}>Métodos Matemáticos III</Link></li>
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

export default Guia;