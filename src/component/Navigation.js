import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Navigation = () => {

    return (
        <Navbar bg="light" variant="light" expand="lg" sticky="top" className='p-0'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className='nav-link' href='/'>Home</Nav.Link>
                    <Nav.Link href='/facilities' className='nav-link'>Facilities</Nav.Link>
                    <Nav.Link href='/feedback' className='nav-link'>Feedback</Nav.Link>
                    <NavDropdown title="Our Services" bg="grey" id="basic-nav-dropdown">
                        <NavDropdown.Item href='/food-delivery'>Food Delivery</NavDropdown.Item>
                        <NavDropdown.Item href='/amenities-request'>Amenities Request</NavDropdown.Item>
                        <NavDropdown.Item href='/room-maintenance'>Room Maintenance</NavDropdown.Item>
                        <NavDropdown.Item href='/room-cleaning'>Room Cleaning</NavDropdown.Item>
                        <NavDropdown.Item href='/transportation'>Transportation</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation