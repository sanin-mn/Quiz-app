import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Coding Quiz
                    </Navbar.Brand>
                    <h4 className='' style={{color:'red'}}>Current score : {props.score}</h4>
                    <Navbar.Text>
                    <h4> {props.time} seconds</h4>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header