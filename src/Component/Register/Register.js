import React from 'react';
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const Register = () => {
    const {error, getName,  getEmail, userRegistration, getPassword}=UseAuth();
    return (
        <div className="register  mx-auto text-center">
            <div className="container mt-5 pt-4" >
                <h1 className="text-decoration-none text-black">Trip<span className="text-success">BD</span></h1>


                <div>
                    <h2 className="text-danger mt-4">Register New Account</h2>
                    <Form>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                            <Form.Label className="float-start">Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" onChange={getName}/>

                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                            <Form.Label className="float-start">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={getEmail}/>

                        </Form.Group>

                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                            <Form.Label className="float-start">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={getPassword}/>
                        </Form.Group>

                        <Button variant="danger" type="submit" className="w-50 mx-auto mt-4" onClick={userRegistration}>
                            Sing up
                        </Button>


                        <Link to="/login"><p className="text-danger mt-3">Already Have an Account?</p></Link>
                    </Form>
                    <p className="text-danger">{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;