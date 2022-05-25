import React, { useState } from "react";
import app from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";

export default function TransportForm() {
    
    const { currentUser } = useAuth()

    const initialState = {
        status: 'Requested',
        vehicletype: '',
        day: '',
        duration: '',
        userID: currentUser.uid,
        useremail: currentUser.email
    }
    const [state, setState] = useState(initialState);

    const { vehicletype, day, duration, userID, useremail } = state;

    const history = useHistory();
    const [error, setError] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!vehicletype || !day || !duration || !userID || !useremail ) {
            return setError('Please fill in all of the necesary information')
        } else {
            app.child('transport').push(state, (err) => {
                if (err) {
                    setError(err);
                } else {
                    setError('Your request have been sent');
                }
            });
            setTimeout(() => history.push('/transportation'))
        }
    };
    return (
            <div className='ibox minhigh350px'>
                <div className='ibox-content border paddingtop minhigh350px'>
                    <h2>Please fill in the details for your request</h2>
                    <form className='m-t' onSubmit={handleSubmit}>
                        <div className='form-group' >
                            <label className='w-100 mb-2' htmlFor='vehicletype'>Vehicle Type</label>
                            <select className='form-control' id='vehicletype' name='vehicletype'onChange={handleInputChange} >
                                <option value=''>...</option>
                                <option value='5 Seeter SUV'>4 Seeter SUV</option>
                                <option value='7 Seeter SUV'>7 Seeter SUV</option>
                                <option value='7 Seeter Mini Van'>7 Seeter Mini Van</option>
                                <option value='9 Seeter Mini Van'>9 Seeter Mini Van</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-md-6 col-xs-12'>
                                    <label className='my-2' htmlFor='day'>Day</label>
                                    <select className='form-control' name='day' id='day' onChange={handleInputChange}>
                                        <option value=''>...</option>
                                        <option value='Today'>Today</option>
                                        <option value='Tomorrow'>Tomorrow</option>
                                    </select>
                                </div>
                                <div className='col-md-6 col-xs-12'>
                                    <label className='my-2' htmlFor='duration'>Duration</label>
                                    <select className='form-control' name='duration' id='duration' onChange={handleInputChange}>
                                        <option value=''>...</option>
                                        <option value='3 hours'>3 hours</option>
                                        <option value='6 hours'>6 hours</option>
                                        <option value='12 hours'>12 hours</option>
                                        <option value='24 hours'>24 hours</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {error && <p className="text-orange mt-2">{error}</p>}
                        <input className='btn btn-primary my-3 w-100' type='submit' value='Request Transportation' />
                    </form>
                </div>
            </div>
    )
}