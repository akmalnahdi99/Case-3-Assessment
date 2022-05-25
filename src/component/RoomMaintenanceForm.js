import React, { useState } from "react";
import app from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";

export default function RoomMaintenanceForm() {

    const { currentUser } = useAuth()

    const initialState = {
        status: 'Requested',
        context: '',
        userID: currentUser.uid,
        useremail: currentUser.email,
        roomnumber: ''
    }
    const [state, setState] = useState(initialState);

    const { context, userID, useremail, roomnumber } = state;

    const history = useHistory();
    const [error, setError] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!context || !userID || !useremail || !roomnumber) {
            return setError('Please fill in all of the necesary information')
        } else {
            app.child('maintenance').push(state, (err) => {
                if (err) {
                    setError(err);
                } else {
                    setError('Your request has been sent');
                }
            });
            setTimeout(() => history.push('/room-maintenance'))
        }
    };
    return (
        <div className='ibox minhigh350px'>
            <div className='ibox-content border paddingtop minhigh350px'>
                <h2>Please fill in the details for your request</h2>
                <form className='m-t' onSubmit={handleSubmit}>
                    <div className='form-group' >
                        <label className='w-100 mb-2' htmlFor='context'>Context</label>
                        <textarea className='form-control' rows='5' id='context' name='context' value={context} onChange={handleInputChange} />
                    </div>

                    <div className='form-group' >
                        <label className='w-100 mb-2' htmlFor='quantity'>Room Number</label>
                        <input className='form-control' type='text' id='roomnumber' name='roomnumber' value={roomnumber} onChange={handleInputChange} />
                    </div>
                    {error && <p className="text-orange mt-2">{error}</p>}
                    <input className='btn btn-primary my-3 w-100' type='submit' value='Request Maintenance' />
                </form>
            </div>
        </div>
    )
}