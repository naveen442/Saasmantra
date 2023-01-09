import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
const Header = () => {
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" className='col-md-12 header' bg="white" variant="light">
                <Container>
                    <Navbar.Brand className='navbarbrand' href="#Home">Opalin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#Home" className='navlink'>Home</Nav.Link>
                            <Nav.Link href="#pricing" className='navlink'>Pricing</Nav.Link>
                            <Nav.Link href="#About" className='navlink'>About</Nav.Link>


                        </Nav>
                        <Nav>
                            <Nav.Link className='navlink' href="#LogIn">Login</Nav.Link>
                            {/* <Nav.Link href="SignUp" className='Signup'>Sign Up</Nav.Link> */}
                            <Button className='Signup'>Sign Up</Button>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;