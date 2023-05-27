import React from "react";
import { Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

import "../../App.scss";

import Guia from "../../assets/Guias/fisica2_guia.pdf"

const Física = () => {
    return (
        <div className="matematicas">
            <div className='container' id='matematicas'>

                <Row className="aligh-items-center">
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Fundamentos de Física II{" "}
                            <span role="img">💡</span>
                        </h1>
                    </Col>
                </Row>

                <div className="guia">
                <a className="button-guia" href={Guia}>Guía completa</a>
                </div>

                <h2>Resumen y pre-requisitos</h2>
                <p className="home-about-body">
                Seguimos para bingo con la física fundamental. De nuevo, esta es una asignatura introductoria, por lo que no hay muchos pre-requisitos. Es recomendable tener un nivel de preparación y comprensión de matemáticas similar a las de bachillerato científico (si no te acuerdas, repasa), y se dan por conocidos todos los contenidos de la primera parte, Fundamentos de Física I, en la que vimos mecánica, oscilaciones y ondas, y termodinámica. 
                </p>
                <p className="home-about-body">
                Esta asignatura se centra en los conocimientos básicos relacionados con electromagnetismo y óptica. Se espera que se comprendan las teorías físicas más importantes, con una estructura lógica y matemática asentada, y con soporte experimental, lo cual se desarrollará aún más en la asignatura de Técnicas Experimentales. 
                </p>
                <p className="home-about-body">
                Está conformada por tres partes principales: (Parte 1) el campo eléctrico, en el que se estudiaran cosas como el teorema de Gauss, la corriente eléctrica y las leyes de Kirchoff; (Parte 2) el campo magnético y electromagnético, en el que verás que la corriente eléctrica produce un campo magnético, el teorema de Ampère, que un campo magnético produce una fuerza sobre una carga en movimiento, la inducción mutua, etc. (Parte 3) óptica, donde verás la interferencia y la difracción de las ondas. 
                </p>

                <h2>Contenidos</h2>
                <p className="home-about-body">
                Aquí seguimos con el mismo libro de texto, el famoso Tipler, aunque esta vez se centra en la segunda parte que se corresponde a los contenidos de electromagnetismo y óptica. Mi opinión sobre el libro de texto es que es demasiado denso, sólo os lo recomiendo por los ejercicios, de eso hay millones de ejemplos de todo tipo y para practicar para el examen están muy bien, pero para la teoría creo que avanza muy lento y no hay suficiente tiempo para pararse tanto porque es muchísimo contenido para un solo cuatrimestre. Los temas concretos son:
                </p>
                <h4>Parte 1: El campo eléctrico</h4>
                <ol>
                    <li>Campo eléctrico</li>
                    <li>Potencial eléctrico</li>
                    <li>Corriente eléctrica</li>
                </ol>
                <p className="home-about-body">
                Los contenidos de este bloque son una profundización de lo que se estudia en la física de bachillerato. Conocerás qué es la carga eléctrica y su cuantificación en cargas elementales, la ley de Coulomb, el concepto de campo, el potencial eléctrico y la relación entre ambos, la ley de Gauss aplicada a sistemas con simetría sencilla, la ley de Ohm y la ley de Joule para la corriente eléctrica, la diferencia entre materiales dieléctricos y conductores y la relación entre diferencia de potencial e intensidad en un circuito RC. 
                </p>
                <h4>Parte 2: El campo magnético y electromagnético</h4>
                <ol>
                    <li>Fuerzas y campos magnéticos.</li>
                    <li>Inducción electromagnética.</li>
                    <li>Ondas electromagnéticas.</li>
                </ol>
                <p className="home-about-body">
                Aquí se ve la fuerza que ejerce un campo magnético sobre una carga en movimiento, el campo magnético creado por una corriente eléctrica, el teorema de Ampere, las propiedades magnéticas de la materia a partir de su constitución microscópica, la susceptibilidad magnética y sus órdenes de magnitud, la inducción mutua y autoinducción, la ecuación general para un circuito RLC, el concepto de corriente de desplazamiento, las ecuaciones de Maxwell y los distintos tipos de radiación electromagnética. 
                </p>
                <h4>Parte 3: Óptica</h4>
                <ol>
                    <li>Propiedades de la luz.</li>
                    <li>Interferencia y difracción.</li>
                </ol>
                <p className="home-about-body">
                Por último, recordando algunos de los conceptos tratados en Fundamentos de Física I en la parte de oscilaciones y ondas, se estudian los fenómenos luminosos más importantes en la Naturaleza, la naturaleza de la luz como onda electromagnética, las leyes de reflexión y refracción, los diferentes tipos de polarización, las propiedades ópticas de espejos y lentes, y los conceptos de interferencia y difracción de la luz. 
                </p>

            <h2>Sistema de evaluación</h2>
            <p className="home-about-body">
            Lo primero que tengo que comentar de esta asignatura es que en el examen hay formulario. Aseguraros bien en la guía de la asignatura actual de que las condiciones no hayan cambiado, pero, por lo menos en los últimos años, lo han dado. ¿Es esto una ventaja? Pues sí y no. Sí porque puedes dejar atrás algunas fórmulas y centrarte en aprenderte los contenidos y entenderlos, pero hay que tener mucho cuidado con este sistema porque puedes dejarte atrás fórmulas que pensabas que iban a estar en el formulario y en el examen te encuentras con que no aparecen. 
            </p>
            <p className="home-about-body">
            El examen consiste en la misma estructura que en Fundamentos de Física I, tenemos una pregunta corta tipo test que tendrás que explicar y desarrollar para demostrar que sabes por qué es correcta, y tres problemas largos. Los problemas largos computan cada uno tres puntos y suelen ser en su mayoría de la parte de electromagnetismo, aunque de vez en cuando uno de los tres es de la parte de óptica. 
            </p>
            <p className="home-about-body">
            Como siempre tenemos dos PECs. En esta asignatura la primera PEC es un tipo test en los que suelen entrar los primeros cuatro temas, y la segunda PEC es tipo examen, pero sólo entra la parte de electromagnetismo, sin contar óptica. En el caso de hacer el sistema de evaluación continua, cosa que os recomiendo, el examen final pasa a contar un 80% y las PECs contarán un 20%. Esto os lo recomiendo por el simple hecho de que en el examen final puede que de los tres problemas uno de ellos os salga mal o no sepáis hacerlo, en ese caso os pueden salvar las PECs. 
            </p>

            <h2>Experiencia y dificultades</h2>
            <p className="home-about-body">
            Este post lo estoy escribiendo cuando ya he cursado Electromagnetismo I, II y Teoría de Circuitos y Electrónica de segundo curso. Recuerdo que cuando pasé por esta asignatura se me hizo difícil (recordad que yo nunca había hecho física en el pasado y todo era nuevo). Pero ahora viéndolo desde el futuro es un paseo, y no lo digo porque ahora me parezca fácil de repente, sino porque en segundo todo esto lo ves con muchísima más profundidad y la dificultad se multiplica por diez. 
            </p>
            <p className="home-about-body">
            Puede que os sorprenda, pero el tema que se me hizo más cuesta arriba fue el primero y el segundo, el de campo y potencial eléctrico. Me acuerdo de que los ejercicios no me salían por mucho que practicara y que me llevo un tiempo acostumbrarme a los conceptos que se explican. El resto de los temas son, o bien más simples, como es el caso de la parte de circuitos y la de óptica, o bien del mismo estilo y dificultad, como pasa en el caso de campo magnético. Solo os puedo recomendar que no os paréis mucho en intentar entender al completo la teoría porque es demasiada y la vais a entender mejor de manera práctica, haciendo ejercicios una y otra y otra vez. 
            </p>
            <p className="home-about-body">
            En cuanto a la parte de óptica tengo que comentar que casi nunca da tiempo. Pasa un poco como con termodinámica en Fundamentos de Física I, son dos temas en los que vas ya con el tiempo muy justo y a los que normalmente no se les da tanta importancia, aun así, os recomiendo mirarlo e intentar algunos ejercicios antes del examen, ya que los que suelen aparecer son muy parecidos entre sí. Lo bueno es que no son temas complicados, se entienden bastante rápido. 
            </p>

            <ul className="main-list">
            <li className="main-list-item-no">SEMANA 1 (13-19 FEB) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Repaso de calculo integral y geometría vectorial (en caso de que lo necesites).</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer tema 1.</li>
                </ul>  
            </li>

            <li className="main-list-item-no">SEMANA 2 (20-26 FEB) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight />Ejercicios recomendados del tema 1.</li>
                    <li className="main-list-item-no"><ImPointRight />Más ejercicios de campo eléctrico del tipler.</li>
                </ul>    
            </li>

            <li className="main-list-item-no">SEMANA 3 (27-05 MAR) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer tema 2.</li>
                    <li className="main-list-item-no"><ImPointRight /> Ejercicios recomendados del tema 2.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer lo anterior.</li>
                </ul>    
            </li>

            <li className="main-list-item-no">SEMANA 4 (06-12 MAR) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Más ejercicios de potencial eléctrico del tipler.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer tema 3.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 5 (13-19 MAR): SEMANA DE DESCANSO </li>

            <li className="main-list-item-no">SEMANA 6 (20-26 MAR) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Ejercicios recomendados del tema 3.</li>
                    <li className="main-list-item-no"><ImPointRight /> Más ejercicios de corriente eléctrica del tipler.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer todo lo anterior.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 7 (27-02 APR) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer tema 4.</li>
                    <li className="main-list-item-no"><ImPointRight /> Ejercicios recomendados del tema 4.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 8 (03-09 APR) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Más ejercicios de campo magnético del tipler.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer tema 5</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 9 (10-16 APR) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Ejercicios recomendados del tema 5.</li>
                    <li className="main-list-item-no"><ImPointRight /> Más ejercicios de inducción magnética del tipler.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer tema 6.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 10 (17-23 APR): SEMANA DE DESCANSO  </li>

            <li className="main-list-item-no">SEMANA 11 (24-30 APR) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Ejercicios recomendados del tema 6.</li>
                    <li className="main-list-item-no"><ImPointRight /> Más ejercicios de ondas electromagnéticas del tipler.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 12 (01-07 MAY) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Repaso general de electromagnetismo.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer tema 7. </li>
                    <li className="main-list-item-no"><ImPointRight /> Leer tema 8.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 13 (08-14 MAY) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Ejercicios recomendados de óptica.</li>
                    <li className="main-list-item-no"><ImPointRight /> Más ejercicios de óptica del tipler.</li>
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