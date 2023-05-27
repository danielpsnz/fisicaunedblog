import React from "react";
import { Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

import "../../App.scss";

const Física = () => {
    return (
        <div className="matematicas">
            <div className='container' id='matematicas'>

                <Row className="aligh-items-center">
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Meteorología y Climatología{" "}
                            <span role="img">⛅️</span>
                        </h1>
                    </Col>
                </Row>

                <h2>Resumen y pre-requisitos</h2>
                <p className="home-about-body">
                
                </p>
                <p className="home-about-body">
                
                </p>

                <h2>Contenidos</h2>
                <p className="home-about-body">
                
                </p>
                <p className="home-about-body">
                
                </p>
                <p className="home-about-body">
                
                </p>

            <h2>Sistema de evaluación</h2>
            <p className="home-about-body">
            
            </p>
            <p className="home-about-body">
            
            </p>

            <h2>Experiencia y dificultades</h2>
            <p className="home-about-body">
            
            </p>
            <p className="home-about-body">
            
            </p>
            <p className="home-about-body">
            
            </p>

            <ul className="main-list">
            <li className="main-list-item-no">SEMANA 1 (19-25 SEPT) 
                <ul><li className="main-list-item-no"><ImPointRight /> Hacer resumen del tema 1.</li></ul>  
            </li>

            <li className="main-list-item-no">SEMANA 2 (26-02 OCT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer resumen del tema 2 hasta hidratos de carbono.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer tema 1.</li>
                </ul>    
            </li>

            <li className="main-list-item-no">SEMANA 3 (03-09 OCT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Terminar el resumen del tema 2.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer resumen tema 3 hasta membrana plasmática.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer lo anterior.</li>
                </ul>    
            </li>

            <li className="main-list-item-no">SEMANA 4 (10-16 OCT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Terminar el resumen del tema 3.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer lo anterior.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 5 (17-23 OCT): SEMANA DE DESCANSO </li>

            <li className="main-list-item-no">SEMANA 6 (24-30 OCT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer resumen del tema 4.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 7 (31-06 NOV) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer resumen del tema 5 hasta control del ciclo celular.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer tema 4.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 8 (07-13 NOV) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Terminar el resumen del tema 5.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer resumen tema 6 hasta composición química del DNA.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer desde el tema 4.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 9 (14-20 NOV) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Terminar el resumen del tema 6.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer resumen del tema 7 hasta síntesis del RNA.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer desde el tema 4.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 10 (21-27 NOV): SEMANA DE DESCANSO  </li>

            <li className="main-list-item-no">SEMANA 11 (28-04 DEC) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Terminar el resumen del tema 7.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer resumen del tema 8 hasta estructura de los genes.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 12 (05-11 DEC) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Terminar resumen del tema 8.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer resumen del tema 9 hasta tecnología del DNA recombinante. </li>
                    <li className="main-list-item-no"><ImPointRight /> Leer desde el tema 7.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 13 (12-18 DEC) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Terminar resumen.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer desde el tema 7.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 14 (09-15 ENE) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight />  Repaso de la asignatura.</li>
                    <li className="main-list-item-no"><ImPointRight /> Exámenes de años anteriores.</li>
                </ul>     
            </li>
        </ul>

            </div>
        </div>
    );
}

export default Física;