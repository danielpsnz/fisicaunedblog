import React from "react";
import { Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

import "../../App.css";

import Guia from "../../assets/Guias/fisica1_guia.pdf"

const FF1 = () => {
    return (
        <div className="matematicas">
            <div className='container' id='matematicas'>

                <Row className="aligh-items-center">
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Fundamentos de Física I{" "}
                            <span role="img">⚙️</span>
                        </h1>
                    </Col>
                </Row>

                <div className="guia">
                <a className="button-guia" href={Guia}>Guía completa</a>
                </div>

                <h2>Resumen y pre-requisitos</h2>
                <p className="home-about-body">
                Déjame contarte ahora cómo es la primera asignatura que darás de física en la carrera. Es 
                      una materia típica que se divide en tres partes y en ella tendrás la oportunidad de 
                      explorar todas las ramas de la Física de manera introductoria. Lo mejor de todo es que no 
                      necesitas conocimientos previos de Física, ya que se empieza desde cero. Eso sí, es 
                      importante que tengas una buena base de matemáticas.
                </p>
                <p className="home-about-body">
                Las matemáticas son una parte fundamental en esta carrera. Por eso, te recomendaría que 
                      tengas bien claros algunos conceptos básicos como límites, derivadas, integración, vectores 
                      y trigonometría. Si nunca los has visto antes, puede ser un poco complicado al principio 
                      porque desde el minuto uno se dará por hecho que los dominas. Pero no te preocupes, en el 
                      mismo cuatrimestre tendrás dos asignaturas que te ayudarán a reforzar estos conceptos: 
                      Álgebra y Análisis Matemático I. Aun así, es importante que tengas cierta fluidez en estos 
                      temas antes de empezar el curso. ¡Mucho ánimo!
                </p>

                <h2>Contenidos</h2>
                <p className="home-about-body">
                En esta asignatura se abordan tres bloques: Mecánica newtoniana, oscilaciones y ondas, y 
                    termodinámica. El bloque de mecánica está compuesto por 8 temas que van desde lo más básico de 
                    cinemática hasta sólidos rígidos, fluidos y campo gravitatorio. Si has estudiado física en el 
                    instituto, no creo que te resulte una asignatura muy difícil, ya que son contenidos que ya has 
                    visto antes. Eso sí, las matemáticas serán más avanzadas. En mi caso, como no he visto física 
                    desde 3 de la ESO, el tema que más me ha costado del bloque de mecánica ha sido la rotación de 
                    un cuerpo rígido. 
                </p>
                <p className="home-about-body">
                El siguiente bloque de la asignatura es sobre oscilaciones y ondas, y se compone de dos temas. 
                    Si has entendido bien lo anterior, te resultará bastante sencillo y rápido de comprender. Primero 
                    se ve el movimiento armónico simple y todo lo relacionado con él, y luego se aborda el tema de las 
                    ondas. Los ejercicios son bastante accesibles y se pueden resolver rápidamente. Si ya has visto este 
                    tema antes, con un repaso debería ser suficiente.
                </p>
                <p className="home-about-body">
                El tercer bloque de la asignatura es sobre termodinámica y aunque no diría que es fácil o difícil, 
                    lo cierto es que es muy extenso. Se compone de muchos conceptos nuevos y si estás en este punto de 
                    la asignatura, probablemente sea finales de diciembre y lo que menos te apetezca sea ponerte a estudiar 
                    termodinámica. Pero no te preocupes, lo más importante de cara al examen es el bloque de mecánica, 
                    que es con mucha diferencia el más relevante. Sin embargo, eso no quiere decir que no sea importante 
                    dedicar tiempo a este bloque. En general, he encontrado el tema bastante interesante y los ejercicios que 
                    ponen en los exámenes suelen ser muy parecidos y del mismo estilo. ¡Animo con la asignatura!
                </p>
                <p className="home-about-body">
                En mi opinión, esta asignatura es bastante larga, pero claro, yo no había visto física antes así que 
                    todo era nuevo para mí y he tenido que ir más despacio de lo normal. Mi recomendación para ti es que leas 
                    la teoría lo más rápido que puedas y te dediques a hacer muchos ejercicios. De esta forma, podrás comprobar 
                    si realmente has entendido los conceptos o no. ¡Ánimo! Con práctica y esfuerzo, seguro que lo consigues.
                </p>

            <h2>Sistema de evaluación</h2>
            <p className="home-about-body">
            El examen es una combinación de una pregunta tipo test y preguntas abiertas. La parte de tipo test es bastante 
                    rápida, pero asegúrate de tener clara la teoría para no cometer errores tontos. Es importante tener en cuenta que 
                    debes justificar tu respuesta para que te den el punto. El resto del examen consta de tres preguntas abiertas, cada 
                    una de tres puntos. Mi experiencia personal es que la mayoría de las preguntas se centran en el bloque de mecánica, 
                    seguido de oscilaciones y, en último lugar, termodinámica. Las preguntas pueden ser largas y necesitarás haber 
                    practicado mucho para poder responderlas correctamente, así que no basta con leer la teoría.
            </p>
            <p className="home-about-body">
            Te cuento sobre las PECs de la asignatura. Son dos: la primera es tipo test y es para que practiques los conceptos 
                    que se ven en cada tema. Es más fácil que la segunda PEC, que es tipo examen y entra todo el bloque de mecánica. 
                    Para que la nota media de las PECs cuente en la nota final del curso, debes haber aprobado el examen de enero con un 5. 
                    Así que es importante que te prepares bien para las PECs y el examen, pero no te preocupes, ¡tú puedes hacerlo!
            </p>

            <h2>Experiencia y dificultades</h2>
            <p className="home-about-body">
            En resumen, esta asignatura requiere tiempo y esfuerzo, pero si has estudiado física antes, no deberías tener problemas. 
                    Personalmente, comencé a estudiarla en septiembre y me organicé por semanas, como suelo hacer en mis otras asignaturas. A 
                    continuación, os daré un ejemplo de cómo organicé mi estudio para esta asignatura en particular.
            </p>
            <p className="home-about-body">
            Para organizarme en esta asignatura, he dividido los bloques en semanas, dedicando una semana a cada uno de ellos. En cada semana, 
                    me he centrado en leer la teoría, hacer algunos ejercicios y ver vídeos explicativos en internet. He intentado no saltarme ningún tema y 
                    si me ha quedado alguna duda, he buscado explicaciones adicionales en libros o en foros de la UNED.
            </p>
            <p className="home-about-body">
            También he intentado no dejar todo para el final y he ido haciendo las PECs según las iban pidiendo. Es cierto que la asignatura es larga 
                    y que hay muchos ejercicios para hacer, pero he intentado no agobiarme y hacerlo todo con tiempo. Además, he utilizado la moodle para hacer 
                    preguntas en el foro y para ver los ejercicios resueltos, lo cual me ha ayudado bastante.
            </p>
            <p className="home-about-body">
            En general, mi consejo es que os organicéis con tiempo y que no dejéis todo para el final, especialmente si no habéis visto física en mucho 
                    tiempo. Si vais avanzando poco a poco y os centráis en comprender los conceptos teóricos, la asignatura no debería ser demasiado difícil.
            </p>

            <ul className="main-list">
            <li className="main-list-item-no">SEMANA 1 (19-25 SEPT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Repaso de cinemática en dos y tres dimensiones.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer resumen del tema 2.</li>
                    <li className="main-list-item-no"><ImPointRight /> Ejercicios del tema 2.</li>
                </ul>  
            </li>

            <li className="main-list-item-no">SEMANA 2 (26-02 OCT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer resumen del tema 3.</li>
                    <li className="main-list-item-no"><ImPointRight /> Seguir con los ejercicios del tema 2.</li>
                </ul>    
            </li>

            <li className="main-list-item-no">SEMANA 3 (03-09 OCT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer resumen del tema 4.</li>
                    <li className="main-list-item-no"><ImPointRight /> Ejercicios del tema 3.</li>
                    <li className="main-list-item-no"><ImPointRight /> Repaso del tema 2.</li>
                </ul>    
            </li>

            <li className="main-list-item-no">SEMANA 4 (10-16 OCT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer resumen del tema 5.</li>
                    <li className="main-list-item-no"><ImPointRight /> Ejercicios del tema 4 y del tema 5.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 5 (17-23 OCT): SEMANA DE DESCANSO </li>

            <li className="main-list-item-no">SEMANA 6 (24-30 OCT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Repaso del tema 4 y del tema 5.</li>
                    <li className="main-list-item-no"><ImPointRight /> Ejercicios tema 4 y tema 5.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer resumen del tema 6.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 7 (31-06 NOV) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Ejercicios del tema 6.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer resumen del tema 7 y 8.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 8 (07-13 NOV) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Repaso general de mecánica.</li>
                    <li className="main-list-item-no"><ImPointRight /> Ejercicios de todos los temas de mecánica.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 9 (14-20 NOV) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer resumen tema 9 y 10.</li>
                    <li className="main-list-item-no"><ImPointRight /> Ejercicios del tema 9 y 10.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 10 (21-27 NOV): SEMANA DE DESCANSO  </li>

            <li className="main-list-item-no">SEMANA 11 (28-04 DEC) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Repaso del tema 9 y 10.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios de esos temas. Leer el resto.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 12 (05-11 DEC) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer resumen tema 11.</li>
                    <li className="main-list-item-no"><ImPointRight /> Ejercicios del tema 11. </li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 13 (12-18 DEC) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Ejercicios del tema 11.</li>
                    <li className="main-list-item-no"><ImPointRight /> Repaso de mecánica.</li>
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

export default FF1;