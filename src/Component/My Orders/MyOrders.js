import React, {useEffect, useState} from 'react';
import UseAuth from "../../Hooks/UseAuth";
import Orders from "./orders";

const MyOrders = () => {
    const {user}=UseAuth();
    const [trips,settrips]=useState([]);

    useEffect(()=>{
        fetch(`https://desolate-thicket-49605.herokuapp.com/booktrip/${user.email}`)
            .then(res=>res.json())
            .then(data=>settrips(data));
    },[user])
    console.log(trips);
    return (
        <div>
            <h1 className="text-center mt-3">Your Trips</h1>
            {
                trips.map(trip=><Orders
                    trip={trip}></Orders>



                )
            }
            
        </div>
    );
};

export default MyOrders;