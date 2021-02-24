import React from 'react'
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap'
import './header.css'
import {
    MdQueryBuilder
} from "react-icons/md";
import {
    IconContext
} from "react-icons";

function Header() {
    return (
        <IconContext.Provider value={{size:'2rem', color:'#fff'}}>
            <Navbar expand="lg" className='custom-navbar'>
                <Container fluid='lg' className='mt-2'>
                    <Navbar.Brand href="#home" className='brand-name' style={{color:'#fff'}}>
                        <MdQueryBuilder style={ {
                            marginRight: '16px'
                        } } />
                        Nagger
                    </Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                        <Nav Nav className = "mr-auto nav-links"
                        style = {{color: ''}} >
                            <a href="#home" className='links'>Home</a>
                            <a href="#link" className='links'>Link</a>
                        </Nav>
                </Container>
            </Navbar>
        </IconContext.Provider>
    )
}

export default Header
