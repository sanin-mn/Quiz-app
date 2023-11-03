import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from './Assets/logo.png'

function Popup(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        props.setTimeLeft( 15 )
    };
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleShow()
        props.setTimeLeft(10000)
    }, [])

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
                    style={{backgroundColor:'InfoBackground'}}
                >
                    <Modal.Header closeButton>
                        <img src={logo} width={100} alt="" />
                        <Modal.Title className='fw-bold text-danger'>Coding Quiz</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        This is a Basic Programming quiz game,we provided 5 questions and 10 seconds for each question answering.. <span className='text-info'>All the best👍</span>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='tada' variant="success" onClick={handleClose}>
                            Start Quiz
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default Popup