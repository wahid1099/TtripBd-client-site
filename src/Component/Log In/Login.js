import React from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import {Button, Form} from "react-bootstrap";
import { BsGoogle,BsGithub } from "react-icons/bs";
const Login = () => {
    //const{singInwithGoogle,singInWithGithub,error, processLogin,setEmail,setPasword,handLogin}=UseAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';




    const {
        signInWithEmail,
        singInwithGoogle,
        singInWithGithub,
        userEmail,
        userPassword,
        error,
        redicretlocation,setLocation
    } = UseAuth();


    return (
        <div className="login mx-auto text-center">
            <div className="container mx-auto mt-5 pt-4" >
                <h1 className="text-decoration-none text-black">Trip<span className="text-success ">BD</span></h1>


                <div>
                    <h2 className="text-danger mt-4">LogIn To Your Account</h2>
                    <Form >
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                            <Form.Label className="float-start">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={userEmail}/>

                        </Form.Group>

                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                            <Form.Label className="float-start">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={userPassword}/>
                        </Form.Group>

                        <Button variant="danger" type="submit" className="w-50 mx-auto mt-4" onClick={signInWithEmail}>
                            Log In
                        </Button>
                        <Link to="/register">
                            <p className="text-danger mt-2">Don't Have an Account?</p>
                        </Link>
                    </Form>

                </div>
                <p>{error}</p>
                <div>
                    <Button variant="danger" className="w-25" onClick={singInwithGoogle}><BsGoogle/>Google</Button>
                    <Button variant="secondary" className="w-25 m-4" onClick={singInWithGithub}><BsGithub/> Github</Button></div>
            </div>
        </div>
    );
};


export default Login;