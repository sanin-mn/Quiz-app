import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './Assets/logo.png'
import questions from './questionsList';

function Header(props) {
    return (
        <div>
            <Navbar className="bg-light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="100"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Text>
                    <h5 style={{fontFamily:'monospace'}}>Current score : <span className='text-success'>{ props.score }/{ questions.length }</span></h5>
                    </Navbar.Text>
                    <Navbar.Text>
                    <h5 style={{fontFamily:'monospace'}}><span className='text-danger '>{props.time}</span> seconds</h5>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header