import React from 'react'
import { Nav, Navbar, Form } from 'react-bootstrap';

export default function HomeNav() {
    return (
        <div>
            <section className="navSection">
                    <Navbar style={{zIndex: 3, background: "#ffffff"}} expand="lg">
                        <Navbar.Brand href="#home" className='navBrand' style={{ color: "#1865F2"}} >LearnAcademy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            
                            </Nav>
                            <Form inline>
                                <Nav.Link style={{color: 'black'}} href="/">Home</Nav.Link>
                                <Nav.Link style={{color: 'black'}} href="#link">About</Nav.Link>
                                <Nav.Link style={{color: 'black'}} href="#home">Teachers</Nav.Link>
                                <Nav.Link style={{color: 'black'}} href="#link">Students</Nav.Link>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </section>
        </div>
    )
}
