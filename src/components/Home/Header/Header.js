import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Header.css'

const Header = () =>
{
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to="/home"><img src="https://i.ibb.co/PcvzLCV/logo.png" alt="" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={user.email ? "mx-auto navbar-custom-two" : "mx-auto navbar-custom"}>
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
                                color: "#FF7F47"
                            }}
                        >
                            About Us
                        </NavLink>
                        {user.email && <NavLink
                            className="link"
                            to="/addAService"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#FF7F47"
                            }}
                        >Add A New Service</NavLink>}
                        {user.email && <NavLink
                            className="link"
                            to="/myOrders"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#FF7F47"
                            }}
                        >My Orders</NavLink>}
                        {user.email && <NavLink
                            className="link"
                            to="/manageOrders"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#FF7F47"
                            }}
                        >Manage All Orders</NavLink>}

                        {
                            user.email ?
                                <Button onClick={logOut}>Logout</Button>
                                :
                                <NavLink
                                    className="link"
                                    to="/login"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Login
                                </NavLink>
                        }
                    </Nav>
                    <Nav>
                        <Navbar.Text>
                            Signed in as: {
                                user.email ? <p><b>{user.displayName}</b></p> : <p>Guest</p>
                            }
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;