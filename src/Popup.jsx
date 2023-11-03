import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from './Assets/logo.png'
import App from './App';


function Popup(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        props.setTimeLeft( 20 )
    };
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleShow()
        props.setTimeLeft(10000)
    }, [App])

    return (
        <div>
            <>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                    size='md'
                    style={{backgroundColor:'#00246B'}}
                >
                    <Modal.Header closeButton>
                        <img src={logo} width={100} alt="logo" />
                        <Modal.Title className='fw-bold text-danger'>Coding Quiz</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className='font-monospace'>This is a basic Javascript quiz game, We provided <span className='text-success fw-bold'>10 Questions</span> and <span className='text-danger fw-bold'>20 Seconds</span> for each question answering... <span className='text-info'>All the best 👍</span></p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='tada fw-bold' variant="success" onClick={handleClose}>
                            Start Quiz
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default Popup