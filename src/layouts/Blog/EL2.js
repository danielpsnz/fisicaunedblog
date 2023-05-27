import React from "react";
import { Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

import "../../App.scss";

import Guia from "../../assets/Guias/electro2_guia.pdf"

const Física = () => {
    return (
        <div className="matematicas">
            <div className='container' id='matematicas'>

                <Row className="aligh-items-center">
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Electromagnetismo II{" "}
                            <span role="img">☠️</span>
                        </h1>
                    </Col>
                </Row>

                <div className="guia">
                <a className="button-guia" href={Guia}>Guía completa</a>
                </div>

                <h2>Resumen y pre-requisitos</h2>
                <p className="home-about-body">
                De verdad que electromagnetismo me lleva por el camino de la amargura. Esta asignatura no me ha gustado, aunque tiene algunos temas interesantes, en general me ha resultado bastante aburrida y, sobre todo, complicada. Tanto la primera como la segunda parte de electromagnetismo son asignaturas que necesitan muchas horas de estudio, cosa que, en muchas de las ocasiones, no es posible hacer. 
                </p>
                <p className="home-about-body">
                Como pre-requisitos no diría ninguno más que Electromagnetismo I. 
                </p>

                <h2>Contenidos</h2>
                <p className="home-about-body">
                En esta asignatura verás cosas como: campo magnético en materiales, inducción electromagnética, energía magnética, campo electromagnético, ondas electromagnéticas y propagación libre, propagación guiada, cavidades resonantes y radiación electromagnética. 
                </p>
                <p className="home-about-body">
                Al igual que en la primera parte de electromagnetismo, tenemos un libro de texto del mismo autor que, de nuevo, vuelve a gustarme. En mi opinión explica muy bien la teoría, con muchos pasos, demostraciones y al final de cada tema, una relación de ejercicios para practicar. Al igual que en todos los libros de la UNED, hay que tener muchísimo cuidado con las erratas porque las encuentras casi en cada página, cosa que es incomprensible. Pero bueno, ese es otro tema. 
                </p>
                <p className="home-about-body">
                No hace falta mirar material extra además del libro, excepto para afianzar conocimientos y mirar más ejercicios para practicar, al igual que en Electromagnetismo I. En YouTube hay varios videos explicando algunos conceptos que pueden ser un poco más confusos como la carta de Smith. 
                </p>

            <h2>Sistema de evaluación</h2>
            <p className="home-about-body">
            Como ya es habitual hay dos opciones, el examen final y la evaluación continua. En caso de hacer la evaluación continua tendremos dos PECs que cuentan un 10% cada una de ellas, junto con el examen final que computa un 80%. Las PECs son dos pruebas tipo examen que se hacen online. 
            </p>
            <p className="home-about-body">
            Las PECs no son sencillas, pero se pueden aprobar si vas siguiendo la asignatura más o menos al día. Son ejercicios típicos y muchos de ellos salen de exámenes anteriores, lo que ayuda a que te acostumbres a los ejercicios tipo examen y saber si lo estás haciendo bien o mal. Además, también incluyen preguntas de teoría como en el examen final.
            </p>
            <p className="home-about-body">
            El examen final está compuesto por 4 preguntas cortas y dos problemas largos, como en Electromagnetismo I. Normalmente las preguntas no son complicadas, pero hay que saberse bien el temario. Uno de los problemas suele ser de un nivel medio-alto y el otro más complicado.  Las cuestiones suelen ser o pura teoría, explicar contenidos que hayas estudiado para que vean que has comprendido el temario; o cuestiones para razonar, que en algunos casos conllevan hacer matemáticas simples o pequeños problemas. 
            </p>
            <p className="home-about-body">
            Dado que la teoría cae en el examen hay que llevarla muy bien estudiada porque seguramente esas preguntas te salven de estar en el suspenso. Esto es porque seguramente uno de los dos problemas largos no sepas hacerlo o lo hagas mal, y las cuestiones te salven. 
            </p>

            <h2>Experiencia y dificultades</h2>
            <p className="home-about-body">
            En general, vuelvo a repetir, hay que echar muchas horas estudiando esta asignatura. A diferencia de Electromagnetismo I, aquí no han sido los primeros temas los que me han costado más. No hay ninguno que no me haya parecido exigente o difícil, pero los últimos me han parecido mucho más complicados. 
            </p>

            <ul className="main-list">
            <li className="main-list-item-no">SEMANA 1 (13-19 FEB) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 1.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 1.</li>
                </ul>  
            </li>

            <li className="main-list-item-no">SEMANA 2 (20-26 FEB) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight />Leer teoría del tema 2.</li>
                    <li className="main-list-item-no"><ImPointRight />Hacer más ejercicios del tema 1.</li>
                </ul>    
            </li>

            <li className="main-list-item-no">SEMANA 3 (27-05 MAR) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 2.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 2.</li>
                </ul>    
            </li>

            <li className="main-list-item-no">SEMANA 4 (06-12 MAR) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 3.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 3.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 5 (13-19 MAR): SEMANA DE DESCANSO </li>

            <li className="main-list-item-no">SEMANA 6 (20-26 MAR) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 4.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 3.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer todo lo anterior.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 7 (27-02 APR) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 4.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 5.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 8 (03-09 APR) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 4.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 5.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 9 (10-16 APR) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 5.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 6.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 10 (17-23 APR): SEMANA DE DESCANSO  </li>

            <li className="main-list-item-no">SEMANA 11 (24-30 APR) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 6.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 7.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 12 (01-07 MAY) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 6.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 7. </li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 7.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 13 (08-14 MAY) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 8.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 8.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 8.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 14 (15-21 MAY) 
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