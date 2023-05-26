import React from "react";
import { Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

import "../../App.css";

import Guia from "../../assets/Guias/quimica_guia.pdf"

const Física = () => {
    return (
        <div className="matematicas">
            <div className='container' id='matematicas'>

                <Row className="aligh-items-center">
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Química{" "}
                            <span role="img">⚗️</span>
                        </h1>
                    </Col>
                </Row>

                <div className="guia">
                <a className="button-guia" href={Guia}>Guía completa</a>
                </div>

                <h2>Resumen y pre-requisitos</h2>
                <p className="home-about-body">
                Así como resumen para una persona que no ha visto Química en su vida como soy yo, os puedo decir que es una asignatura larga, y que olvídate de tener ningún tipo de ayuda con la UNED, porque al menos en esta estás practicamente solo. A excepción de uno de los profesores, que hizo unas tutorias en las que ponía diapositivas bastante decentes. Os recomiendo que os metaís en las clases de tutorías o, sino podeís, intentad veros los videos grabados. Se dan muchas cosas por sabidas, pero, además, no es solo eso, sino que en la Moodle no hay ni un miserable recurso a no ser que te compres el libro de texto que bueno, ese es otro tema a parte. 
                </p>
                <p className="home-about-body">
                El libro de texto se compone de dos tomos. Mi recomendación es que tal y como estáis leyendo esto no compréis el libro. Tiene mucho relleno, no está adaptado para el estudio desde casa, es antiguo, difícil de comprender, creo que le pondría un 2 sobre 10 y solo comentando la parte que he leído porque es imposible si quiera leerlo entero en un cuatrimestre con cuatro asignaturas más. 
                </p>
                <p className="home-about-body">
                Como pre-requisitos hay dos opciones. La primera es que no hayas visto química en tu vida en ese caso te recomiendo que te cojas un libro de química de segundo de bachillerato en plan chill y a la hora del cafelito te pones a leertelo. Si ese no es tu caso y tienes la suerte de haber visto química en el instituto o en la universidad estás de suerte, no necesitas nada. La asignatura como tal no me parece difícil, simplemente me parece que es larga y me da mucho coraje que no te den ningún recurso. 
                </p>

                <h2>Contenidos</h2>
                <p className="home-about-body">
                
                </p>
                <h4>Parte 1: </h4>
                <ol>
                    <li>Estructura atómica.</li>
                    <li>Clasificación periódica: Configuración electrónica y propiedades de los elementos </li>
                    <li>Enlace químico: enlace iónico, enlace covalente, y otros tipos de enlace.</li>
                    <li>Geometría molecular.</li>
                </ol>
                <p className="home-about-body">
                Esta parte en mi opinión es muy teórica y la más aburrida, eso sí, aprendetela porque es la más facil y puede salvarte el examen. Se busca que conozcas las bases de la Química con un enfoque a las aplicaciones en física y el significado físico de todos los elementos. Son contenidos que habrás visto en bachillerato, así que se hace muy ameno, incluso 
                si nunca has dado química como es mi caso, no me ha parecido nada complicado. Los contenidos son la composición de la materia, la estructura de los átomos, sus propiedades periódicas, el enlace y la estructura de las moléculas y la manera en que interaccionan para dar lugar a los diferentes estados de agregación en que se presenta la materia.
                </p>
                <h4>Parte 2: </h4>
                <ol>
                    <li>Termodinámica química.</li>
                    <li>Equilibrio químico. </li>
                    <li>Cinetoquímica.</li>
                </ol>
                <p className="home-about-body">
                En esta parte se busca que tengas conocimiento de las principales funciones termodinámicas que controlan la espontaneidad y el equilibrio en las transformaciones químicas, el progreso temporal de las mismas en términos de velocidades de reacción y su dependencia con la temperatura y con la concentración de las sustancias reaccionantes. En esta parte empieza lo 
                divertido, porque empiezan a haber ejercicios prácticos y se hace mucho más ameno estudiar la asignatura. Yo lo que hice fue buscar ejercicios por internet resueltos porque en el libro de texto vienen muy pocos y, como ya he dicho anteriormente, es un libro que no es nada didáctico. 
                </p>
                <h4>Parte 3: </h4>
                <ol>
                    <li>Acidos y bases.</li>
                    <li>Equilibrio iónico en sistemas heterogéneos. </li>
                    <li>Oxidación-reducción.</li>
                    <li>Electroquímica.</li>
                    <li>Reacciones químicas.</li>
                </ol>
                <p className="home-about-body">
                En esta parte aprenderás mejor el significado del equilibrio químico, la constante de equilibrio y los aspectos cuantitativos que se derivan de ello en particular en los equilibrios en sistemas iónicos en disolución. La tercera parte es muy práctica, mi recomendación es que te leas la teoría lo más rápido que puedas (entendiendolo todo) y empieces a hacer ejercicios 
                de todo tipo. Yo creo, al menos por lo que he visto en los examenes de los últimos años, que de esta parte es de la que más ejercicios entran, por tanto, hay que llevarla lo mejor posible. 
                </p>
                <h4>Parte 4: </h4>
                <ol>
                    <li>Introducción a la química orgánica.</li>
                    <li>Hidrocarburos. </li>
                    <li>Funciones orgánicas.</li>
                </ol>
                <p className="home-about-body">
                Como todas las últimas partes de las asignaturas, esta casi nunca da tiempo. En mi opinión es un tema complejo que, aunque si vienes de bachillerato ya lo habrás visto y no te resultará tan complicado, para personas como yo que no tienen ninguna base de química, es una locura aprenderse esto los días previos al examen. Por eso, mi recomendación es que te organices bien (puedes mirar 
                más abajo el plan de estudios que he organizado después de haber hecho la asignatura y en base a mi experiencia) y no dejes este tema para los últimos días, deja al menos dos semanas de antelación para asimilar bien la teoría. Lo bueno es que no he visto muchos ejercicios de esta parte en el examen y se puede aprobar perfectamente sin mirarla, pero aun así no te arriesgues y miratela, nadie 
                quiere repetir el examen en septiembre. 
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
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer esquema de estructura atómica.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer esquema de clasificación periódica.</li>
                </ul>  
            </li>

            <li className="main-list-item-no">SEMANA 2 (26-02 OCT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría de enlace químico y geometría molecular.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer esquema de enlace químico.</li>
                </ul>    
            </li>

            <li className="main-list-item-no">SEMANA 3 (03-09 OCT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Ejercicios de enlace químico.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría de termodinámica química.</li>
                </ul>    
            </li>

            <li className="main-list-item-no">SEMANA 4 (10-16 OCT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría de equilibrio químico.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer esquema de termodinámica química y equilibrio químico.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 5 (17-23 OCT): SEMANA DE DESCANSO </li>

            <li className="main-list-item-no">SEMANA 6 (24-30 OCT) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios de termodinámica química y equilibrio químico.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría de cinetoquímica</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 7 (31-06 NOV) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios de cinetoquímica.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer todo lo anterior.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 8 (07-13 NOV) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría de ácidos y bases, y equilibrio iónico en sistemas heterogéneos.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios de ácidos y bases.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 9 (14-20 NOV) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios de equilibrio iónico.</li>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría de REDOX, y de electroquímica.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer esquema de ácidos y bases, equilibrio iónico y REDOX.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 10 (21-27 NOV): SEMANA DE DESCANSO  </li>

            <li className="main-list-item-no">SEMANA 11 (28-04 DEC) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios de REDOX y electroquímica.</li>
                    <li className="main-list-item-no"><ImPointRight /> Repaso de la teoría.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 12 (05-11 DEC) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría de química orgánica.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer esquema de química orgánica. </li>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría de hidrocarburos.</li>
                </ul>     
            </li>

            <li className="main-list-item-no">SEMANA 13 (12-18 DEC) 
                <ul>
                    <li className="main-list-item-no"><ImPointRight /> Leer teoría de funciones orgánicas.</li>
                    <li className="main-list-item-no"><ImPointRight /> Hacer ejercicios de química orgánica, hidrocarburos y funciones orgánicas.</li>
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