import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import './Home/Home.scss';

import LA1 from "../assets/Apuntes/Matematicas/LA1.pdf"
import PM from "../assets/Apuntes/Matematicas/PM.pdf"
import RA1 from "../assets/Apuntes/Matematicas/RA1.pdf"

const Matematicas = () => {
    return (
        <div className="matematicas">
            <div className='container banner' id='home'>

                <Row className="aligh-items-center">
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Apuntes del grado en Matemáticas{" "}
                            <span role="img">🧮</span>
                        </h1>
                    </Col>
                </Row>

                <p className="home-about-body">
                    Aquí encontrarás una amplia variedad de apuntes que cree mientras estudiaba el BSc Mathematics and Economics de la Universidad de York, Reino Unido. 
                    No he tenido la oportunidad de cursar las materias relacionadas con matemáticas en el grado de Física de la UNED, así que podrás descargar los apuntes 
                    en inglés con los que yo aprendí matemáticas. Espero que te sirvan para comprender los conceptos fundamentales y las aplicaciones prácticas de las matemáticas
                    en mundo de la física. 
                </p>
                <p className="home-about-body">
                    Ya sea que estés buscando material de estudio, una guía de referencia o simplemente quieras profundizar tus conocimientos, encontrarás recursos útiles y 
                    claros que te ayudarán a navegar por este fascinante campo interdisciplinario. ¡Explora, aprende y aprovecha al máximo mis apuntes!
                </p>

                <h2>First Year</h2>
                <div className="year">
                <ul className="main-list">
                    <li className="main-list-item"><a href={LA1}>Linear Algebra I</a></li>
                    <li className="main-list-item"><a href={PM}>Introduction to Pure Mathematics</a></li>
                    <li className="main-list-item-dis"><Link className="disabled">Calculus and Differential Equations</Link></li>
                </ul>
                <ul className="main-list">
                    <li className="main-list-item-dis"><Link className="disabled">Introduction to Probability</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Vector Calculus</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Introduction to Applied Mathematics</Link></li>
                    <li className="main-list-item"><a href={RA1}>Real Analysis I</a></li>
                </ul>
                </div>

                <h2>Second Year</h2>
                <div className="year">
                <ul className="main-list">
                    <li className="main-list-item-dis"><Link className="disabled">Group Theory</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Linear Algebra II</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Real Analysis II</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Number Theory</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Statistical Inference & Linear Models</Link></li>
                </ul>
                <ul className="main-list">
                    <li className="main-list-item-dis"><Link className="disabled">Rings and Modules</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Complex Analysis</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Geometry</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Markov Chains</Link></li>
                </ul>
                </div>

                <h2>Third Year</h2>
                <div className="year">
                <ul className="main-list">
                    <li className="main-list-item-dis"><Link className="disabled">Probability and Measure</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Dynamical Systems</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Differential Geometry</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Linear Analysis</Link></li>
                </ul>
                <ul className="main-list">
                    <li className="main-list-item-dis"><Link className="disabled">Stochastic Financial Models</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Analysis of Functions</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Riemann Surfaces</Link></li>
                    <li className="main-list-item-dis"><Link className="disabled">Numerical Analysis</Link></li>
                </ul>
                </div>

            </div>
        </div>
    );
}

export default Matematicas;