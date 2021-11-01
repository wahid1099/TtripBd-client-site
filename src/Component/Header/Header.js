import React from 'react';
import UseAuth from "../../Hooks/UseAuth";
import {Container, Row, Col, Form, FormControl, Button, Nav, Navbar, Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    const {user,logOut}=UseAuth();
    return (
        <div className='sticky-top bg-light' >
            <Container>
                <Row className='container'>
                    <Col lg={2} md={2} sm={12}>
                        <Link to='/home' className="text-decoration-none text-black"><h1 className="text-decoration-none text-black">TRIP<span className="text-success">BD</span></h1></Link>
                    </Col>
                    <Col lg={5} md={5} sm={12}>
                        <Form className="d-flex ms-5 mt-2">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-5  w-100"
                                aria-label="Search"
                            />
                            <Button variant="success" className="me-5">Search</Button>
                        </Form>
                    </Col>
                    <Col lg={5} md={5} sm={12} >

                        <Navbar collapseOnSelect expand="lg" >


                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav>
                                    <Nav.Link href="#deets" as={Link} to='/home' className="text-black">Home</Nav.Link>
                                    <Nav.Link href="#deets" className="text-black" as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link href="#deets" className="text-black" as={Link} to="/trips">Trips</Nav.Link>
                                    <Nav.Link href="#deets" className="text-black" as={Link} to="/contact">Contact</Nav.Link>


                                    { user.accessToken ?
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                              <FaUserAlt/>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                {user?.accessToken && <span className="text-primary ms-3"><strong>Hello {user.displayName } </strong> </span>  }
                                                <Dropdown.Item as={Link} to="/myorders">My Orders</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2" as={Link} to="/allorder">Manage All Orders</Dropdown.Item>
                                                <Dropdown.Item as={Link} to="/newtrip">Add A New Trip</Dropdown.Item>
                                                <Nav.Link href="#deets"  className="text-black" as={Link} to="/logout"><Button variant="danger" onClick={logOut}>Log Out</Button></Nav.Link>
                                            </Dropdown.Menu>

                                        </Dropdown>

                                        : <Nav.Link href="#deets" className="text-black" as={Link} to="/login"><Button variant="danger"><MdLogin/>LogIn</Button></Nav.Link>}




                                </Nav>
                            </Navbar.Collapse>

                        </Navbar>
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default Header;