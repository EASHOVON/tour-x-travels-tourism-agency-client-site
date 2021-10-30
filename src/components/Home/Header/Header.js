import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () =>
{
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to="/home"><img src="https://i.ibb.co/PcvzLCV/logo.png" alt="" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto navbar-custom">
                        <NavLink
                            className="link"
                            to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#FF7F47"
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="link"
                            to="/about"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            className="link"
                            to="/destination"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Destination
                        </NavLink>
                    </Nav>
                    <Nav>
                        <Navbar.Text>
                            Signed in as: Guest
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;