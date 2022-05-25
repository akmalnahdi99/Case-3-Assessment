import React, { useState, useEffect } from "react";
import app from '../../firebase';
import { useParams, Link } from 'react-router-dom';


const StaffGuestFeedbackDetails = () => {
    const [user, setUser] = useState({});

    const { id } = useParams();

    useEffect(() => {
        app.child(`feedback/${id}`).get().then((snapshot) => {
            if (snapshot.exists()) {
                setUser({ ...snapshot.val() })
            } else {
                setUser({})
            }
        })
    }, [id]);
    console.log('user', user);

    return (
        <div className='ibox minhigh350px'>
            <div className='ibox-title'>
                <span>Feedback Details</span>
            </div>
            <div className='ibox-content border m-0 paddingtop minhigh350px text-center'>
            <div className='col-12 mb-3'>
                <strong>ID: </strong>
                <span>{id}</span>
                </div>
                <div className='col-12 mb-3'>
                <strong>Topic: </strong>
                <span>{user.feedbacktopic}</span>
                </div>
                <div className='col-12 mb-3'>
                <strong>Context: </strong>
                <span>{user.context}</span>
                </div>
                <div className='col-12 mb-3'>
                <strong>Guest Email: </strong>
                <span>{user.useremail}</span>
                </div>
                <div className='row justify-content-center'>
                <div className='col-md-6 col-xs-12 mb-3'>
                    <Link to='/staff-home/room-cleaning'>
                        <button className='btn btn-primary w-100'>
                            Go back
                        </button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default StaffGuestFeedbackDetails;

