import React, { useState, useEffect } from "react";
import app from '../firebase';
import { useParams, Link } from 'react-router-dom';


const FoodDeliveryDetails = () => {
    const [user, setUser] = useState({});

    const { id } = useParams();

    useEffect(() => {
        app.child(`orders/${id}`).get().then((snapshot) => {
            if (snapshot.exists()) {
                setUser({ ...snapshot.val() })
            } else {
                setUser({})
            }
        })
    }, [id]);

    var statustext = "text-orange";

    if (user.status === 'Delivered') {
        statustext = 'text-success'
    }
    else if (user.status === 'In Progress') {
        statustext = 'text-info'
    }
    else if (user.status === 'Canceled') {
        statustext = 'text-red'
    }

    console.log('user', user);

    return (
        <div className='ibox minhigh350px'>
            <div className='ibox-title'>
                <span>Order Details</span>
            </div>
            <div className='ibox-content border m-0 paddingtop minhigh350px text-center'>
                <div className='col-12 mb-3'>
                    <strong>ID: </strong>
                    <span>{id}</span>
                </div>
                <div className='col-12 mb-3'>
                    <strong>Status: </strong>
                    <span className={statustext}>{user.status}</span>
                </div>
                <div className='col-12 mb-3'>
                    <strong>Item Name: </strong>
                    <span>{user.itemname}</span>
                </div>
                <div className='col-12 mb-3'>
                    <strong>Delivery Day: </strong>
                    <span>{user.deliveryday}</span>
                </div>
                <div className='col-12 mb-3'>
                    <strong>Delivery Time: </strong>
                    <span>{user.deliverytime}</span>
                </div>
                <div className='col-12 mb-3'>
                    <strong>Email: </strong>
                    <span>{user.useremail}</span>
                </div>
                <div className='col-12 mb-3'>
                    <strong>Room Number: </strong>
                    <span>{user.roomnumber}</span>
                </div>
                <div className='col-12 mb-3'>
                    <Link to='/food-delivery'>
                        <button className='btn btn-primary w-50'>
                            Go back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodDeliveryDetails;

