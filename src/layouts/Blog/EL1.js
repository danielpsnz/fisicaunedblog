import React from "react";
import { Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

import "../../App.css";

import Guia from "../../assets/Guias/electro1_guia.pdf"

const Física = () => {
    return (
        <div className="matematicas">
            <div className='container' id='matematicas'>

                <Row className="aligh-items-center">
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Electromagnetismo I{" "}
                            <span role="img">💀</span>
                        </h1>
                    </Col>
                </Row>

                <div className="guia">
                <a className="button-guia" href={Guia}>Guía completa</a>
                </div>

                <h2>Resumen y pre-requisitos</h2>
                <p className="home-about-body">
                Voy a ser breve, la asignatura es un dolor de cabeza constante. Comienza recordando cálculo vectorial y el tema de campo eléctrico que se ha visto en Fundamentos de Física II previamente, pasa a hablar de dieléctricos, que también se ha visto ya, pero esta vez con una mayor profundidad. A partir de aquí empieza lo divertido, ecuación de Laplace y Poisson, corriente eléctrica y campo magnético. 
                </p>
                <p className="home-about-body">
                Lo siento, pero a mi electromagnetismo en general no me hace mucha gracia, me cuesta mucho y tengo que dedicarle mucho tiempo. Supongo que depende de la persona. En mi opinión es una asignatura en la que aprendes mucho y en profundidad, muchas cosas interesantes, pero muy dura. Hay que hacer muchísimos ejercicios y dedicarle muchas muchas muchas horas. 
                </p>
                <p className="home-about-body">
                Mención especial también a las matemáticas. Con esta parte no he tenido problema porque he hecho un grado de matemáticas antes, pero aviso importante de que debes manejar con total fluidez conceptos como integración múltiple, álgebra lineal y ecuaciones diferenciales. Podéis echar un vistazo a mis apuntes en las asignaturas de “Vector Calculus”, “Differential Equations” y “Linear Algebra I”.
                </p>

                <h2>Contenidos</h2>
                <p className="home-about-body">
                La asignatura habla sólo de electrostática. Campo eléctrico, dipolos y multipolos, dieléctricos, sistemas de conductores, energía electrostática, problemas con las ecuaciones de Laplace y Poisson, corriente eléctrica y campo magnético. Personalmente, los primeros temas son los peores, y creo que es porque no estás acostumbrado al tipo de problemas que hay en la asignatura y todo está muy borroso. Conforme vas avanzando vas aclarando conceptos y todo va siendo menos “horroroso”. 
                </p>
                <p className="home-about-body">
                Aunque cálculo vectorial lo habréis dado el anterior año en Análisis Matemático II, aquí se hace un breve repaso de todos los conceptos. Es importante dedicar un par de semanas a entender bien este tema si no lo tienes lo suficientemente claro o no te acuerdas bien. Lo que se ve en este tema son los sistemas de coordenadas, y los teoremas de integración: Stokes, Divergencia y Gauss. 
                </p>
                <p className="home-about-body">
                Aunque puede ser un poco coñazo estudiarse los sistemas de coordenadas, es super necesario saber integrar en todos ellos y saber manejarlos bien. Una vez lo hagas, realmente siempre es lo mismo. Los teoremas de integración, en cambio, se repasan porque son fundamentales en las ecuaciones de Maxwell, que es básicamente de lo que trata la asignatura entera. Es necesario saber convertir las ecuaciones de Maxwell de su forma integral a vectorial y viceversa. 
                </p>

            <h2>Sistema de evaluación</h2>
            <p className="home-about-body">
            El sistema de evaluación de la asignatura, como siempre va con dos PECs y un examen, o con un solo examen final. En el primer caso, el de evaluación continua, se hacen dos PECs cuyo valor en conjunto es el 30% de la asignatura, y el examen final computa el otro 70% de la nota final. Os recomiendo, aunque yo no pude por temas personales, hacer las dos PECs, aunque por lo que dice la gente no son fáciles. 
            </p>
            <p className="home-about-body">
            Las PECs como ya sabréis de otras asignaturas suelen ser de un nivel superior al examen y te obligan a llevar constantemente el temario al día. Pero, si tienes la oportunidad de hacerlo, hazlo. Simplemente porque el trabajo que estás haciendo para poder hacer las PECs luego hace que te sea mucho más fácil enfrentarte al examen final. Las pruebas, como siempre se hacen desde casa. Una de las diferencias que he visto con las PECs de primero es que muchos profesores te obligan a entregarla en LaTeX. Te recomiendo la guía de OverLeaf para ponerte al día con ello. 
            </p>
            <p className="home-about-body">
            El examen final suele incluir problemas muy parecidos a los que aparecen en el libro, o incluso iguales. Pero no suele ser uno de los propuestos en la guía, de ahí mi recomendación de que hagas todos los que buenamente puedas. 
            </p>
            <p className="home-about-body">
            Finalmente, os tengo que decir que esta asignatura es complicada. Mucho ánimo si la tienes, porque madre mía. Yo he notado bastante la diferencia entre el nivel de exigencia de primero y el de segundo. A cambio, aprendes muchísimo y coges un muy buen nivel de electromagnetismo. ¡No te rindas!
            </p>

            <h2>Experiencia y dificultades</h2>
            <p className="home-about-body">
            Hablemos de cómo estudiar esta asignatura. Es muy importante no venirte abajo e intentar llevarla al día. Si no te salen los ejercicios, sigue practicando. También debes llevar la teoría y demostraciones lo mejor posible, intenta entenderlo todo por encima al menos. Aun así, lo más importante son los ejercicios. 
            </p>
            <p className="home-about-body">
            En el libro de texto hay una relación de ejercicios en cada tema, no vienen las soluciones, pero se puede descargar el solucionario en Google. La guía de estudio te indica que ejercicios son los más esenciales, aunque, sinceramente, es mejor que hagáis todos los que podáis. Y muy importante, no mires la solución hasta que esté hecho, aunque este mal. Tienes que entender todo lo que estás haciendo, porque las cosas son así y no aprenderlas de memoria, porque si no en el examen estarás perdido. 
            </p>
            <p className="home-about-body">
            El libro de electromagnetismo de la UNED a mí me gusta mucho porque explica muy bien la teoría, aunque esto es una mera opinión personal. Su mayor problema, como en todos los libros de la UNED es que tienen muchísimas erratas y hay que tener mucho cuidado con ellas, cosa que NO ENTIENDO, ¿no pueden corregirlas? Aun así, mi recomendación es que os hagáis con otros libros de electromagnetismo para mejorar el entendimiento de la teoría y practicar más ejercicios. 
            </p>
            <p className="home-about-body">
            La mayor dificultad de la asignatura yo diría que es conseguir hacer los ejercicios con cierta soltura. Una vez entiendas qué es lo que se conserva, que se mantiene y que varía en cada ejercicio; y la integración en los distintos sistemas de coordenadas; tienes la asignatura prácticamente salvada. 
            </p>

            <ul className="main-list">
            <li className="main-list-item-no">SEMANA 1 (19-25 SEPT) 
                <ul><li className="main-list-item-no"><ImPointRight /> Repaso general de cálculo vectorial.</li></ul>  
            </li>

            <li className="main-list-item-no">SEMANA 2 (26-02 OCT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 1.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 1.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 2.</li>
                </ul>    
            </li>

            <li className="main-list-item-no">SEMANA 3 (03-09 OCT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 2.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 1.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 2.</li>
                </ul>    
            </li>

            <li className="main-list-item-no">SEMANA 4 (10-16 OCT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 3.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 3.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 4.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 5 (17-23 OCT): SEMANA DE DESCANSO </li>

            <li className="main-list-item-no">SEMANA 6 (24-30 OCT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 3.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 4.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 4.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 7 (31-06 NOV) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 5.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 5.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 6.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 8 (07-13 NOV) 
                <ul>
                    
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 5.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 6.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 6.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 9 (14-20 NOV) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 7.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 7.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 8.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 10 (21-27 NOV): SEMANA DE DESCANSO  </li>

            <li className="main-list-item-no">SEMANA 11 (28-04 DEC) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 7.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 8.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 8.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 12 (05-11 DEC) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 9.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 9.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 10.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 13 (12-18 DEC) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría del tema 11.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 10.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios recomendados del tema 11.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">TRABAJO EXTRA (NAVIDAD) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 9.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 10.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer más ejercicios del tema 11.</li>
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