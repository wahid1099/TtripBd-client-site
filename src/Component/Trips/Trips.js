import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";
import Trip from "./Trip";

const Trips = () => {
    const [trips,setTrips]=useState([]);
    useEffect(()=>{
        fetch('https://desolate-thicket-49605.herokuapp.com/trips')
            .then(res=>res.json())
            .then(data=>setTrips(data));
    },[])

    return (
        <div>
            <h1 className="text-center mt-5">Trips</h1>
            <Row xs={2} md={3} lg={3} className="g-4 container mx-auto">
                {
                    trips.map(trip=><Trip
                        key={trip._id}
                        trip={trip}>

                    </Trip>)
                }

            </Row>
            
        </div>
    );
};

export default Trips;