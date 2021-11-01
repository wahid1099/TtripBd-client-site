import React from 'react';
import {Form,FloatingLabel,Button} from "react-bootstrap";

const Contact = () => {
    return (
        <div className="Contact-section container">
            <h2>Contact us </h2>
            <div className="row mt-5 mb-5">
                <div className="col-md-6">
                    <Form>
                        <FloatingLabel controlId="floatingTextarea" label="Email" className="mb-3">
                            <Form.Control as="textarea" placeholder="Your Email" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingTextarea" label="Phone" className="mb-3">
                            <Form.Control as="textarea" placeholder="Your Number" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Form>
                    <Button variant="outline-danger" className="mt-3 w-75">Submit</Button>
                </div>
                <div className="col-md-6 w-50">
                    <iframe className="w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57481.99859531037!2d88.86324695468697!3d25.782950008377643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e351100277d20b%3A0x11cac2a1674e86be!2sSaidpur!5e0!3m2!1sen!2sbd!4v1633335058356!5m2!1sen!2sbd"
                    ></iframe>

                </div>
            </div>

        </div>
    );
};

export default Contact;