import React,{useRef} from 'react';
import {Button, Form} from "react-bootstrap";

const NewTrips = () => {
    const nameRef=useRef();
    const priceRef=useRef();
    const imgRef=useRef();
    const descrptionRef=useRef();
    const dayRef=useRef();


    const handleAddTrip = e => {
        const name=nameRef.current.value;
        const price=priceRef.current.value;
        const img=imgRef.current.value;
        const days=dayRef.current.value;
        const description=descrptionRef.current.value;

        const newTrip={name,img,description,price,days}
        console.log(name);

        fetch('https://desolate-thicket-49605.herokuapp.com/addnewtrip', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTrip)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the New Trip.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }





    return (
      <div>
          <div className="container mt-5 mb-5">
              <h1 className="text-center">Add new Trip</h1>
              <Form onSubmit={handleAddTrip}>
                  <Form.Group className="mb-3 w-50" controlId="formBasicEmail">

                      <Form.Control type="text" placeholder="Enter trip name" ref={nameRef} required/>

                  </Form.Group>
                  <Form.Group className="mb-3 w-50" controlId="formBasicEmail">

                      <Form.Control type="text" placeholder="Enter trip img" ref={imgRef} required/>

                  </Form.Group>
                  <Form.Group className="mb-3 w-50" controlId="formBasicEmail">

                      <Form.Control type="text" placeholder="Enter trip Description" ref={descrptionRef} required/>

                  </Form.Group>
                  <Form.Group className="mb-3 w-50" controlId="formBasicEmail">

                      <Form.Control type="text" placeholder="Enter trip Price" ref={priceRef} required/>

                  </Form.Group>
                  <Form.Group className="mb-3 w-50" controlId="formBasicEmail">

                      <Form.Control type="text" placeholder="Enter trip Days" ref={dayRef} required/>

                  </Form.Group>




                  <Button variant="primary" type="submit">
                     Add New Trip
                  </Button>
              </Form>
          </div>


          </div>


    );
};

export default NewTrips;