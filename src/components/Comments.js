/** import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import commentImg from "../assets/comment.png";
import "../App.scss";
import divider from "../assets/divider_2.png";
import "animate.css";

// Comment Component
const Comment = ({ content, author, date }) => {
  return (
    <div className="user-comment">
      <span>Escrito por {author}</span>
      <span> el {date.toLocaleDateString()}</span>
      <p className='comment-content'>{content}</p>
    </div>
  );
};

// Comments Section Component
const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ content: '', author: '' });

  useEffect(() => {
    // Fetch existing comments from an API or database here
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.content.trim() === '' || newComment.author.trim() === '') {
      // Handle form validation error
      return;
    }

    const date = new Date();
    const comment = { ...newComment, date };
    const updatedComments = [...comments, comment];
    setComments(updatedComments);

    setNewComment({ content: '', author: '' });
  };

  return (
    <div className='comment-section'>
        <Row>
            <img src={divider} className="divider" alt="divider" />
        </Row>
    <section className='comment'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={5} className='gif'>
                    <img className="animate__animated animate__zoomIn header-img" src={commentImg}/>
                </Col>

                <Col size={12} md={6} className="form-section">
                    <div className='animate__animated animate__fadeIn'>
                    <h2>Tú también puedes dejar tu opinión sobre la asignatura!</h2>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <Row>
                            <Col size={12} sm={6} className="px-1">
                            <label htmlFor='name'>Nombre:</label>
                            <input
                            type="text"
                            id="name"
                            placeholder="Tu nombre"
                            value={newComment.author}
                            onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                            required
                            />
                            </Col>
                            <Col size={12} sm={6} className="px-1 message-form">
                            <label htmlFor="message">Mensaje:</label>
                            <textarea
                            id="message"
                            placeholder="Comparte con los demás tu experiencia."
                            value={newComment.content}
                            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                            required
                            ></textarea>
                            </Col>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </Row>
                    </form>
                    </div>
                </Col>
            </Row>
            <Row className='align-items-center'>
            {comments.map((comment, index) => (
                <Comment key={index} {...comment} />
            ))}
            </Row>
        </Container>
    </section>
    </div>
  );
};

export default CommentsSection; **/

