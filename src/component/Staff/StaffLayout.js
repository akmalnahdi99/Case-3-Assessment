import React, { useState } from "react";
import Footer from "../Footer";
import Logo from '../../assets/imgs/logo.png'
import { Navbar, Nav } from 'react-bootstrap'
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function StaffLayout({ children }) {
    const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        try {
            await logout()
            history.push('/login')
        } catch {
            setError('failed to logout')
        }
    }

    return (
        <React.Fragment>
            <div style={{ border: "0px solid red" }}>
                <div className="border-bottom nav-header">

                    <header className="header row">
                        <div className="navbar-header col-9">
                            <div className="navbar-brand float-left mt-2">
                                <img src={Logo} width='120px' alt='' /> <br />
                                {error && <span className='text-danger'>{error}</span>}
                            </div>
                        </div>
                        <ul className="nav navbar-right col-3 justify-content-end align-items-center">
                            <li>
                                <button className="p-0 bg-transparent" style={{ textDecoration: "none", border: "none" }} onClick={handleLogout}><span>Log Out</span></button>
                            </li>
                        </ul>
                    </header>
                </div>
                <Navbar bg="light" variant="light" expand="lg" sticky="top" className='p-0'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href='/staff-home'>Home</Nav.Link>
                            <Nav.Link href='/staff-home/guest-signup'>Create Guest Account</Nav.Link>
                            <Nav.Link href='/staff-home/food-delivery'>Food Delivery</Nav.Link>
                            <Nav.Link href='/staff-home/amenities-request'>Amenities Request</Nav.Link>
                            <Nav.Link href='/staff-home/room-maintenance'>Room Maintenance</Nav.Link>
                            <Nav.Link href='/staff-home/room-cleaning'>Room Cleaning</Nav.Link>
                            <Nav.Link href='/staff-home/transportation'>Transportation</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {children}
                <Footer />
            </div>
        </React.Fragment>
    );
}